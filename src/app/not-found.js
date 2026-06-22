import Link from "next/link";

import { ArrowLeft, Compass, SearchX } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12">
			<div className="mx-auto max-w-2xl text-center">
				{/* Icon */}
				<div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
					<SearchX size={60} />
				</div>

				{/* 404 */}
				<p className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-8xl font-extrabold text-transparent">
					404
				</p>

				{/* Title */}
				<h1 className="mt-4 text-4xl font-bold">Page Not Found</h1>

				{/* Description */}
				<p className="mx-auto mt-4 max-w-xl text-zinc-500">
					Sorry, the page you are looking for doesn&apos;t exist or may have
					been moved. Let&apos;s get you back on track and continue exploring
					exciting startup opportunities.
				</p>

				{/* Actions */}
				<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						href="/"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						<Compass size={18} />
						Go Home
					</Link>

					<Link
						href="/opportunities"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 px-6 font-medium transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
					>
						<ArrowLeft size={18} />
						Browse Opportunities
					</Link>
				</div>

				{/* Extra Hint */}
				<div className="mt-12 rounded-2xl border border-dashed border-zinc-300 p-5 dark:border-zinc-700">
					<p className="text-sm text-zinc-500">
						If you think this is an error, please try refreshing the page
						or return to the homepage.
					</p>
				</div>
			</div>
		</div>
	);
}
