"use server";

import { serverFetch } from "../core/server";

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

	return serverFetch(`/api/applications?${params.toString()}`);
};
