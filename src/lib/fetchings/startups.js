"use server";

import { protectedServerFetch, serverFetch } from "../core/server";

// Get Particular User Startup by Founder Email
export const getMyStartups = async (founderEmail) => {
	return protectedServerFetch(`/api/startups?founderEmail=${founderEmail}`);
};

// Get all Startup data for Browser Startup route
export const getAllStartups = async (searchValue = "") => {
	const url = searchValue?.trim()
		? `/api/public/startups?startupName=${searchValue}`
		: "/api/public/startups";

	return serverFetch(url);
};

// Get single Startup details data by _id
export const getThisStartup = async (id) => {
	return serverFetch(`/api/public/startups/${id}`);
};
