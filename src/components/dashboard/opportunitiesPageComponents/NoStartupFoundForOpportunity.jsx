"use client";

import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export default function NoStartupFoundForOpportunity() {
	return (
		<div className=" grid min-h-[calc(100vh-180px)] place-items-center rounded-3xl border border-dashed border-zinc-300 bg-background p-6 dark:border-zinc-700">
			<div className="max-w-2xl text-center">
				{/* Icon */}
				<div className=" mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
					<Building2 size={48} />
				</div>

				{/* Heading */}
				<h1 className="text-4xl font-bold">Create a Startup First</h1>

				<p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-500">
					You need to create a startup profile before posting
					opportunities. Once your startup is set up, you&apos;ll be able
					to attract collaborators and build your team.
				</p>

				{/* Action Button */}
				<Link
					href="/dashboard/founder/startup"
					className=" mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
				>
					Create Startup
					<ArrowRight size={18} />
				</Link>

				{/* Note */}
				<p className="mt-6 text-sm text-zinc-500">
					A startup profile is required before publishing opportunities.
				</p>
			</div>
		</div>
	);
}
