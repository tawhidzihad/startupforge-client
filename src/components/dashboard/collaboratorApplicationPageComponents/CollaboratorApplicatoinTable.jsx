"use client";

import { Chip, Table } from "@heroui/react";

import CollaboratorApplicationCard from "./CollaboratorApplicationCard";
import CollaboratorApplicationEmptyState from "./CollaboratorApplicationEmptyState";

export default function CollaboratorApplicationTable({ applications = [] }) {
	// Empty State
	if (!applications?.length) {
		return <CollaboratorApplicationEmptyState />;
	}

	return (
		<>
			{/* Desktop Table */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content aria-label="Collaborator Applications Table">
							<Table.Header>
								<Table.Column isRowHeader>
									Opportunity Name
								</Table.Column>

								<Table.Column>Startup Name</Table.Column>

								<Table.Column>Applied Date</Table.Column>

								<Table.Column>Status</Table.Column>
							</Table.Header>

							<Table.Body>
								{applications.map((application) => (
									<Table.Row key={application._id}>
										{/* Opportunity */}
										<Table.Cell>
											<span className="inline-flex rounded-lg bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
												{application.opportunityRoleTitle}
											</span>
										</Table.Cell>

										{/* Startup */}
										<Table.Cell>{application.startupName}</Table.Cell>

										{/* Applied Date */}
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
									</Table.Row>
								))}
							</Table.Body>
						</Table.Content>
					</Table.ScrollContainer>
				</Table>
			</div>

			{/* Mobile Cards */}
			<div className="grid gap-4 lg:hidden">
				{applications.map((application) => (
					<CollaboratorApplicationCard
						key={application._id}
						application={application}
					/>
				))}
			</div>
		</>
	);
}
