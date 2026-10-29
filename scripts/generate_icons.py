#!/usr/bin/env python3
"""Generate original Relay Campaigns icon PNGs (no third-party artwork).

Design: rounded-square violet→sky gradient tile with a white "relay" mark —
a station dot emitting two signal arcs toward a destination dot. Pure Python,
uses only zlib + struct (no image libraries required).
"""
import math
import struct
import zlib
from pathlib import Path

SIZES = [16, 32, 48, 128, 256]
OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "icons"


def lerp(a, b, t):
    return a + (b - a) * t


def sample_gradient(x, y, size):
    """Diagonal violet (#6d28d9) -> sky (#0ea5e9) gradient."""
    t = max(0.0, min(1.0, (x + y) / (2.0 * size)))
    c1 = (0x6D, 0x28, 0xD9)
    c2 = (0x0E, 0xA5, 0xE9)
    return tuple(int(lerp(c1[i], c2[i], t)) for i in range(3))


def rounded_rect_alpha(px, py, size, margin, radius):
    """Coverage (0..1) of a rounded square; 1 inside, antialiased edge."""
    x0, y0 = margin, margin
    x1, y1 = size - margin, size - margin
    r = radius

    def sd(cx, cy):
        # signed distance to the rounded rect (negative inside)
        qx = max(x0 + r - cx, 0.0, cx - (x1 - r))
        qy = max(y0 + r - cy, 0.0, cy - (y1 - r))
        # clamp into core rect then add corner distance correction
        nx = min(max(cx, x0), x1)
        ny = min(max(cy, y0), y1)
        if qx == 0 and qy == 0:
            # inside core edges; check corner rounding
            dx = max(x0 - cx + 0, cx - x1, 0)
            dy = max(y0 - cy, cy - y1, 0)
            return -min(r, max(-((cx - clamp_corner(cx, x0 + r, x1 - r)) ** 2 + (cy - clamp_corner(cy, y0 + r, y1 - r)) ** 2) ** 0.5 + r, 0))
        return (qx * qx + qy * qy) ** 0.5 - r

    d = sd(px, py)
    return max(0.0, min(1.0, 0.5 - d))


def clamp_corner(v, lo, hi):
    return min(max(v, lo), hi)


def circle_alpha(px, py, cx, cy, rad, aa=0.7):
    d = math.hypot(px - cx, py - cy) - rad
    return max(0.0, min(1.0, 0.5 - d / aa)) if aa > 0 else (1.0 if d < 0 else 0.0)


def ring_alpha(px, py, cx, cy, rad, width, aa=0.7):
    d = abs(math.hypot(px - cx, py - cy) - rad) - width / 2.0
    return max(0.0, min(1.0, 0.5 - d / aa))


def arc_alpha(px, py, cx, cy, rad, width, a0, a1, aa=0.7):
    ang = math.atan2(py - cy, px - cx)  # -pi..pi
    # normalize angles
    def norm(a):
        while a < -math.pi:
            a += 2 * math.pi
        while a > math.pi:
            a -= 2 * math.pi
        return a
    a0n, a1n = norm(a0), norm(a1)
    inside = False
    if a0n <= a1n:
        inside = a0n <= ang <= a1n
    else:
        inside = ang >= a0n or ang <= a1n
    if not inside:
        # also test cap circles at both ends
        ex0, ey0 = cx + rad * math.cos(a0n), cy + rad * math.sin(a0n)
        ex1, ey1 = cx + rad * math.cos(a1n), cy + rad * math.sin(a1n)
        if math.hypot(px - ex0, py - ey0) > width / 2 or math.hypot(px - ex1, py - ey1) > width / 2:
            return 0.0
    return ring_alpha(px, py, cx, cy, rad, width, aa)


def render(size):
    scale = size / 128.0
    margin = 2 * scale
    radius = 28 * scale
    # design coordinates (128 grid)
    src = (64, 92)
    dst = (64, 26)
    rows = []
    for y in range(size):
        row = bytearray()
        for x in range(size):
            px, py = x + 0.5, y + 0.5
            cover = rounded_rect_alpha(px, py, size, margin, radius)
            if cover <= 0:
                row += bytes((0, 0, 0, 0))
                continue
            r, g, b = sample_gradient(px, py, size)
            # inner highlight stroke
            hl = ring_alpha(px, py, size / 2, size / 2, (size / 2 - 6 * scale), 3 * scale) * 0.25
            # white relay mark
            w = 0.0
            big_arc = arc_alpha(px, py, src[0] * scale, src[1] * scale, 44 * scale, 10 * scale, math.radians(207), math.radians(333))
            small_arc = arc_alpha(px, py, src[0] * scale, src[1] * scale, 26 * scale, 7 * scale, math.radians(201.6), math.radians(338.4))
            dot_src = circle_alpha(px, py, src[0] * scale, src[1] * scale, 10 * scale)
            dot_dst = circle_alpha(px, py, dst[0] * scale, dst[1] * scale, 8 * scale)
            w = max(big_arc, small_arc, dot_src, dot_dst)
            w = min(1.0, w)
            # blend: base -> highlight (white 25%) -> mark (white)
            fr = lerp(r, 255, hl)
            fg = lerp(g, 255, hl)
            fb = lerp(b, 255, hl)
            fr = lerp(fr, 255, w)
            fg = lerp(fg, 255, w)
            fb = lerp(fb, 255, w)
            alpha = int(round(cover * 255))
            row += bytes((int(fr), int(fg), int(fb), alpha))
        rows.append(bytes(row))
    return rows


def write_png(path, size, rows):
    raw = b"".join(b"\x00" + r for r in rows)

    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)

    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", ihdr)
        + chunk(b"IDAT", zlib.compress(raw, 9))
        + chunk(b"IEND", b"")
    )
    path.write_bytes(png)
    print(f"wrote {path.relative_to(path.parents[2])} ({len(png)} bytes)")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for size in SIZES:
        write_png(OUT_DIR / f"icon-{size}.png", size, render(size))


if __name__ == "__main__":
    main()
