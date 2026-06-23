"use client";

export default function TransactionCard({ transaction }) {
	return (
		<div className="rounded-3xl border border-zinc-200 bg-background p-5 shadow-sm dark:border-zinc-800">
			<div className="flex items-start justify-between">
				<div>
					<h3 className="font-semibold">{transaction.customerEmail}</h3>

					<p className="text-sm capitalize text-zinc-500">
						{transaction.userRole}
					</p>
				</div>

				<span className="rounded-full capitalize bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
					{transaction.paymentStatus}
				</span>
			</div>

			<div className="mt-4 space-y-2 text-sm">
				<p>
					<span className="text-zinc-500">Amount:</span>{" "}
					<span className="font-medium text-green-500">
						${transaction.amount}
					</span>
				</p>

				<p>
					<span className="text-zinc-500">Plan:</span>{" "}
					<span className="capitalize">
						{transaction.upgradedPlan?.replace("_", " ")}
					</span>
				</p>

				<p>
					<span className="text-zinc-500">Transaction:</span>{" "}
					<span
						className="font-mono text-xs break-all"
						title={transaction.transactionId}
					>
						{transaction.transactionId}
					</span>
				</p>

				<p>
					<span className="text-zinc-500">Date:</span>{" "}
					{new Date(transaction.createdAt).toLocaleString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "2-digit",
						hour12: true,
					})}
				</p>
			</div>
		</div>
	);
}
