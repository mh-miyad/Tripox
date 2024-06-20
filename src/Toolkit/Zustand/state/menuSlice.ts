import { StateCreator } from "zustand";

interface Menu {
  name: string;
  setName: (name: string) => void;
}

const createMenuSlice: StateCreator<Menu> = (set, get, api) => ({
  name: "",
  setName: (name: string) => set({ name }),
});

export { createMenuSlice };
export type { Menu };
