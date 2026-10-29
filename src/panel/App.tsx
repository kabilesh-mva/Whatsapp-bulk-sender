import { useState } from 'react';
import { AppProvider, useApp } from './AppContext';
import { SendScreen } from '../features/campaigns/SendScreen';
import { ReportsScreen } from '../features/campaigns/ReportsScreen';

type Screen = 'send' | 'reports';

function Shell() {
  const { session, settings } = useApp();
  const [screen, setScreen] = useState<Screen>('send');

  const isConnected = session.loggedIn === true;

  const closePanel = () => {
    window.parent.postMessage({ type: 'relay:close-panel' }, '*');
  };

  return (
    <div className="wa-app-shell" data-theme={settings.theme}>
      {/* Top Header Navigation matching WASender Image 1 */}
      <header className="wa-top-header">
        <div className="wa-brand">
          <span className="wa-brand-arrow">»</span>
          <span className="wa-brand-badge">WA</span>
        </div>

        <nav className="wa-nav-tabs">
          <button
            type="button"
            className={`wa-tab-btn ${screen === 'send' ? 'active' : ''}`}
            onClick={() => setScreen('send')}
          >
            <span className="wa-tab-icon">💬</span> Send messages
          </button>
          <button
            type="button"
            className={`wa-tab-btn ${screen === 'reports' ? 'active' : ''}`}
            onClick={() => setScreen('reports')}
          >
            <span className="wa-tab-icon">📈</span> Reports
          </button>
        </nav>

        <div className="wa-header-right">
          <div
            className={`wa-session-dot ${isConnected ? 'connected' : 'ready'}`}
            title={isConnected ? 'WhatsApp Web connected' : 'Ready'}
          />
          <div className="wa-user-avatar" title="Active user profile">
            LM
          </div>
          <button
            type="button"
            className="wa-btn-close-header"
            onClick={closePanel}
            aria-label="Close panel"
            title="Close panel"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="wa-main-content">
        {screen === 'send' && <SendScreen onGoToReports={() => setScreen('reports')} />}
        {screen === 'reports' && <ReportsScreen />}
      </main>

      <footer className="wa-footer">
        <span>Local-first · No messages or chats are read · All data stays on this device</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
