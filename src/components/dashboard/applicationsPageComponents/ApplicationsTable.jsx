"use client";

import { updateApplicationStatus } from "@/lib/actions/applications";
import { Chip, Table } from "@heroui/react";
import { Check, X } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ApplicationCard from "./ApplicationCard";
import EmptyApplicationsState from "./EmptyApplicationsState";

export default function ApplicationsTable({ applications }) {
	const router = useRouter();

	const handleApprove = async (id) => {
		const updatedStatus = {
			status: "accepted",
		};
		const data = await updateApplicationStatus(id, updatedStatus);
		if (data.modifiedCount) {
			router.refresh();
			toast.success("Application accepted successfully!");
		}
	};

	const handleReject = async (id) => {
		const updatedStatus = {
			status: "rejected",
		};
		const data = await updateApplicationStatus(id, updatedStatus);
		if (data.modifiedCount) {
			router.refresh();
			toast.success("The application has been rejected.");
		}
	};

	// If there is no applications
	if (!applications?.length) {
		return <EmptyApplicationsState />;
	}

	// if have applications
	return (
		<>
			{/* Desktop */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content aria-label="Founder Applications Table">
							<Table.Header>
								<Table.Column isRowHeader>Applied For</Table.Column>
								<Table.Column>Applicant Name</Table.Column>
								<Table.Column>Applicant Email</Table.Column>
								<Table.Column>Applied Date</Table.Column>
								<Table.Column>Status</Table.Column>
								<Table.Column>Actions</Table.Column>
							</Table.Header>

							<Table.Body>
								{applications.map((application) => (
									<Table.Row key={application._id}>
										{/*Applied For This Opportunity Role */}
										<Table.Cell>
											<span className="inline-flex rounded bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
												{application.opportunityRoleTitle}
											</span>
										</Table.Cell>

										{/* Appicant Name */}
										<Table.Cell>
											{application.applicantName}
										</Table.Cell>

										{/* Appicant Email */}
										<Table.Cell>
											{application.applicantEmail}
										</Table.Cell>

										{/* Application Date */}
										<Table.Cell>
											{new Date(
												application.createdAt,
											).toLocaleString("en-US", {
												month: "long",
												day: "numeric",
												year: "numeric",
												hour: "numeric",
												minute: "2-digit",
												hour12: true,
											})}
										</Table.Cell>

										{/* Status */}
										<Table.Cell>
											<Chip
												className="capitalize"
												color={
													application.status === "accepted"
														? "success"
														: application.status === "rejected"
															? "danger"
															: "warning"
												}
											>
												{application.status}
											</Chip>
										</Table.Cell>

										{/* Actions Buttons */}
										<Table.Cell>
											{application.status === "pending" && (
												<div className="flex gap-2">
													<button
														onClick={() =>
															handleApprove(application._id)
														}
														className="cursor-pointer rounded bg-green-500 px-3 py-2 text-white"
													>
														<Check size={16} />
													</button>

													<button
														onClick={() =>
															handleReject(application._id)
														}
														className="cursor-pointer rounded bg-red-500 px-3 py-2 text-white"
													>
														<X size={16} />
													</button>
												</div>
											)}
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</div>

			{/* Mobile */}
			<div className="grid gap-4 lg:hidden">
				{applications.map((application) => (
					<ApplicationCard
						key={application._id}
						application={application}
					/>
				))}
			</div>
		</>
	);
}
