import { StateCreator } from "zustand";

interface User {
  name: string;
  type: string;
  usermail: string;
  username: string;
  userId: string;
  product: string;
  buyProduct: string;
  sellProduct: string;
}

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  updateUser: (user: User) => void;
}

const createUserSlice: StateCreator<UserState, [], [], UserState> = (
  set,
  get,
  api
) => ({
  users: [],
  addUser: (user: User) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  removeUser: (userId: string) =>
    set((state) => ({
      users: state.users.filter((user) => user.userId !== userId),
    })),
  updateUser: (updatedUser: User) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.userId === updatedUser.userId ? updatedUser : user
      ),
    })),
});

export { createUserSlice };
export type { User, UserState };
