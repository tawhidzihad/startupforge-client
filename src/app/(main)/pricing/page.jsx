import { getUserSession } from "@/lib/core/session";
import { CheckCircle2, Crown } from "lucide-react";

export default async function PricingPage() {
	const user = await getUserSession();

	const collaboratorFeatures = [
		"Apply to 100 opportunities",
		"Unlimited profile updates",
		"Priority application visibility",
		"Premium collaborator badge",
		"Early access to new opportunities",
		"Everything in Free Plan",
	];

	const founderFeatures = [
		"Post up to 100 opportunities",
		"Premium founder badge",
		"Priority startup visibility",
		"Featured opportunities",
		"Advanced startup management",
		"Everything in Free Plan",
	];

	const features =
		user?.role === "founder" ? founderFeatures : collaboratorFeatures;

	return (
		<section className="py-16">
			<div className="mx-auto max-w-7xl px-4">
				{/* Header */}
				<div className="mb-12 text-center">
					<h1 className="text-4xl font-bold">Pricing</h1>

					<p className="mt-3 text-zinc-500">
						Choose the right plan for your StartupForge journey.
					</p>
				</div>

				{/* Pricing Card */}
				<div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-violet-500/20 bg-background shadow-sm">
					{/* Top Banner */}
					<div className="bg-linear-to-r from-indigo-500 to-violet-500 p-8 text-center text-white">
						<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
							<Crown size={16} />
							{user?.role === "founder"
								? "Founder Premium"
								: "Collaborator Premium"}
						</div>

						<h2 className="mt-6 text-6xl font-bold">$99.99</h2>

						<p className="mt-2 text-white/80">One-Time Payment</p>
					</div>

					{/* Features */}
					<div className="p-8">
						<h3 className="mb-6 text-xl font-semibold">
							What&apos;s Included
						</h3>

						<div className="space-y-4">
							{features.map((feature) => (
								<div key={feature} className="flex items-center gap-3">
									<CheckCircle2
										size={20}
										className="shrink-0 text-green-500"
									/>

									<span>{feature}</span>
								</div>
							))}
						</div>

						{/* CTA */}
						<form
							action="/api/checkout_sessions"
							method="POST"
							className="mt-8"
						>
							<button
								type="submit"
								className="h-13 w-full cursor-pointer rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-semibold text-white transition-all hover:shadow-lg"
							>
								Upgrade to Premium
							</button>
						</form>

						<p className="mt-4 text-center text-sm text-zinc-500">
							Secure one-time payment. No recurring subscription.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
