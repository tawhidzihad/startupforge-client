"use client";

import Link from "next/link";

import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

export default function Error({ error, reset }) {
	return (
		<section className="flex min-h-screen items-center justify-center px-4 py-12">
			<motion.div
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800"
			>
				{/* Badge */}
				<div className="mb-5 flex justify-center">
					<span className="inline-flex rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-500">
						500 Internal Server Error
					</span>
				</div>

				{/* Icon */}
				<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500/10 text-red-500">
					<AlertTriangle size={50} />
				</div>

				{/* Content */}
				<h1 className="text-4xl font-bold lg:text-5xl">
					Something Went Wrong
				</h1>

				<p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
					An unexpected error occurred while processing your request.
					Please try again or return later.
				</p>

				{/* Error Details (Development Only) */}
				{process.env.NODE_ENV === "development" && (
					<div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-left dark:border-zinc-800 dark:bg-zinc-900">
						<p className="mb-2 font-medium text-red-500">
							Debug Information
						</p>

						<code className="break-all text-sm text-zinc-500">
							{error?.message}
						</code>
					</div>
				)}

				{/* Actions */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<button
						onClick={() => reset()}
						className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						<RotateCcw size={18} />
						Try Again
					</button>

					<Link
						href="/"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-6 font-medium transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
					>
						<Home size={18} />
						Back to Home
					</Link>
				</div>
			</motion.div>
		</section>
	);
}
