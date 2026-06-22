"use server";

import { serverMutation } from "../core/server";

// This mutation function for user block or unblock
export const blockedOrUnblocked = async (id, data) => {
	return serverMutation(`/api/admin/users/${id}`, "PATCH", data);
};
