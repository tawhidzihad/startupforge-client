"use server";

import { serverMutation } from "../core/server";

export const createStartup = async (startupData) => {
	return serverMutation("/api/startups", "POST", startupData);
};
