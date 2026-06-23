"use client";

import Link from "next/link";

import { CheckCircle2, Receipt, Rocket } from "lucide-react";
import { motion } from "motion/react";

export default function SuccessContent({
	user,
	customerEmail,
	amount,
	paymentStatus,
	transactionId,
	upgradedPlan,
}) {
	return (
		<section className="flex min-h-[80vh] items-center justify-center px-4 py-10 lg:px-0">
			<motion.div
				initial={{
					opacity: 0,
					y: 30,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800"
			>
				{/* Success Icon */}
				<motion.div
					initial={{
						scale: 0,
					}}
					animate={{
						scale: 1,
					}}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 12,
					}}
					className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-green-500/10"
				>
					<CheckCircle2 size={70} className="text-green-500" />
				</motion.div>

				<h1 className="text-4xl font-bold">Payment Successful 🎉</h1>

				<p className="mt-4 text-lg text-zinc-500">
					Thank you for upgrading your StartupForge account.
				</p>

				{/* Premium Activated */}
				<div className="mt-4 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6">
					<div className="flex items-center justify-center gap-2">
						<Rocket className="text-violet-500" />

						<h3 className="text-xl font-semibold">Premium Activated</h3>
					</div>

					<p className="mt-3 text-zinc-500">
						Your premium features are now active and ready to use.
					</p>
				</div>

				{/* Transaction Details */}
				<div className="mt-6 rounded-3xl border border-zinc-200 p-6 text-left dark:border-zinc-800">
					<div className="mb-4 flex items-center gap-2">
						<Receipt size={20} className="text-violet-500" />

						<h3 className="font-semibold">Transaction Details</h3>
					</div>

					<div className="space-y-3 text-sm">
						<div className="flex justify-between">
							<span className="text-zinc-500">Amount</span>

							<span className="font-medium">${amount}</span>
						</div>

						<div className="flex justify-between">
							<span className="text-zinc-500">Status</span>

							<span className="font-medium capitalize text-green-500">
								{paymentStatus}
							</span>
						</div>

						<div className="flex justify-between">
							<span className="text-zinc-500">Plan</span>

							<span className="font-medium capitalize">
								{upgradedPlan?.replace("_", " ")}
							</span>
						</div>

						<div className="flex justify-between gap-4">
							<span className="text-zinc-500">Transaction ID</span>

							<span className="max-w-55 truncate font-medium">
								{transactionId}
							</span>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<Link
						href={`/dashboard/${user?.role}`}
						className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						Go to Dashboard
					</Link>

					<Link
						href="/"
						className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 px-6 font-medium dark:border-zinc-700"
					>
						Back to Home
					</Link>
				</div>
			</motion.div>
		</section>
	);
}
