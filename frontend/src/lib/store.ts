import { create } from 'zustand';

interface AppState {
    isConnected: boolean;
    setConnected: (connected: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isConnected: false,
    setConnected: (connected: boolean) => set({ isConnected: connected }),
}));
