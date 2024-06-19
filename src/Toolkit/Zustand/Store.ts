import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createUserSlice, UserState } from "./state/userSlice";

const useStore = create<UserState>()(
  devtools((set, get, api) => ({
    ...createUserSlice(set, get, api),
  }))
);

export default useStore;
