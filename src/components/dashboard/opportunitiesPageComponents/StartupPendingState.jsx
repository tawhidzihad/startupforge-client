"use client";

import { Building2, Clock3 } from "lucide-react";
import Link from "next/link";

export default function StartupPendingState() {
	return (
		<div className=" grid min-h-[calc(100vh-180px)] place-items-center rounded-3xl border border-dashed border-amber-500/30 bg-background p-6">
			<div className="mx-auto max-w-2xl text-center">
				{/* Icon */}
				<div className=" mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-500">
					<Clock3 size={48} />
				</div>

				{/* Heading */}
				<h1 className="text-4xl font-bold">Startup Under Review</h1>

				<p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-500">
					Your startup has been submitted successfully and is currently
					being reviewed by our admin team. Once approved, you&apos;ll be
					able to create opportunities and start building your team.
				</p>

				{/* Info Box */}
				<div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 text-left">
					<div className="flex items-start gap-3">
						<Building2
							size={20}
							className="mt-0.5 shrink-0 text-amber-500"
						/>

						<div>
							<h3 className="font-semibold">What happens next?</h3>

							<ul className="mt-2 space-y-2 text-sm text-zinc-500">
								<li>• Admin will review your startup details</li>

								<li>• You can still edit your startup profile</li>

								<li>• Opportunities can be posted after approval</li>

								<li>
									• You&apos;ll see the approved status in your
									dashboard
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Action */}
				<div className="mt-8">
					<Link
						href="/dashboard/founder/startup"
						className=" inline-flex h-12 items-center rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-6 font-medium text-white transition-all hover:shadow-lg"
					>
						View Startup Profile
					</Link>
				</div>

				<p className="mt-4 text-sm text-zinc-500">
					Approval usually takes a short time depending on review volume.
				</p>
			</div>
		</div>
	);
}
