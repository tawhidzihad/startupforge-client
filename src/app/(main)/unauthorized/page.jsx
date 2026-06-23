import Link from "next/link";

import { getUserSession } from "@/lib/core/session";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default async function UnauthorizedPage() {
	const user = await getUserSession();

	console.log(user);

	return (
		<section className="flex min-h-[80vh] items-center justify-center px-4 py-12">
			<div className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800">
				{/* Status Badge */}
				<div className="mb-5 flex justify-center">
					<span className="inline-flex rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-500">
						403 Forbidden
					</span>
				</div>

				{/* Icon */}
				<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500/10 text-red-500">
					<ShieldAlert size={50} />
				</div>

				{/* Heading */}
				<h1 className="text-4xl font-bold lg:text-5xl">Access Denied</h1>

				<p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
					You do not have permission to access this page. This area is
					restricted based on your account role and authorization level.
				</p>

				{/* Info Card */}
				<div className="mt-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
					<h3 className="font-semibold">Why am I seeing this?</h3>

					<p className="mt-2 text-sm leading-7 text-zinc-500">
						You attempted to access a protected page that is only
						available to specific user roles. If you believe this is a
						mistake, please contact the platform administrator.
					</p>
				</div>

				{/* Actions */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<Link
						href="/"
						className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 px-6 font-medium transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
					>
						<ArrowLeft size={18} className="mr-2" />
						Back to Home
					</Link>

					<Link
						href={`/dashboard/${user?.role}`}
						className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						Go to Dashboard
					</Link>
				</div>
			</div>
		</section>
	);
}
