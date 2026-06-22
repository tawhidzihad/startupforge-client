"use client";

import { submitApplication } from "@/lib/actions/applications";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function ApplyOpportunityForm({ user, opportunity }) {
	const [isApplied, setIsApplied] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			opportunityRoleTitle: opportunity?.roleTitle,
			applicantEmail: user?.email,
			applicantName: user?.name,
			applicantId: user?.id,
			startupName: opportunity?.startupName,
			founderId: opportunity?.founderId,
			startupId: opportunity?.startupId,
			portfolioLink: "",
			motivationMessage: "",
		},
	});

	const onSubmit = async (formData) => {
		const payload = {
			...formData,
			status: "pending",
		};

		const data = await submitApplication(payload);

		if (data.insertedId) {
			setIsApplied(true);
			toast.success("Application submitted successfully!");
			router.refresh();
		}
	};

	if (isApplied) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4 }}
				className="flex min-h-125 flex-col items-center justify-center rounded-3xl bg-background p-8 text-center"
			>
				<div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/10">
					<div className="text-5xl text-green-500">✓</div>
				</div>

				<h2 className="text-4xl font-bold">Application Submitted!</h2>

				<p className="mt-4 max-w-lg text-zinc-500">
					Your application has been successfully sent to the founder. You
					can track the status from your applications dashboard.
				</p>

				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<button
						onClick={() =>
							router.push("/dashboard/collaborator/applications")
						}
						className="rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3 font-medium text-white"
					>
						View My Applications
					</button>

					<button
						onClick={() => router.push("/opportunities")}
						className="rounded-xl border px-6 py-3 font-medium"
					>
						Browse More Opportunities
					</button>
				</div>
			</motion.div>
		);
	}

	return (
		<div className="rounded-3xl bg-background p-8 shadow-sm dark:border-zinc-800">
			{/* Header */}
			<div className="mb-8 text-center">
				<h2 className="text-4xl font-bold">Apply to Opportunity</h2>

				<p className="mt-3 text-zinc-500">
					Share your portfolio and explain why you&apos;re the right fit
					for this opportunity.
				</p>
			</div>

			{/* Applicant Info */}
			<div className="mb-8 grid gap-4 md:grid-cols-3">
				<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
					<p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
						Startup Name
					</p>

					<p className="mt-2 truncate font-medium">
						{opportunity?.startupName}
					</p>
				</div>

				<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
					<p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
						Your Email
					</p>

					<p className="mt-2 truncate font-medium">{user?.email}</p>
				</div>

				<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
					<p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
						Your Name
					</p>

					<p className="mt-2 truncate font-medium">{user?.name}</p>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				{/* Hidden Fields */}
				<input type="hidden" {...register("applicantEmail")} />
				<input type="hidden" {...register("applicantName")} />
				<input type="hidden" {...register("startupName")} />
				<input type="hidden" {...register("applicantId")} />

				{/* Portfolio Link */}
				<div className="text-left">
					<label className="mb-2 block text-sm font-medium">
						Portfolio Link
					</label>

					<input
						type="url"
						placeholder="https://your-portfolio.com"
						{...register("portfolioLink", {
							required: "Portfolio link is required",
						})}
						className="bg-white dark:bg-zinc-900 h-12 w-full rounded-xl px-4 pr-12 outline-none transition-all focus:ring-4 focus:ring-violet-500"
					/>

					{errors.portfolioLink && (
						<p className="mt-2 text-sm text-red-500">
							{errors.portfolioLink.message}
						</p>
					)}
				</div>

				{/* Motivation Message */}
				<div className="text-left">
					<label className="mb-2 block text-sm font-medium">
						Motivation Message
					</label>

					<textarea
						rows={7}
						placeholder="Tell the founder why you're interested in this opportunity and why you'd be a great fit..."
						{...register("motivationMessage", {
							required: "Motivation message is required",
							minLength: {
								value: 50,
								message: "Message should be at least 50 characters",
							},
						})}
						className="bg-white dark:bg-zinc-900 w-full rounded-xl p-4 outline-none transition-all focus:ring-4 focus:ring-violet-500"
					/>

					{errors.motivationMessage && (
						<p className="mt-2 text-sm text-red-500">
							{errors.motivationMessage.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					disabled={isSubmitting}
					className="h-13 w-full cursor-pointer rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-semibold text-white transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
				>
					{isSubmitting
						? "Submitting Application..."
						: "Submit Application"}
				</button>
			</form>
		</div>
	);
}
