import { Users } from "lucide-react";

export default function EmptyUsersState() {
	return (
		<div className="flex min-h-[70vh] items-center justify-center">
			<div className="w-full max-w-4xl rounded-3xl border border-dashed border-zinc-300 bg-background p-10 text-center dark:border-zinc-700">
				<div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-500">
					<Users size={40} />
				</div>

				<h2 className="text-3xl font-bold">
					No Users Found
				</h2>

				<p className="mx-auto mt-3 max-w-lg text-zinc-500">
					There are currently no users on the platform. Once users
					register and create accounts, they will appear here for
					management and moderation.
				</p>
			</div>
		</div>
	);
}