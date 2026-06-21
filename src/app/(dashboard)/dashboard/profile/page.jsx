import ProfileSection from "@/components/dashboard/profilePageComponents/ProfileSection";
import { getUserSession } from "@/lib/core/session";

const ProfilePageForAllRole = async () => {
	const user = await getUserSession();

	return <ProfileSection user={user}></ProfileSection>;
};

export default ProfilePageForAllRole;
