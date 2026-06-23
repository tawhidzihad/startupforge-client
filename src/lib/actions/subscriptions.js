"use server";

import { serverMutation } from "../core/server";

// Create Subscription after a successful payment
export const setSubscriptions = async (data) => {
	return serverMutation("/api/success/subscriptions", "POST", data);
};
