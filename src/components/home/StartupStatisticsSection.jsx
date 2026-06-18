"use client";

import { BriefcaseBusiness, FileText, Handshake, Users } from "lucide-react";
import { motion } from "motion/react";

import { fadeInUp, staggerContainer } from "@/lib/motion";

const stats = [
	{
		icon: BriefcaseBusiness,
		value: "500+",
		label: "Startup Ideas",
	},
	{
		icon: Users,
		value: "2,000+",
		label: "Collaborators",
	},
	{
		icon: FileText,
		value: "1,500+",
		label: "Applications",
	},
	{
		icon: Handshake,
		value: "300+",
		label: "Successful Matches",
	},
];

export default function StartupStatisticsSection() {
	return (
		<section className="py-20 lg:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mx-auto mb-14 max-w-3xl text-center"
				>
					<div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
						📊 Startup Statistics
					</div>

					<h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
						Platform Growth &
						<span className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
							{" "}
							Community Impact
						</span>
					</h2>

					<p className="mt-5 text-base text-zinc-600 md:text-lg dark:text-zinc-400">
						Join a growing ecosystem of founders, builders, and
						collaborators turning ideas into reality.
					</p>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Left Side Chart */}
					<motion.div
						{...fadeInUp}
						className=" rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
					>
						<h3 className="mb-8 text-lg font-semibold">
							Community Growth
						</h3>

						<div className="flex h-70 items-end justify-between gap-3">
							{[
								{ month: "Jan", height: "20%" },
								{ month: "Feb", height: "35%" },
								{ month: "Mar", height: "50%" },
								{ month: "Apr", height: "65%" },
								{ month: "May", height: "82%" },
								{ month: "Jun", height: "100%" },
							].map((item) => (
								<motion.div
									key={item.month}
									initial={{
										height: 0,
									}}
									whileInView={{
										height: item.height,
									}}
									viewport={{
										once: true,
									}}
									transition={{
										duration: 0.8,
									}}
									className=" flex-1 rounded-t-xl bg-linear-to-t from-indigo-500 via-violet-500 to-fuchsia-500"
								/>
							))}
						</div>

						<div className="mt-4 flex justify-between text-sm text-zinc-500">
							<span>Jan</span>
							<span>Feb</span>
							<span>Mar</span>
							<span>Apr</span>
							<span>May</span>
							<span>Jun</span>
						</div>
					</motion.div>

					{/* Right Side Stats */}
					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{ once: true }}
						className="grid gap-4 sm:grid-cols-2"
					>
						{stats.map((stat) => {
							const Icon = stat.icon;

							return (
								<motion.div
									key={stat.label}
									variants={fadeInUp}
									whileHover={{
										y: -4,
									}}
									className=" rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
								>
									<div className=" mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-500 to-violet-500 text-white">
										<Icon size={22} />
									</div>

									<h3 className=" text-3xl font-bold bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
										{stat.value}
									</h3>

									<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
										{stat.label}
									</p>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
