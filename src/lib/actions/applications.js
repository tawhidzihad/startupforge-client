"use server";

import { serverMutation } from "../core/server";

// Create New Application - For All Expect whose create the opportuinity
export const submitApplication = async (applicationData) => {
	return serverMutation("/api/applications", "POST", applicationData);
};
