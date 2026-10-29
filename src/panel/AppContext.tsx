import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import type { AppSettings, SessionSnapshot } from '../types/domain';
import { request, subscribe } from '../lib/bridge';
import { DEFAULT_SETTINGS } from '../lib/db';
import { t } from '../lib/i18n';

interface AppState {
  settings: AppSettings;
  session: SessionSnapshot;
  refreshSettings: () => Promise<void>;
  saveSettings: (s: AppSettings) => Promise<void>;
}

const AppContext = createContext<AppState | null>(null);

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [session, setSession] = useState<SessionSnapshot>({
    whatsappTabConnected: false,
    loggedIn: null,
    lastCheckedAt: null,
  });

  const refreshSettings = useCallback(async () => {
    try {
      setSettings(await request<AppSettings>({ type: 'settings/get' }));
    } catch {
      /* keep defaults */
    }
  }, []);

  const saveSettings = useCallback(async (s: AppSettings) => {
    setSettings(s);
    await request({ type: 'settings/save', settings: s });
  }, []);

  useEffect(() => {
    void refreshSettings();
    void request<SessionSnapshot>({ type: 'session/snapshot' })
      .then(setSession)
      .catch(() => undefined);
    const unsub = subscribe((evt) => {
      if (evt.type === 'event' && evt.name === 'session:updated') setSession(evt.snapshot);
    });
    return unsub;
  }, [refreshSettings]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.body?.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  return (
    <AppContext.Provider value={{ settings, session, refreshSettings, saveSettings }}>{children}</AppContext.Provider>
  );
}

export { t };
