import { create } from "zustand";
import type User from "../domains/User";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
	user: User | null;
	token: string | null;
	setToken: (token: string) => void;
	setUser: (user: User) => void;
	logout: () => void;
};

const useAuthStore = create<AuthStore>()(
	persist((set) => ({
		user: null,
		token: null,

		setToken: (token: string) => {
			set({ token });
		},

		setUser: (user: User) => set({ user }),

		logout: () => {
			set({ user: null, token: null });
		},
	}), {
		name: 'auth-store',
		storage: createJSONStorage(() => sessionStorage)
	}),
);

export default useAuthStore;
