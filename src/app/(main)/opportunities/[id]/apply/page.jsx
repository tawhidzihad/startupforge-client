import ApplicationLimitCard from "@/components/dashboard/opportunitiesPageComponents/applyPageComponents/ApplicationLimitCard";
import ApplicationLimitReachedState from "@/components/dashboard/opportunitiesPageComponents/applyPageComponents/ApplicationLimitReachedState";
import ApplyOpportunityForm from "@/components/dashboard/opportunitiesPageComponents/applyPageComponents/ApplyOpportunityForm";
import OwnOpportunityApplyState from "@/components/dashboard/opportunitiesPageComponents/applyPageComponents/OwnOpportunityApplyState";
import { getUserSession } from "@/lib/core/session";
import { getApplications } from "@/lib/fetchings/applications";
import { getThisOpportunity } from "@/lib/fetchings/opportunities";
import { getPlan } from "@/lib/fetchings/plan";
import { redirect } from "next/navigation";

const ApplyPage = async ({ params }) => {
	const { id } = await params;
	const user = await getUserSession();

	if (!user) {
		redirect(`/signin?redirect=/opportunities/${id}/apply`);
	}

	const opportunity = await getThisOpportunity(id);

	const applications = await getApplications({
		applicantId: user?.id,
	});

	const plan = await getPlan(user?.plan || "collaborator_free");

	if (opportunity.founderId === user.id) {
		return <OwnOpportunityApplyState />;
	}

	if (applications.length >= plan.limit) {
		return (
			<ApplicationLimitReachedState
				currentApplications={applications.length}
				limit={plan.limit}
			/>
		);
	}

	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 lg:px-0">
				<div className="space-y-8">
					{/* Limit Card */}
					<ApplicationLimitCard
						currentApplications={applications.length}
						maxApplications={plan?.limit}
					/>

					{/* ApplyOpportunityForm */}
					<div className="rounded-3xl border border-dashed border-zinc-300 text-center dark:border-zinc-700">
						<ApplyOpportunityForm
							opportunity={opportunity}
							user={user}
						></ApplyOpportunityForm>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ApplyPage;
