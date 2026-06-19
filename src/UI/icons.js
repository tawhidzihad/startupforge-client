import {
	BriefcaseBusiness,
	Building2,
	ClipboardList,
	CreditCard,
	FileText,
	LayoutDashboard,
	Search,
	Settings,
	User,
	Users,
} from "lucide-react";

export const icons = {
	// Common
	dashboard: LayoutDashboard,
	profile: User,

	// Founder
	startup: Building2,
	settings: Settings,
	opportunity: BriefcaseBusiness,
	manage: ClipboardList,
	applications: FileText,

	// Collaborator
	opportunities: Search,

	// Admin
	users: Users,
	transactions: CreditCard,
};
