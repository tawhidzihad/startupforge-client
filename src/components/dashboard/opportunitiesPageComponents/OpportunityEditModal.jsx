"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { updateOpportunity } from "@/lib/actions/opportunities";
import { Button, Modal, Surface } from "@heroui/react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const workTypes = ["Remote", "Hybrid", "On-site"];
const commitmentLevels = ["Part Time", "Full Time", "Flexible"];

export default function OpportunityEditModal({ opportunity }) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	useEffect(() => {
		if (opportunity) {
			reset({
				roleTitle: opportunity.roleTitle || "",
				requiredSkills: opportunity.requiredSkills?.join(", ") || "",
				workType: opportunity.workType || "",
				commitmentLevel: opportunity.commitmentLevel || "",
				deadline: opportunity.deadline || "",
			});
		}
	}, [opportunity, reset]);

	const onSubmit = async (formData) => {
		const payload = {
			...formData,
			requiredSkills: formData.requiredSkills
				.split(",")
				.map((skill) => skill.trim())
				.filter(Boolean),
		};

		const data = await updateOpportunity(opportunity?._id, payload);
		if (data.modifiedCount) {
			toast.success("Opportunity updated successfully!");
			router.refresh();
		}
	};

	return (
		<Modal>
			<Button className="rounded-xl bg-violet-500/10 p-3 text-violet-500">
				<Pencil size={20} />
			</Button>
			<Modal.Backdrop>
				<Modal.Container placement="auto">
					<Modal.Dialog className="sm:max-w-2xl">
						<Modal.CloseTrigger />

						<Modal.Header>
							<Modal.Heading>Edit Opportunity</Modal.Heading>

							<p className="mt-1.5 text-sm text-muted-foreground">
								Update opportunity details and save your changes.
							</p>
						</Modal.Header>

						<Modal.Body className="p-6">
							<Surface variant="default">
								<form
									id="edit-opportunity-form"
									onSubmit={handleSubmit(onSubmit)}
									className="space-y-5"
								>
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
											className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:ring-4 focus:ring-violet-500"
										/>

										{errors.roleTitle && (
											<p className="mt-1 text-sm text-red-500">
												{errors.roleTitle.message}
											</p>
										)}
									</div>

									{/* Skills */}
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
											className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:ring-4 focus:ring-violet-500"
										/>

										{errors.requiredSkills && (
											<p className="mt-1 text-sm text-red-500">
												{errors.requiredSkills.message}
											</p>
										)}
									</div>

									{/* Selects */}
									<div className="grid gap-5 md:grid-cols-2">
										<div>
											<label className="mb-2 block text-sm font-medium">
												Work Type
											</label>

											<select
												{...register("workType", {
													required: "Work type is required",
												})}
												className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:ring-4 focus:ring-violet-500"
											>
												<option value="">Select Work Type</option>

												{workTypes.map((item) => (
													<option key={item} value={item}>
														{item}
													</option>
												))}
											</select>
										</div>

										<div>
											<label className="mb-2 block text-sm font-medium">
												Commitment Level
											</label>

											<select
												{...register("commitmentLevel", {
													required: "Commitment level is required",
												})}
												className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:ring-4 focus:ring-violet-500"
											>
												<option value="">Select Level</option>

												{commitmentLevels.map((item) => (
													<option key={item} value={item}>
														{item}
													</option>
												))}
											</select>
										</div>
									</div>

									{/* Deadline */}
									<div>
										<label className="mb-2 block text-sm font-medium">
											Deadline
										</label>

										<input
											type="date"
											{...register("deadline", {
												required: "Deadline is required",
											})}
											className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:ring-4 focus:ring-violet-500"
										/>

										{errors.deadline && (
											<p className="mt-1 text-sm text-red-500">
												{errors.deadline.message}
											</p>
										)}
									</div>
								</form>
							</Surface>
						</Modal.Body>

						<Modal.Footer>
							<Button slot="close" variant="outline">
								Cancel
							</Button>

							<Button
								variant="danger-soft"
								type="submit"
								form="edit-opportunity-form"
								slot="close"
							>
								{isSubmitting ? "Updating..." : "Update Opportunity"}
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
}
