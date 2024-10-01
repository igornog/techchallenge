import { create } from 'zustand';

// Create the store
export const useUserStore = create((set) => ({
  admin: false, // initial state
  setAdmin: (value) => set({ admin: value }), // action
}));

export const UserStoreProvider = ({ children }) => {
  return <>{children}</>;
};
