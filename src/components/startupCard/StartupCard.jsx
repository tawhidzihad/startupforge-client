"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { ArrowUpRight, Building2, UserRound, Users } from "lucide-react";

export default function StartupCard({ startup }) {
	const { id, name, logo, founderName, industry, teamSizeNeeded } = startup;

	return (
		<motion.article
			whileHover={{ y: -6 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
			className=" group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
		>
			{/* Top */}
			<div className="p-6">
				<div className="mb-5 flex items-center gap-4">
					<div className=" relative h-14 w-14 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
						<Image src={logo} alt={name} fill className="object-cover" />
					</div>

					<div>
						<h3 className="line-clamp-1 text-lg font-semibold">{name}</h3>

						<p className="text-sm text-zinc-500">Startup</p>
					</div>
				</div>

				<div className="space-y-3">
					<div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
						<UserRound size={16} />
						<span>{founderName}</span>
					</div>

					<div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
						<Building2 size={16} />
						<span>{industry}</span>
					</div>

					<div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
						<Users size={16} />
						<span>{teamSizeNeeded} Team Members Needed</span>
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className=" border-t border-zinc-200 p-4 dark:border-zinc-600">
				<Link
					href={`/startups/${id}`}
					className=" group/link inline-flex items-center gap-2 text-sm font-medium text-violet-500"
				>
					View Details
					<ArrowUpRight
						size={16}
						className=" transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
					/>
				</Link>
			</div>
		</motion.article>
	);
}
