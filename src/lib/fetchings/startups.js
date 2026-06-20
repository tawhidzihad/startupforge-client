"use server";

import { serverFetch } from "../core/server";

export const getMyStartups = async (founderEmail) => {
	return serverFetch(`/api/startups?founderEmail=${founderEmail}`);
};

