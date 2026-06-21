"use client";

import { uploadImageToImgbb } from "@/lib/actions/imageUploader";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ProfileEditForm({ user, onSuccess, onCancel }) {
	const [imageUrl, setImageUrl] = useState(user?.image || null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			name: user?.name || "",
			bio: user?.bio || "",
			skills: user?.skills || "",
			portfolio: user?.portfolio || "",
		},
	});

	// Image Uploder
	const handleImageChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const url = await uploadImageToImgbb(file);
		if (url) {
			setImageUrl(url);
		}
	};

	// Save Changes Handler
	const onSubmit = async (formData) => {
		const payload = {
			...formData,
			image: imageUrl,
		};

		const { data, error } = await authClient.updateUser({
			...payload,
		});

		if (error) {
			toast.error(error.message);
		}

		if (data.status) {
			toast.success("Profile updated successfully!");
			onSuccess?.();
		}
	};

	return (
		<div className="mx-auto max-w-7xl">
			<div className="rounded-3xl border border-zinc-200 bg-background p-7 shadow-sm dark:border-zinc-800">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold">Edit Profile</h1>

					<p className="mt-2 text-zinc-500">
						Update your profile information.
					</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					{/* Profile Image */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Profile Image
						</label>

						<div className="flex flex-col items-center gap-4 md:flex-row">
							<div className="relative h-24 w-24 overflow-hidden rounded-full border border-dashed">
								{imageUrl ? (
									<Image
										src={imageUrl}
										alt="Profile"
										width={1000}
										height={1000}
										loading="eager"
										className="w-full h-full object-cover"
									/>
								) : (
									<div className="flex h-full items-center justify-center text-xs text-zinc-400">
										Image
									</div>
								)}
							</div>

							<div className="flex-1">
								<label
									htmlFor="profile-image"
									className="flex h-12 cursor-pointer items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
								>
									Choose Profile Image
								</label>

								<input
									id="profile-image"
									type="file"
									accept="image/*"
									onChange={handleImageChange}
									className="hidden"
								/>
							</div>
						</div>
					</div>

					{/* Name */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Full Name
						</label>

						<input
							type="text"
							placeholder="Enter your name"
							{...register("name", {
								required: "Name is required",
							})}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						{errors.name && (
							<p className="mt-1 text-sm text-red-500">
								{errors.name.message}
							</p>
						)}
					</div>

					{/* Bio */}
					<div>
						<label className="mb-2 block text-sm font-medium">Bio</label>

						<textarea
							rows={5}
							placeholder="Tell us about yourself..."
							{...register("bio")}
							className="w-full rounded-xl bg-white p-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>
					</div>

					{/* Skills */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Skills
						</label>

						<input
							type="text"
							placeholder="React, Next.js, MongoDB"
							{...register("skills")}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						<p className="mt-1 text-xs text-zinc-500">
							Separate skills using commas.
						</p>
					</div>

					{/* Portfolio */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Portfolio URL
						</label>

						<input
							type="url"
							placeholder="https://yourportfolio.com"
							{...register("portfolio")}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>
					</div>

					{/* Buttons */}
					<div className="flex flex-col gap-3 pt-4 sm:flex-row">
						<button
							type="button"
							onClick={onCancel}
							className="h-12 flex-1 cursor-pointer rounded-xl border border-zinc-300 font-medium transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
						>
							Cancel
						</button>

						<button
							type="submit"
							disabled={isSubmitting}
							className="h-12 flex-1 cursor-pointer rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
						>
							{isSubmitting ? "Saving..." : "Save Changes"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
