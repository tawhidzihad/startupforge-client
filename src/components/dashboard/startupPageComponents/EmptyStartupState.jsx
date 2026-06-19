import { Plus, Rocket } from "lucide-react";
import { motion } from "motion/react";

export default function EmptyStartupState({ onCreate }) {
	return (
		<div className=" grid min-h-[calc(100vh-180px)] place-items-center rounded-3xl border border-dashed border-zinc-300 bg-background p-6 dark:border-zinc-700">
			<div className="mx-auto max-w-2xl text-center">
				{/* Icon */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					className=" mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500"
				>
					<Rocket size={48} />
				</motion.div>

				{/* Heading */}
				<h1 className="text-4xl font-bold tracking-tight">
					Create Your Startup
				</h1>

				<p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-500">
					You haven&apos;t created a startup profile yet. Add your startup
					information, showcase your vision, and start attracting talented
					collaborators to build your dream team.
				</p>

				{/* Button */}
				<button
					onClick={onCreate}
					className=" mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
				>
					<Plus size={18} />
					Create Startup
				</button>

				{/* Features */}
				<div className="mt-12 flex flex-wrap items-center justify-center gap-3">
					<span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-800">
						Add Startup Details
					</span>

					<span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-800">
						Post Opportunities
					</span>

					<span className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-800">
						Build Your Team
					</span>
				</div>
			</div>
		</div>
	);
}
