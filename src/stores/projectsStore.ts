import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type User from "../domains/User";
import api from "../utils/api";
import { Project } from "../domains/Project";

type ProjectsStore = {
	projects: Project[] | null;
	projectDetail: Project|null;
	loading: boolean;
	fetchProjects: () => Promise<void>;
	fetchProjectDetail: (id: string) => Promise<void>;
};

const useProjectsStore = create<ProjectsStore>()(
	persist(
		(set) => ({
			projects: null,
			projectDetail: null,
			loading: false,

			fetchProjects: async () => {
				try {
					set({ loading: true });
					const response = await api.get("/api/projects");
					set({ projects: response.data.data });
				} catch (error) {
					console.error("Failed to fetch projects", error);
				} finally {
					set({ loading: false });
				}
			},

			fetchProjectDetail: async (id: string) => {
				try {
					set({ loading: true });
					const response = await api.get(`/api/projects/${id}`);
					set({ projectDetail: response.data.data });
				} catch (error) {
					console.error("Failed to fetch projects", error);
				} finally {
					set({ loading: false });
				}
			},
		}),
		{
			name: "projects-store",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default useProjectsStore;
