"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { fadeInUp, staggerContainer } from "@/lib/motion";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Startup Founder",
		image: "https://i.pravatar.cc/150?img=32",
		message:
			"StartupForge helped me connect with talented developers and launch my MVP much faster than expected.",
	},
	{
		name: "Michael Chen",
		role: "Frontend Developer",
		image: "https://i.pravatar.cc/150?img=12",
		message:
			"I found an exciting startup opportunity and joined an amazing team that aligns with my goals.",
	},
	{
		name: "Emily Rodriguez",
		role: "UI/UX Designer",
		image: "https://i.pravatar.cc/150?img=47",
		message:
			"The platform makes collaboration easy and helps professionals discover meaningful startup projects.",
	},
];

export default function TestimonialsSection() {
	return (
		<section className="pb-20 lg:pb-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
				{/* Header */}
				<motion.div
					{...fadeInUp}
					className="mx-auto mb-12 max-w-3xl text-center"
				>
					<div className=" mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-500">
						💬 Testimonials
					</div>

					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						What Our Community
						<span className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
							{" "}
							Says
						</span>
					</h2>

					<p className="mt-4 text-zinc-600 dark:text-zinc-400">
						Hear from founders and collaborators who have used
						StartupForge to build meaningful connections and
						opportunities.
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<motion.div
					variants={staggerContainer}
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true }}
					className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
				>
					{testimonials.map((testimonial) => (
						<motion.div
							key={testimonial.name}
							variants={fadeInUp}
							whileHover={{ y: -5 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
							}}
							className=" relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
						>
							<div className=" absolute right-6 top-6 text-violet-500/20">
								<Quote size={40} />
							</div>

							<p className="mb-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
								&quot;{testimonial.message}&quot;
							</p>

							<div className="flex items-center gap-4">
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={48}
									height={48}
									className="rounded-full"
								/>

								<div>
									<h4 className="font-semibold">{testimonial.name}</h4>

									<p className="text-sm text-zinc-500">
										{testimonial.role}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
