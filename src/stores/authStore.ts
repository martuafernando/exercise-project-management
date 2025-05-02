import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type User from "../domains/User";

type AuthStore = {
	user: User | null;
	token: string | null;
	setUser: (user: User) => void;
	setToken: (token: string) => void;
	logout: () => void;
};

const useAuthStore = create<AuthStore>()(
	persist((set) => ({
		token: null,
		user: null,

		setToken: (token: string) => {
			set({ token });
		},

		setUser: (user: User) => {
			set({ user });
		},

		logout: () => {
			set({ token: null });
		},
	}), {
		name: 'auth-store',
		storage: createJSONStorage(() => sessionStorage)
	}),
);

export default useAuthStore;
