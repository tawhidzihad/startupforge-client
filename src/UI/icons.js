import {
	BriefcaseBusiness,
	Building2,
	CheckCircle2,
	ClipboardList,
	Clock3,
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
	success: CheckCircle2,
	pending: Clock3,

	// Admin
	users: Users,
	transactions: CreditCard,
};
