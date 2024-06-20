import { create } from "zustand";

// Define the Menu interface
interface Menu {
  name: string;
  setName: (name: string) => void;
}

// Create the menu slice
const createMenuSlice = (set: any): Menu => ({
  name: "Dashboard",
  setName: (name: string) => set({ name }),
});

// Create the store with just the menu slice
const useStore = create<Menu>((set) => ({
  ...createMenuSlice(set),
}));

export default useStore;
export type { Menu };
