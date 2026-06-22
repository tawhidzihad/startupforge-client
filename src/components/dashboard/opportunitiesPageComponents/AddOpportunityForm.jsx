"use client";

import { addOpportunity } from "@/lib/actions/opportunities";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const workTypes = ["Remote", "Hybrid", "On-site"];
const commitmentLevels = ["Part Time", "Full Time", "Flexible"];

export default function AddOpportunityForm({ user, startupData }) {
	const rounter = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			roleTitle: "",
			requiredSkills: "",
			workType: "",
			commitmentLevel: "",
			deadline: "",
		},
	});

	const onSubmit = async (formData) => {
		const payload = {
			...formData,
			requiredSkills: formData.requiredSkills
				.split(",")
				.map((skill) => skill.trim())
				.filter(Boolean),
			founderId: user?.id,
			startupId: startupData?._id,
			startupName: startupData?.startupName,
			industry: startupData?.industry,
		};

		const data = await addOpportunity(payload);

		if (data.insertedId) {
			toast.success("Opportunity added successfully!");
			rounter.push("/dashboard/founder/opportunities");
		}
	};

	return (
		<div className="mx-auto max-w-7xl">
			<div className="rounded-3xl border border-zinc-200 bg-background p-7 shadow-sm dark:border-zinc-800">
				<div className="mb-8">
					<h1 className="text-3xl font-bold">Add Opportunity</h1>
					<p className="mt-2 text-zinc-500">
						Create a new opportunity and find talented collaborators for
						your startup.
					</p>
				</div>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					{/* Role Title */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Role Title
						</label>

						<input
							type="text"
							placeholder="Frontend Developer"
							{...register("roleTitle", {
								required: "Role title is required",
							})}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						{errors.roleTitle && (
							<p className="mt-1 text-sm text-red-500">
								{errors.roleTitle.message}
							</p>
						)}
					</div>

					{/* Required Skills */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Required Skills
						</label>

						<input
							type="text"
							placeholder="React, Next.js, Tailwind CSS"
							{...register("requiredSkills", {
								required: "Required skills are required",
							})}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						<p className="mt-1 text-xs text-zinc-500">
							Separate skills with commas.
						</p>

						{errors.requiredSkills && (
							<p className="mt-1 text-sm text-red-500">
								{errors.requiredSkills.message}
							</p>
						)}
					</div>

					{/* Work Type + Commitment */}
					<div className="grid gap-6 md:grid-cols-2">
						{/* Work Type */}
						<div>
							<label className="mb-2 block text-sm font-medium">
								Work Type
							</label>

							<select
								{...register("workType", {
									required: "Work type is required",
								})}
								className="h-12 w-full rounded-xl bg-white px-4 outline-none focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
							>
								<option value="">Select Work Type</option>

								{workTypes.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>
							{errors.workType && (
								<p className="mt-1 text-sm text-red-500">
									{errors.workType.message}
								</p>
							)}
						</div>

						{/* Commitment Level */}
						<div>
							<label className="mb-2 block text-sm font-medium">
								Commitment Level
							</label>
							<select
								{...register("commitmentLevel", {
									required: "Commitment level is required",
								})}
								className="h-12 w-full rounded-xl bg-white px-4 outline-none focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
							>
								<option value="">Select Commitment</option>

								{commitmentLevels.map((item) => (
									<option key={item} value={item}>
										{item}
									</option>
								))}
							</select>
							{errors.commitmentLevel && (
								<p className="mt-1 text-sm text-red-500">
									{errors.commitmentLevel.message}
								</p>
							)}
						</div>
					</div>

					{/* Deadline */}
					<div>
						<label className="mb-2 block text-sm font-medium">
							Application Deadline
						</label>

						<input
							type="date"
							{...register("deadline", {
								required: "Deadline is required",
							})}
							className="h-12 w-full rounded-xl bg-white px-4 outline-none transition-all focus:ring-4 focus:ring-violet-500 dark:bg-zinc-900"
						/>

						{errors.deadline && (
							<p className="mt-1 text-sm text-red-500">
								{errors.deadline.message}
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

					<button
						type="submit"
						disabled={isSubmitting}
						className="cursor-pointer h-12 w-full rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-medium text-white transition-all hover:shadow-lg"
					>
						{isSubmitting ? "Saving..." : "Publish Opportunity"}
					</button>
				</form>
			</div>
		</div>
	);
}
