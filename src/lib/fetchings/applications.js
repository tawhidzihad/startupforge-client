"use server";

import { protectedServerFetch } from "../core/server";

// Get Application by opportunityId, applicantId, founderId
export const getApplications = async ({
	opportunityId,
	applicantId,
	founderId,
} = {}) => {
	const params = new URLSearchParams();

	if (founderId) {
		params.append("founderId", founderId);
	}
	if (opportunityId) {
		params.append("opportunityId", opportunityId);
	}

	if (applicantId) {
		params.append("applicantId", applicantId);
	}

	return protectedServerFetch(`/api/applications?${params.toString()}`);
};
