"use server";

import { protectedServerFetch } from "../core/server";

// Get all users for admin dashboard
export const getAllUsers = async () => {
	return protectedServerFetch("/api/admin/users");
};
