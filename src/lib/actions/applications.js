"use server";

import { serverMutation } from "../core/server";

// Create New Application - For All Expect whose create the opportuinity
export const submitApplication = async (applicationData) => {
	return serverMutation("/api/applications", "POST", applicationData);
};

// Update Applications Status Approved or Rejected by application id - Only for Founder role
export const updateApplicationStatus = async (id, updatedStatus) => {
	return serverMutation(`/api/applications/${id}`, "PATCH", updatedStatus);
};
