"use client";

import { Check, X } from "lucide-react";

import { Chip, Table } from "@heroui/react";

import ApplicationCard from "./ApplicationCard";
import EmptyApplicationsState from "./EmptyApplicationsState";

export default function ApplicationsTable({
	applications,
	onAccept,
	onReject,
}) {
	if (!applications?.length) {
		return <EmptyApplicationsState />;
	}

	return (
		<>
			{/* Desktop */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content>
							<Table.Header>
								<Table.Column isRowHeader>Applicant</Table.Column>

								<Table.Column>Email</Table.Column>

								<Table.Column>Applied Date</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column>Actions</Table.Column>
							</Table.Header>

							<Table.Body>
								{applications.map((application) => (
									<Table.Row key={application._id}>
										<Table.Cell>
											{application.applicantName}
										</Table.Cell>

										<Table.Cell>
											{application.applicantEmail}
										</Table.Cell>

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

										<Table.Cell>
											{application.status === "pending" && (
												<div className="flex gap-2">
													<button
														onClick={() => onAccept(application)}
														className="rounded-lg bg-green-500 px-3 py-2 text-white"
													>
														<Check size={16} />
													</button>

													<button
														onClick={() => onReject(application)}
														className="rounded-lg bg-red-500 px-3 py-2 text-white"
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
						onAccept={onAccept}
						onReject={onReject}
					/>
				))}
			</div>
		</>
	);
}
