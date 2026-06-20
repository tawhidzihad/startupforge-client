"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { uploadImageToImgbb } from "@/lib/actions/imageUploader";
import { createStartup, updateStartup } from "@/lib/actions/startups";
import toast from "react-hot-toast";

const industries = [
	"SaaS",
	"FinTech",
	"EdTech",
	"HealthTech",
	"AI",
	"E-commerce",
	"Marketing",
	"HR Tech",
	"Cybersecurity",
	"Other",
];

const fundingStages = [
	"Idea Stage",
	"Pre-Seed",
	"Seed",
	"Series A",
	"Series B",
	"Series C+",
	"Bootstrapped",
];

export default function MyStartupForm({ user, startupData, onSuccess }) {
	const [logoUrl, setLogoUrl] = useState(startupData?.logo || null);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			name: startupData?.name || "",
			industry: startupData?.industry || "",
			description: startupData?.description || "",
			fundingStage: startupData?.fundingStage || "",
		},
	});

	const handleLogoChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const url = await uploadImageToImgbb(file);
		setLogoUrl(url);
	};

	const onSubmit = async (formData) => {
		const payload = {
			...formData,
			logo: logoUrl,
			founderEmail: user?.email,
			status: "pending",
		};

		if (!startupData) {
			const data = await createStartup(payload);
			if (data.insertedId) {
				toast.success("Startup created successfully!");
				onSuccess?.();
			}
		}

		if (startupData) {
			const data = await updateStartup(startupData?._id, payload);
			if (data.modifiedCount) {
				toast.success("Startup updated successfully!");
				onSuccess?.();
			}
		}
	};

	return (
		<div className="mx-auto max-w-7xl lg:pt-5">
			<div className="rounded-3xl border border-zinc-200 bg-background p-7 shadow-sm dark:border-zinc-800">
				<div className="mb-8">
					<h1 className="text-3xl font-bold">
						{startupData ? "Edit Startup" : "Create Startup"}
					</h1>

					<p className="mt-2 text-zinc-500">
						Build and manage your startup profile.
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					{/* Startup name */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Startup Name
						</label>

						<input
							type="text"
							placeholder="StartupForge"
							{...register("name", {
								required: "Startup name is required",
							})}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						{errors.name && (
							<p className="mt-1 text-sm text-red-500">
								{errors.name.message}
							</p>
						)}
					</div>

					{/* Startup logo */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Startup Logo{" "}
							<span className="text-zinc-500">(Optional)</span>
						</label>

						<div className="flex gap-4 flex-row items-center">
							<div className="h-20 w-20 overflow-hidden rounded-2xl border border-dashed">
								{logoUrl ? (
									<Image
										src={logoUrl}
										alt="Logo"
										width={80}
										height={80}
										className="h-full w-full object-cover"
									/>
								) : (
									<div className="flex h-full items-center justify-center text-xs text-zinc-400">
										Logo
									</div>
								)}
							</div>

							<div className="flex-1">
								<label
									htmlFor="startup-logo"
									className="flex h-12 cursor-pointer items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium transition-all hover:border-violet-500 hover:text-violet-500 dark:border-zinc-700 dark:bg-zinc-900"
								>
									Choose Startup Logo
								</label>

								<input
									id="startup-logo"
									type="file"
									accept="image/*"
									onChange={handleLogoChange}
									className="hidden"
								/>
							</div>
						</div>
					</div>

					{/* Dropdown Menu*/}
					<div className="grid gap-6 md:grid-cols-2">
						{/* Industry */}
						<div>
							<label className="mb-2 block text-sm font-medium">
								Industry
							</label>

							<select
								{...register("industry", {
									required: "Industry is required",
								})}
								className="h-12 w-full rounded-xl bg-white px-4 outline-none focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
							>
								<option value="">Select Industry</option>

								{industries.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>

							{errors.industry && (
								<p className="mt-1 text-sm text-red-500">
									{errors.industry.message}
								</p>
							)}
						</div>

						{/* Funding Stage */}
						<div>
							<label className="mb-2 block text-sm font-medium">
								Funding Stage
							</label>

							<select
								{...register("fundingStage", {
									required: "Funding stage is required",
								})}
								className="h-12 w-full rounded-xl bg-white px-4 outline-none focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
							>
								<option value="">Select Stage</option>

								{fundingStages.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>

							{errors.fundingStage && (
								<p className="mt-1 text-sm text-red-500">
									{errors.fundingStage.message}
								</p>
							)}
						</div>
					</div>

					{/* Description */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Description
						</label>

						<textarea
							rows={5}
							placeholder="Describe your startup..."
							{...register("description", {
								required: "Description is required",
							})}
							className="w-full rounded-xl bg-white p-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						{errors.description && (
							<p className="mt-1 text-sm text-red-500">
								{errors.description.message}
							</p>
						)}
					</div>

					{/* Founder Email */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Founder Email
						</label>

						<input
							type="email"
							value={user?.email || ""}
							readOnly
							className="h-12 w-full cursor-not-allowed rounded-xl bg-zinc-100 px-4 dark:bg-zinc-800"
						/>
					</div>

					{/* Create and Update Button */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="cursor-pointer h-12 w-full rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
					>
						{isSubmitting
							? "Saving..."
							: startupData
								? "Update Startup"
								: "Create Startup"}
					</button>
				</form>
			</div>
		</div>
	);
}
