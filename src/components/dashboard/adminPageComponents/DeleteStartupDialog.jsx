"use client";

import { AlertDialog, Button } from "@heroui/react";
import { AlertTriangle, Trash2 } from "lucide-react";

export default function DeleteStartupDialog({ startupName, onDelete }) {
	return (
		<AlertDialog place>
			<Button color="danger" className="rounded bg-red-500 text-white">
				<Trash2 size={16} />
			</Button>

			<AlertDialog.Backdrop>
				<AlertDialog.Container placement="center">
					<AlertDialog.Dialog>
						<AlertDialog.CloseTrigger />

						<AlertDialog.Header>
							<div className="flex items-center gap-3">
								<div className="rounded-full bg-red-500/10 p-3 text-red-500">
									<AlertTriangle size={24} />
								</div>

								<div>
									<h2 className="text-lg font-semibold">
										Delete Startup
									</h2>

									<p className="text-sm text-zinc-500">
										This action cannot be undone.
									</p>
								</div>
							</div>
						</AlertDialog.Header>

						<AlertDialog.Body>
							<p className="text-zinc-600 dark:text-zinc-400">
								Are you sure you want to delete{" "}
								<span className="font-semibold">{startupName}</span>?
							</p>

							<div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
								<p className="text-sm text-red-500">
									Deleting this startup will permanently remove:
								</p>

								<ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
									<li>The startup profile</li>

									<li>
										All opportunities associated with this startup
									</li>
								</ul>
							</div>
						</AlertDialog.Body>

						<AlertDialog.Footer>
							<Button variant="ghost" slot="close">
								Cancel
							</Button>

							<Button variant="danger" slot="close" onPress={onDelete}>
								Delete Startup
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
