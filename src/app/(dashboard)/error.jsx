"use client";

import { AlertTriangle, RefreshCw, RotateCcw } from "lucide-react";

export default function DashboardError({ error, reset }) {
	return (
		<div className="flex min-h-screen items-center justify-center px-4">
			<div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800">
				{/* Badge */}
				<div className="mb-4 flex justify-center">
					<span className="rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-500">
						Dashboard Error
					</span>
				</div>

				{/* Icon */}
				<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10 text-red-500">
					<AlertTriangle size={40} />
				</div>

				<h1 className="text-3xl font-bold">Failed to Load Dashboard</h1>

				<p className="mt-3 text-zinc-500">
					We couldn&apos;t load the requested dashboard data. Please try again.
				</p>

				{/* Error Message */}
				{error?.message && (
					<div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-left">
						<p className="mb-2 text-sm font-medium text-red-500">
							Error Details
						</p>

						<code className="break-all text-sm text-zinc-600 dark:text-zinc-400">
							{error.message}
						</code>
					</div>
				)}

				{/* Actions */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<button
						onClick={reset}
						className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-5 py-3 font-medium text-white"
					>
						<RotateCcw size={18} />
						Try Again
					</button>

					<button
						onClick={() => window.location.reload()}
						className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-zinc-200 px-5 py-3 font-medium dark:border-zinc-700"
					>
						<RefreshCw size={18} />
						Refresh Page
					</button>
				</div>
			</div>
		</div>
	);
}
