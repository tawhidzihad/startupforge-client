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

	return res.json();
};

// Protected Server Fetch
export const protectedServerFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		cache: "no-cache",
		headers: await authHeader(),
	});
	return res.json();
};

// UnProtected Server Data Fetch
export const serverFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`, { cache: "no-cache" });
	return res.json();
};
