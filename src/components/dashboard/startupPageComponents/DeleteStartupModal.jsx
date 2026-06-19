"use client";

import { AlertDialog, Button } from "@heroui/react";

import { AlertTriangle } from "lucide-react";

export default function DeleteStartupModal({
	isOpen,
	onClose,
	onConfirm,
	isDeleting = false,
}) {
	if (!isOpen) return null;

	return (
		<AlertDialog isOpen={isOpen} onOpenChange={onClose}>
			<AlertDialog.Backdrop>
				<AlertDialog.Container placement="center">
					<AlertDialog.Dialog>
						<AlertDialog.Header>
							<div className="flex items-center gap-3">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
									<AlertTriangle size={24} />
								</div>

								<div>
									<AlertDialog.Heading className="text-lg font-semibold">
										Delete Startup
									</AlertDialog.Heading>

									<p className="mt-1 text-sm text-zinc-500">
										This action cannot be undone.
									</p>
								</div>
							</div>
						</AlertDialog.Header>

						<AlertDialog.Body>
							<p className="leading-7 text-zinc-600 dark:text-zinc-400">
								Are you sure you want to delete this startup? All
								startup information and related opportunities will be
								permanently removed.
							</p>
						</AlertDialog.Body>

						<AlertDialog.Footer>
							<div className="flex w-full justify-end">
								<Button
									variant="ghost"
									onPress={onClose}
									isDisabled={isDeleting}
								>
									Cancel
								</Button>

								<Button
									variant="danger"
									onPress={onConfirm}
									isLoading={isDeleting}
								>
									Delete Startup
								</Button>
							</div>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
