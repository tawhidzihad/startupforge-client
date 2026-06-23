"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";

// This function give current user session (data)
export const getUserSession = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	return session?.user || null;
};

// This function give current user session token
export const getUserToken = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return session?.session?.token || null;
};

// This function match the role and authorized access
export const requireRole = async (role) => {
	const user = await getUserSession();
	if (!user) {
		redirect("/auth/signin");
	}
	// Blocked User
	if (user?.isBlocked) {
		redirect("/account-blocked");
	}

	if (user?.role !== role) {
		redirect("/unauthorized");
	}

	return user;
};
