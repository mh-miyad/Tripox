import { create } from "zustand";

// Define the Menu interface
interface Menu {
  name: string;
  setName: (name: string) => void;
}
interface CollapseMenu {
  open: boolean;
  collapseMenu: () => void;
}
type Combined = Menu & CollapseMenu;

// Create the menu slice
const createMenuSlice = (set: any): Menu => ({
  name: "Dashboard",
  setName: (name: string) => set({ name }),
});
const createCollapseSlice = (set: any): CollapseMenu => ({
  open: true,
  collapseMenu: () => set({ open: !set().open }),
});

// Create the store with just the menu slice
const useStore = create<Combined>((set) => ({
  ...createMenuSlice(set),
  ...createCollapseSlice(set),
}));

export default useStore;
export type { CollapseMenu, Menu };
