/**
 * Panel entry used in two ways:
 *  - as the module script of dist/panel/index.html (loaded by the content script
 *    inside an isolated extension iframe on web.whatsapp.com), and
 *  - directly during `npm run dev` for local UI work.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

function mount(): void {
  const target = document.getElementById('root') ?? document.getElementById('relay-root');
  if (!target) {
    console.warn('[Relay Campaigns] mount point not found; retrying…');
    setTimeout(mount, 300);
    return;
  }
  if (target.dataset.relayMounted === '1') return;
  target.dataset.relayMounted = '1';
  createRoot(target).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

mount();

export {};
