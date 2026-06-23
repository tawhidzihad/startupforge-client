import { getUserToken } from "./session";
const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

// This function for header data
export const authHeader = async () => {
	const token = await getUserToken();
	const header = token ? { authorization: `Bearer ${token}` } : {};
	return header;
};

// Server Mutation For Create Update & Delete
export const serverMutation = async (path, method, data) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		method,
		headers: {
			"content-type": "application/json",
			...(await authHeader()),
		},
		...(data && {
			body: JSON.stringify(data),
		}),
	});

	return handleStatusCode(res);
};

// Protected Server Fetch
export const protectedServerFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		cache: "no-cache",
		headers: await authHeader(),
	});
	return handleStatusCode(res);
};

// UnProtected Server Data Fetch
export const serverFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`, { cache: "no-cache" });
	return handleStatusCode(res);
};

const handleStatusCode = async (res) => {
	if (res.status === 401) {
		redirect("/signin");
	}

	if (res.status === 403) {
		redirect("/unauthorized");
	}

	if (res.status === 404) {
		redirect("/not-found");
	}

	if (res.status === 423) {
		redirect("/account-blocked");
	}

	if (res.status >= 500) {
		redirect("/server-error");
	}

	return res.json();
};
