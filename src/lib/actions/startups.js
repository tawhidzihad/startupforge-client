"use server";

import { serverMutation } from "../core/server";

// Create New Startup
export const createStartup = async (startupData) => {
	return serverMutation("/api/startups", "POST", startupData);
};

// Update Startup
export const updateStartup = async (id, newStartupData) => {
	return serverMutation(`/api/startups/${id}`, "PATCH", newStartupData);
};

// Delete Startup
export const deleteStartup = async (id) => {
	return serverMutation(`/api/startups/${id}`, "DELETE");
};
