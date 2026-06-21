"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ProfileDetailsCard from "./ProfileDetailsCard";
import ProfileEditForm from "./ProfileEditForm";

export default function ProfileSection({ user }) {
	const [isEditing, setIsEditing] = useState(false);

	const router = useRouter();

	if (isEditing) {
		return (
			<ProfileEditForm
				user={user}
				onSuccess={() => {
					setIsEditing(false);
					router.refresh();
				}}
				onCancel={() => setIsEditing(false)}
			/>
		);
	}

	return <ProfileDetailsCard user={user} onEdit={() => setIsEditing(true)} />;
}
