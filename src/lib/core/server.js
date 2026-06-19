const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const serverMutation = async (path, method, data) => {
	const res = await fetch(`${baseApiUrl}${path}`, {
		method: method,
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(data),
	});

	return res.json();
};
