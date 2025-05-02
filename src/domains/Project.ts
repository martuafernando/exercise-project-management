export interface ProjectResponse {
	data: Project[];
	meta: {
		pagination: Pagination;
	};
}

export interface Pagination {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	perPage: number;
}

export interface Project {
	id: string;
	name: string;
	startDate: string; // ISO date string
	endDate: string; // ISO date string
	description: string;
	status: "active" | "on_hold" | "completed";
	documents: Document[];
	createdAt: string;
	updatedAt: string;
	createdById: string;
	userId: string | null;
	teams: Team[];
	createdBy: User;
	isOverdue: boolean;
	overdueDays: number | null;
}

export interface Document {
	url: string;
	name: string;
}

export interface Team {
	id: string;
	name: string;
	email: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
}
