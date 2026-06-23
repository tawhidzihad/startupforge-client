"use client";

import { Chip, Table } from "@heroui/react";
import EmptyTransactionState from "./EmptyTransactionState";
import TransactionCard from "./TransactionCard";

export default function TransactionsTable({ transactions }) {
	if (!transactions?.length) {
		return <EmptyTransactionState />;
	}

	return (
		<>
			{/* Desktop */}
			<div className="hidden lg:block">
				<Table>
					<Table.ScrollContainer>
						<Table.Content aria-label="Transactions Table">
							<Table.Header>
								<Table.Column isRowHeader>User</Table.Column>

								<Table.Column>Amount</Table.Column>

								<Table.Column>Transaction Hash</Table.Column>

								<Table.Column>Date</Table.Column>

								<Table.Column>Payment Status</Table.Column>
							</Table.Header>

							<Table.Body>
								{transactions.map((transaction) => (
									<Table.Row key={transaction._id}>
										{/* User */}
										<Table.Cell>
											<div>
												<p className="font-medium">
													{transaction.customerEmail}
												</p>

												<p className="text-xs text-zinc-500 capitalize">
													{transaction.userRole}
												</p>
											</div>
										</Table.Cell>

										{/* Amount */}
										<Table.Cell>
											<span className="font-semibold text-green-500">
												${transaction.amount}
											</span>
										</Table.Cell>

										{/* Transaction */}
										<Table.Cell>
											<div className="max-w-45">
												<p
													className="truncate font-mono text-xs text-zinc-500"
													title={transaction.transactionId}
												>
													{transaction.transactionId}
												</p>
											</div>
										</Table.Cell>

										{/* Date */}
										<Table.Cell>
											{new Date(
												transaction.createdAt,
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
												color={
													transaction.paymentStatus === "paid"
														? "success"
														: "danger"
												}
												className="capitalize"
											>
												{transaction.paymentStatus}
											</Chip>
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
				{transactions.map((transaction) => (
					<TransactionCard
						key={transaction._id}
						transaction={transaction}
					/>
				))}
			</div>
		</>
	);
}
