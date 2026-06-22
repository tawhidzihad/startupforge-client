import Link from "next/link";

import { Mail, ShieldX } from "lucide-react";

export default function AccountBlockedPage() {
	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-20">
			<div className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-background p-8 text-center shadow-sm dark:border-zinc-800 md:p-12">
				{/* Icon */}
				<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-red-500/10 text-red-500">
					<ShieldX size={50} />
				</div>

				{/* Title */}
				<h1 className="text-4xl font-bold">Account Restricted</h1>

				<p className="mx-auto mt-4 max-w-xl text-zinc-500">
					Your account has been temporarily restricted by the StartupForge
					administration team. You currently do not have access to platform
					features.
				</p>

				{/* Restrictions */}
				<div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left dark:border-zinc-800 dark:bg-zinc-900">
					<h3 className="mb-4 font-semibold">
						While your account is restricted, you cannot:
					</h3>

					<ul className="space-y-3 text-sm text-zinc-500">
						<li>• Access dashboard features</li>

						<li>• Apply to opportunities</li>

						<li>• Create startups or opportunities</li>

						<li>• Update platform content</li>
					</ul>
				</div>

				{/* Contact */}
				<div className="mt-8 rounded-2xl bg-violet-500/5 p-5">
					<div className="flex flex-col items-center gap-3 text-center">
						<Mail className="text-violet-500" size={22} />

						<div>
							<p className="font-medium">Need Help?</p>

							<p className="mt-1 text-sm text-zinc-500">
								If you believe this restriction was applied by mistake,
								please contact our support team.
							</p>
						</div>
					</div>
				</div>

				{/* Actions */}
				<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
					<Link
						href="/"
						className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-200 px-6 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
					>
						Back to Home
					</Link>

					<a
						href="mailto:support@startupforge.com"
						className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						Contact Support
					</a>
				</div>
			</div>
		</div>
	);
}
