"use client";

import { motion } from "motion/react";

import { Lightbulb, Network, Rocket, Users } from "lucide-react";

import { fadeInUp, staggerContainer } from "@/lib/motion";

const features = [
	{
		icon: Rocket,
		title: "Build Faster",
		description:
			"Quickly find talented collaborators and assemble your startup team without wasting time.",
	},
	{
		icon: Users,
		title: "Connect with Experts",
		description:
			"Meet skilled developers, designers, marketers, and professionals ready to join exciting startups.",
	},
	{
		icon: Network,
		title: "Grow Your Network",
		description:
			"Expand your professional network and discover valuable opportunities within the startup ecosystem.",
	},
	{
		icon: Lightbulb,
		title: "Turn Ideas into Reality",
		description:
			"Transform innovative startup ideas into successful products with the right people by your side.",
	},
];

export default function WhyJoinSection() {
	return (
		<section className="py-20 lg:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mx-auto mb-14 max-w-3xl text-center"
				>
					<div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
						🚀 Why StartupForge
					</div>

					<h2 className=" text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
						Why Join{" "}
						<span className=" bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
							StartupForge
						</span>
						?
					</h2>

					<p className=" mt-5 text-base text-zinc-600 md:text-lg dark:text-zinc-400">
						StartupForge helps founders and collaborators connect, build
						teams, and turn startup ideas into successful products.
					</p>
				</motion.div>

				{/* Cards */}
				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true }}
					className=" grid gap-6 md:grid-cols-2 xl:grid-cols-4"
				>
					{features.map((feature) => {
						const Icon = feature.icon;

						return (
							<motion.div
								key={feature.title}
								variants={fadeInUp}
								whileHover={{ y: -6 }}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 20,
								}}
								className=" group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900"
							>
								{/* Gradient Glow */}
								<div className=" absolute inset-0 opacity-0 bg-linear-to-br from-indigo-500/5 via-violet-500/5 to-fuchsia-500/5 transition-opacity duration-300 group-hover:opacity-100" />

								<div className="relative">
									<div className=" mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-500 to-violet-500 text-white">
										<Icon size={22} />
									</div>

									<h3 className="mb-3 text-lg font-semibold">
										{feature.title}
									</h3>

									<p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
										{feature.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
