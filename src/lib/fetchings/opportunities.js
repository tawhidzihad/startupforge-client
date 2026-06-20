"use server";

import { serverFetch } from "../core/server";

export const getAllMyOpportunities = async (id) => {
	return serverFetch(`/api/opportunities?founderId=${id}`);
};
