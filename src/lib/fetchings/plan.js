"use server";

import { protectedServerFetch } from "../core/server";

export const getPlan = async (planId) => {
	return protectedServerFetch(`/api/plans?planId=${planId}`);
};
