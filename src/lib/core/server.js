const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

// Server Mutation For Create Update & Delete
export const serverMutation = async (path, method, data) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		method: method,
		headers: {
			"content-type": "application/json",
		},
		body: data && JSON.stringify(data),
	});

	return res.json();
};

// UnProtected Server Data Fetch
export const serverFetch = async (path) => {
	const res = await fetch(`${baseApiUrl}${path}`);
	return res.json();
};
