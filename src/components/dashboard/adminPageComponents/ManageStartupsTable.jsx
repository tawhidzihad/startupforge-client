"use client";

import { Button, Chip, Table } from "@heroui/react";
import { Check, X } from "lucide-react";

import { deleteStartup, updateStartup } from "@/lib/actions/startups";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import DeleteStartupDialog from "./DeleteStartupDialog";
import EmptyStartupsState from "./EmptyStartupsState";
import StartupCard from "./StartupCard";

export default function ManageStartupsTable({ startups }) {
	const router = useRouter();

	// Handle Approve Startups
	const handleApprove = async (startup) => {
		const updatedStatus = {
			status: "approved",
		};
		const data = await updateStartup(startup?._id, updatedStatus);
		if (data.matchedCount) {
			router.refresh();
			toast.success("Startup approved successfully!");
		}
	};

	// Handle Reject Startups
	const handleReject = async (startup) => {
		const updatedStatus = {
			status: "rejected",
		};
		const data = await updateStartup(startup?._id, updatedStatus);
		if (data.matchedCount) {
			router.refresh();
			toast.success("Startup rejected successfully.");
		}
	};

	// Handle Delete Startups
	const handleDelete = async (startup) => {
		const data = await deleteStartup(startup?._id);
		if (data.deletedCount) {
			router.refresh();
			toast.success("Startup deleted successfully!");
		}
	};

	if (!startups?.length) {
		return <EmptyStartupsState />;
	}

	return (
		<>
			{/* Desktop */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content aria-label="Manage Startups Table">
							<Table.Header>
								<Table.Column isRowHeader>Startup Name</Table.Column>

								<Table.Column>Industry</Table.Column>

								<Table.Column>Founder Name</Table.Column>

								<Table.Column>Founder Email</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column>Actions</Table.Column>
							</Table.Header>

							<Table.Body>
								{startups.map((startup) => (
									<Table.Row key={startup._id}>
										{/* Startup Name*/}
										<Table.Cell>
											<p className="font-medium">
												{startup?.startupName}
											</p>
										</Table.Cell>

										{/* Industry */}
										<Table.Cell>
											<Chip size="sm" variant="flat">
												{startup.industry}
											</Chip>
										</Table.Cell>

										{/* Founder */}
										<Table.Cell>{startup.founderName}</Table.Cell>

										{/* Email */}
										<Table.Cell>{startup.founderEmail}</Table.Cell>

										{/* Status */}
										<Table.Cell>
											<Chip
												size="sm"
												color={
													startup.status === "approved"
														? "success"
														: startup.status === "rejected"
															? "danger"
															: "warning"
												}
												className="capitalize"
											>
												{startup.status}
											</Chip>
										</Table.Cell>

										{/* Actions */}
										<Table.Cell>
											<div className="flex gap-2">
												{startup.status === "pending" && (
													<>
														<Button
															onClick={() =>
																handleApprove(startup)
															}
															className="rounded bg-green-500 text-white"
														>
															<Check size={16} />
														</Button>

														<Button
															onClick={() =>
																handleReject(startup)
															}
															className="rounded bg-yellow-500 text-white"
														>
															<X size={16} />
														</Button>
													</>
												)}

												<DeleteStartupDialog
													startupName={startup.startupName}
													onDelete={() => handleDelete(startup)}
												/>
											</div>
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
				{startups.map((startup) => (
					<StartupCard
						key={startup._id}
						startup={startup}
						handleApprove={handleApprove}
						handleReject={handleReject}
						handleDelete={handleDelete}
					/>
				))}
			</div>
		</>
	);
}
