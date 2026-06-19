"use client";

import { useState } from "react";

import DeleteStartupModal from "@/components/dashboard/startupPageComponents/DeleteStartupModal";
import EmptyStartupState from "@/components/dashboard/startupPageComponents/EmptyStartupState";
import MyStartupCard from "@/components/dashboard/startupPageComponents/MyStartupCard";
import MyStartupForm from "@/components/dashboard/startupPageComponents/MyStartupForm";
import { deleteStartup } from "@/lib/actions/startups";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function StartupSection({ startupData, user }) {
	const router = useRouter();
	const [isCreating, setIsCreating] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async () => {
		try {
			setIsDeleting(true);

			const data = await deleteStartup(startupData._id);

			if (data.deletedCount) {
				toast.success("Startup deleted successfully");
				setDeleteOpen(false);
				router.refresh();
			}
		} finally {
			setIsDeleting(false);
		}
	};

	// No Startup Found
	if (!startupData && !isCreating) {
		return <EmptyStartupState onCreate={() => setIsCreating(true)} />;
	}

	// Create Mode
	if (!startupData && isCreating) {
		return (
			<MyStartupForm
				user={user}
				startupData={startupData}
				onSuccess={() => {
					setIsEditing(false);
					setIsCreating(false);
					router.refresh();
				}}
			/>
		);
	}

	// Edit Mode
	if (startupData && isEditing) {
		return (
			<MyStartupForm
				user={user}
				startupData={startupData}
				onSuccess={() => {
					setIsEditing(false);
					setIsCreating(false);
					router.refresh();
				}}
			/>
		);
	}

	// Startup Card
	return (
		<>
			<MyStartupCard
				startup={startupData}
				onEdit={() => setIsEditing(true)}
				onDelete={() => setDeleteOpen(true)}
			/>

			<DeleteStartupModal
				isOpen={deleteOpen}
				onClose={() => setDeleteOpen(false)}
				onConfirm={handleDelete}
				isDeleting={isDeleting}
			/>
		</>
	);
}
