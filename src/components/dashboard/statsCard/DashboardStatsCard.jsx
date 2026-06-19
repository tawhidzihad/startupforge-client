"use client";

import { icons } from "@/UI/icons";
import { motion } from "motion/react";

export default function DashboardStatsCard({ title, value, icon, change }) {
	const Icon = icons[icon];

	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
			className=" rounded-3xl border border-zinc-200 bg-background p-6 shadow-sm dark:border-zinc-800"
		>
			<div className="flex items-start justify-between">
				<div>
					<p className="text-sm text-zinc-500">{title}</p>

					<h3 className="mt-2 text-3xl font-bold">{value}</h3>
				</div>

				<div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
					{Icon && <Icon size={22} />}
				</div>
			</div>

			{change && (
				<p className="mt-4 text-sm font-medium text-green-500">{change}</p>
			)}
		</motion.div>
	);
}
