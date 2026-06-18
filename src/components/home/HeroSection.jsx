"use client";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden">
			{/* Background Glow */}
			<div className="absolute inset-0 -z-10">
				<div className=" absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[120px]" />
			</div>

			<div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-0">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					{/* Left Content */}
					<motion.div
						variants={staggerContainer}
						initial="initial"
						whileInView="whileInView"
						viewport={{
							once: true,
						}}
						className="space-y-6"
					>
						<motion.div variants={fadeInUp}>
							<span className=" inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
								<Rocket size={16} />
								Build Your Dream Startup
							</span>
						</motion.div>

						<motion.h1
							variants={fadeInUp}
							className=" text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
						>
							Find the Right Team
							<span className=" bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
								{" "}
								To Build
							</span>
							<br />
							Your Startup
						</motion.h1>

						<motion.p
							variants={fadeInUp}
							className=" max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
						>
							Connect with talented developers, designers, marketers and
							collaborators. Turn startup ideas into successful teams and
							products.
						</motion.p>

						<motion.div
							variants={fadeInUp}
							className="flex flex-wrap gap-4"
						>
							<Link
								href="/startups"
								className=" inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white shadow-lg"
							>
								Explore Startups
								<ArrowRight size={18} />
							</Link>

							<Link
								href="/opportunities"
								className=" inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 px-6 font-medium dark:border-zinc-800"
							>
								Browse Opportunities
							</Link>
						</motion.div>
					</motion.div>

					{/* Right Side */}
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.95,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
						}}
						viewport={{
							once: true,
						}}
						transition={{
							duration: 0.7,
						}}
						className="relative"
					>
						<div className=" rounded-3xl border border-zinc-200 bg-white/50 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/50">
							<div className="space-y-4">
								<div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
									🚀 Startup Founder
								</div>

								<div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
									💻 Frontend Developer
								</div>

								<div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
									🎨 UI/UX Designer
								</div>

								<div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
									📈 Digital Marketer
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
