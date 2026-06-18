export const uploadImageToImgbb = async (imageFile) => {
	const formData = new FormData();

	formData.append("image", imageFile);

	const response = await fetch(
		`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
		{
			method: "POST",
			body: formData,
		},
	);

	const result = await response.json();

	return result.data.url;
};
