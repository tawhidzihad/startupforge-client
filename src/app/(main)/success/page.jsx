import { redirect } from "next/navigation";

import { getUserSession } from "@/lib/core/session";
import { stripe } from "@/lib/stripe";

import { setSubscriptions } from "@/lib/actions/subscriptions";
import SuccessContent from "./SuccessContent";

export default async function Success({ searchParams }) {
	const user = await getUserSession();

	const { session_id } = await searchParams;

	if (!session_id) {
		throw new Error("Please provide a valid session_id");
	}

	const session = await stripe.checkout.sessions.retrieve(session_id, {
		expand: ["payment_intent"],
	});

	if (session.status === "open") {
		redirect("/");
	}

	if (session.status === "complete") {
		const customerEmail = session.customer_email;
		const amount = session.amount_total / 100;
		const paymentStatus = session.payment_status;
		const transactionId = session.payment_intent?.id;
		const upgradedPlan = session.metadata?.upgradedPlan;
		const userId = session.metadata?.userId;
		const userRole = session.metadata?.userRole;

		const payload = {
			customerEmail,
			amount,
			paymentStatus,
			transactionId,
			upgradedPlan,
			userId,
			userRole,
		};

		await setSubscriptions(payload);

		return (
			<SuccessContent
				user={user}
				customerEmail={customerEmail}
				amount={amount}
				paymentStatus={paymentStatus}
				transactionId={transactionId}
				upgradedPlan={upgradedPlan}
				userId={userId}
				userRole={userRole}
			/>
		);
	}

	return null;
}
