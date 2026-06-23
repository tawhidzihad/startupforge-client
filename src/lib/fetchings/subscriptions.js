"use server";

import { protectedServerFetch } from "../core/server";

// Get all subscriptions fot admi route
export const getAllSubscriptions = async () => {
	return protectedServerFetch("/api/success/subscriptions");
};
