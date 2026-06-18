"use client";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import StartupCard from "../startupCard/StartupCard";

const startups = [
	{
		id: "1",
		name: "StartupForge",
		logo: "/startup-1.png",
		founderName: "Tawhid Zihad",
		industry: "SaaS",
		teamSizeNeeded: 5,
	},
	{
		id: "2",
		name: "HireLoop",
		logo: "/startup-2.png",
		founderName: "John Doe",
		industry: "HR Tech",
		teamSizeNeeded: 3,
	},
	{
		id: "3",
		name: "EcoTrack",
		logo: "/startup-3.png",
		founderName: "Sarah Smith",
		industry: "Green Tech",
		teamSizeNeeded: 4,
	},
];

export default function FeaturedStartupsSection() {
	return (
		<section className="py-20 lg:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
				>
					<div className="max-w-2xl">
						<div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
							🚀 Featured Startups
						</div>

						<h2 className=" text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
							Discover Innovative
							<span className=" bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
								{" "}
								Startups
							</span>
						</h2>

						<p className=" mt-4 text-base text-zinc-600 md:text-lg dark:text-zinc-400">
							Explore promising startup ideas, connect with founders, and
							join teams building the next big thing.
						</p>
					</div>

					{/* View All Button */}
					<motion.div
						whileHover={{ x: 4 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
						}}
					>
						<Link
							href="/startups"
							className=" inline-flex items-center gap-2 font-medium text-violet-500"
						>
							View All Startups
							<ArrowRight size={18} />
						</Link>
					</motion.div>
				</motion.div>

				{/* Cards */}
				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="whileInView"
					viewport={{
						once: true,
						amount: 0.2,
					}}
					className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
				>
					{startups.map((startup) => (
						<motion.div key={startup.id} variants={fadeInUp}>
							<StartupCard startup={startup} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
