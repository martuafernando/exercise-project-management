import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStore = {
	token: string | null;
	setToken: (token: string) => void;
	logout: () => void;
};

const useAuthStore = create<AuthStore>()(
	persist((set) => ({
		token: null,

		setToken: (token: string) => {
			set({ token });
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
