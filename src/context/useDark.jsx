import { create } from "zustand";

export const useDark = create((set) => ({
  isDark: false,
  toggleDark: () => set((state) => ({ isDark: !state.isDark })),
}));
