import { Rocket } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-6">
			<div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
				<Rocket size={50} />
			</div>

			<div className="text-center">
				<h1 className="text-3xl font-bold">
					StartupForge
				</h1>

				<p className="mt-2 text-zinc-500">
					Loading your experience...
				</p>
			</div>

			<div className="flex gap-2">
				<div className="h-3 w-3 animate-bounce rounded-full bg-violet-500" />
				<div
					className="h-3 w-3 animate-bounce rounded-full bg-violet-500"
					style={{ animationDelay: "0.15s" }}
				/>
				<div
					className="h-3 w-3 animate-bounce rounded-full bg-violet-500"
					style={{ animationDelay: "0.3s" }}
				/>
			</div>
		</div>
	);
}