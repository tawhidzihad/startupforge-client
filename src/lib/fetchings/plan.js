"use server";

import { serverFetch } from "../core/server";

export const getPlan = async (planId) => {
	return serverFetch(`/api/plans?planId=${planId}`);
};
