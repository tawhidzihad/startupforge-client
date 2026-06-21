"use server";

import { serverFetch } from "../core/server";

// Get Opportunity by Search, filter, pagination query , for Browse Opportunity route
export const getAllOpportunities = async ({
	search,
	workType,
	industry,
	page,
}) => {
	return serverFetch(
		`/api/public/opportunities?search=${search || ""}&workType=${workType || ""}&industry=${industry || ""}&page=${page || 1}`,
	);
};

// Get Opportuinity by FounderId - Showing in founder Dashboard
export const getAllMyOpportunities = async (id) => {
	return serverFetch(`/api/opportunities?founderId=${id}`);
};

// Get all Opportunity by StartupId - showing in Startup details page
export const getAllMyOpportunitiesByStartupId = async (id) => {
	return serverFetch(`/api/public/opportunities/${id}`);
};

// Get Single Opportunity by opportunity _id for oppotunity details page
export const getThisOpportunity = async (id) => {
	return serverFetch(`/api/public/opportunity/${id}`);
};
