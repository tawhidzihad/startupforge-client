import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { getUserSession } from "@/lib/core/session";
import { stripe } from "@/lib/stripe";

export async function POST() {
	try {
		const user = await getUserSession();

		if (!user) {
			return NextResponse.json(
				{
					message: "Unauthorized",
				},
				{
					status: 401,
				},
			);
		}

		const headersList = await headers();
		const origin = headersList.get("origin");

		const upgradedPlan =
			user.role === "founder" ? "founder_premium" : "collaborator_premium";

		const session = await stripe.checkout.sessions.create({
			mode: "payment",

			customer_email: user.email,

			line_items: [
				{
					price: process.env.STRIPE_PRICE_ID,
					quantity: 1,
				},
			],

			metadata: {
				userId: user?.id,
				userName: user?.name,
				userEmail: user?.email,
				userRole: user?.role,
				currentPlan: user?.plan,
				upgradedPlan,
			},

			success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,

			cancel_url: `${origin}/pricing`,
		});

		return NextResponse.redirect(session.url, 303);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{
				message: "Failed to create checkout session",
			},
			{
				status: 500,
			},
		);
	}
}
