"use client";

import { blockedOrUnblocked } from "@/lib/actions/users";
import { Avatar, Chip, Table } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import EmptyUsersState from "./EmptyUsersState";
import UserCard from "./UserCard";

export default function ManageUsersTable({ users }) {
	const router = useRouter();

	const handleBlockToggle = async (user) => {
		const action = user.isBlocked ? false : true;

		const blockStatus = {
			isBlocked: action,
		};

		const data = await blockedOrUnblocked(user?._id, blockStatus);

		if (data.matchedCount) {
			router.refresh();
			toast.success(
				`User has been ${action === true ? "blocked" : "unblocked"} successfully!`,
			);
		}
	};

	if (!users?.length) {
		return <EmptyUsersState />;
	}

	return (
		<>
			{/* Desktop */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content aria-label="Manage Users Table">
							<Table.Header>
								<Table.Column isRowHeader>User</Table.Column>

								<Table.Column>Role</Table.Column>

								<Table.Column>Plan</Table.Column>

								<Table.Column>Joined</Table.Column>

								<Table.Column>Status</Table.Column>

								<Table.Column>Actions</Table.Column>
							</Table.Header>

							<Table.Body>
								{users.map((user) => (
									<Table.Row key={user._id}>
										{/* User */}
										<Table.Cell>
											<div className="flex items-center gap-3">
												<Avatar>
													<Avatar.Image
														alt={user?.name}
														src={user?.image}
														referrerPolicy="no-referrer"
													/>
													<Avatar.Fallback>
														{user.name?.charAt(0).toUpperCase()}
													</Avatar.Fallback>
												</Avatar>

												<div>
													<p className="font-medium">
														{user.name}
													</p>

													<p className="text-xs text-zinc-500">
														{user.email}
													</p>
												</div>
											</div>
										</Table.Cell>

										{/* Role */}
										<Table.Cell>
											<Chip
												size="sm"
												variant="flat"
												className="capitalize"
											>
												{user.role}
											</Chip>
										</Table.Cell>

										{/* Plan */}
										<Table.Cell>
											<Chip
												size="sm"
												color={
													user.plan.includes("premium")
														? "warning"
														: "default"
												}
											>
												{user.plan.includes("premium")
													? "Premium"
													: "Free"}
											</Chip>
										</Table.Cell>

										{/* Joined */}
										<Table.Cell>
											{new Date(user.createdAt).toLocaleString(
												"en-US",
												{
													month: "long",
													day: "numeric",
													year: "numeric",
													hour: "numeric",
													minute: "2-digit",
													hour12: true,
												},
											)}
										</Table.Cell>

										{/* Status */}
										<Table.Cell>
											<Chip
												size="sm"
												color={
													user.isBlocked ? "danger" : "success"
												}
											>
												{user.isBlocked ? "Blocked" : "Active"}
											</Chip>
										</Table.Cell>

										{/* Action */}
										<Table.Cell>
											<button
												disabled={user?.role === "admin"}
												onClick={() => handleBlockToggle(user)}
												className={`rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity ${
													user?.role === "admin"
														? "cursor-not-allowed bg-zinc-400 opacity-60"
														: user.isBlocked
															? "cursor-pointer bg-green-500"
															: "cursor-pointer bg-red-500"
												}`}
											>
												{user?.role === "admin"
													? "Protected"
													: user.isBlocked
														? "Unblock"
														: "Block"}
											</button>
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
				{users.map((user) => (
					<UserCard
						key={user._id}
						user={user}
						handleBlockToggle={handleBlockToggle}
					/>
				))}
			</div>
		</>
	);
}
