import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const trailRef = useRef<HTMLDivElement>(null)
  const trailPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Hide on mobile
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const handleDown = () => setIsClicking(true)
    const handleUp = () => setIsClicking(false)

    // Trail follows with delay
    let animFrame: number
    const animateTrail = () => {
      const dx = pos.x - trailPos.current.x
      const dy = pos.y - trailPos.current.y
      trailPos.current.x += dx * 0.15
      trailPos.current.y += dy * 0.15
      if (trailRef.current) {
        trailRef.current.style.left = `${trailPos.current.x}px`
        trailRef.current.style.top = `${trailPos.current.y}px`
      }
      animFrame = requestAnimationFrame(animateTrail)
    }
    animFrame = requestAnimationFrame(animateTrail)

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
      cancelAnimationFrame(animFrame)
    }
  }, [pos.x, pos.y])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: '#c4ff00',
          borderRadius: '50%',
          transition: 'transform 0.1s',
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
        }}
      />
      {/* Outer ring */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          border: `1px solid ${isHovering ? '#c4ff00' : 'rgba(196, 255, 0, 0.3)'}`,
          borderRadius: '50%',
          transform: `translate(-50%, -50%)`,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
    </>
  )
}
