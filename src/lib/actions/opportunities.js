"use server";

import { serverMutation } from "../core/server";

// Create new opportunities
export const addOpportunity = async (opportunityData) => {
	return serverMutation("/api/opportunities", "POST", opportunityData);
};

// Update opportunity
export const updateOpportunity = async (id, updatedOpportunityData) => {
	return serverMutation(
		`/api/opportunities/${id}`,
		"PATCH",
		updatedOpportunityData,
	);
};

// Delete Opportunity
export const deleteOpportunity = async (id) => {
	return serverMutation(`/api/opportunities/${id}`, "DELETE");
};
