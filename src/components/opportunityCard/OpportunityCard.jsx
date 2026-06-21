"use client";

import { motion } from "motion/react";
import Link from "next/link";

import {
	ArrowUpRight,
	BriefcaseBusiness,
	Building2,
	CalendarDays,
} from "lucide-react";

export default function OpportunityCard({ opportunity }) {
	const { _id, roleTitle, startupName, requiredSkills, deadline, industry } =
		opportunity;

	return (
		<motion.article
			whileHover={{ y: -6 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
			className=" group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
		>
			{/* Gradient Glow */}
			<div className=" absolute inset-0 opacity-0 bg-linear-to-br from-indigo-500/5 via-violet-500/5 to-fuchsia-500/5 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="relative">
				{/* Role */}
				<h3 className="mb-3 text-xl font-semibold">{roleTitle}</h3>

				{/* Startup + Industry */}
				<div className="mb-5 flex flex-wrap items-center gap-2">
					<div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-sm dark:bg-zinc-800">
						<BriefcaseBusiness size={14} />
						{startupName}
					</div>

					<div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-500">
						<Building2 size={14} />
						{industry}
					</div>
				</div>

				{/* Skills */}
				<div className="mb-6 flex flex-wrap gap-2">
					{requiredSkills.slice(0, 3).map((skill, i) => (
						<span
							key={i}
							className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500"
						>
							{skill}
						</span>
					))}

					{requiredSkills.length > 3 && (
						<span className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
							+{requiredSkills.length - 3}
						</span>
					)}
				</div>

				{/* Deadline */}
				<div className=" mb-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
					<CalendarDays size={16} />
					<span>Deadline: {deadline}</span>
				</div>

				{/* CTA */}
				<Link
					href={`/opportunities/${_id}`}
					className=" group/link inline-flex items-center gap-2 font-medium text-violet-500"
				>
					View Opportunity
					<ArrowUpRight
						size={16}
						className=" transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
					/>
				</Link>
			</div>
		</motion.article>
	);
}
