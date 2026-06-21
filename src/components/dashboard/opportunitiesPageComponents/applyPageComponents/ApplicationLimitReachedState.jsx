import { Crown, Lock, Zap } from "lucide-react";
import Link from "next/link";

export default function ApplicationLimitReachedState({
	currentApplications = 3,
	limit = 3,
}) {
	return (
		<div className="mx-auto max-w-7xl py-12">
			<div className="flex flex-col items-center justify-center rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800">
				{/* Icon */}
				<div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-500">
					<Lock size={48} />
				</div>

				{/* Content */}
				<h1 className="text-4xl font-bold">Application Limit Reached</h1>

				<p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-500">
					You&apos;`ve used all {limit} applications available in your current
					plan. Upgrade your account to continue applying for more
					opportunities.
				</p>

				{/* Usage */}
				<div className="mt-8 w-full max-w-xl rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
					<div className="mb-3 flex items-center justify-between">
						<span className="font-medium">Applications Used</span>

						<span className="font-bold text-violet-500">
							{currentApplications}/{limit}
						</span>
					</div>

					<div className="h-3 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
						<div
							className="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500"
							style={{ width: "100%" }}
						/>
					</div>
				</div>

				{/* Premium Box */}
				<div className="mt-8 w-full max-w-xl rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6">
					<div className="flex items-center justify-center gap-2">
						<Crown size={22} className="text-yellow-500" />
						<h3 className="text-xl font-semibold">Upgrade to Premium</h3>
					</div>

					<p className="mt-3 text-zinc-500">
						Get up to 100 applications and unlock premium features.
					</p>

					<Link
						href="/pricing"
						className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						<Zap size={18} />
						Upgrade Now
					</Link>
				</div>
			</div>
		</div>
	);
}
