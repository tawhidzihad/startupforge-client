import ProfileSection from "@/components/dashboard/profilePageComponents/ProfileSection";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

const ProfilePageForAllRole = async () => {
	const user = await getUserSession();

	if (!user) {
		redirect("/signin");
	}

	return <ProfileSection user={user}></ProfileSection>;
};

export default ProfilePageForAllRole;
