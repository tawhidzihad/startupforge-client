import FeaturedOpportunitiesSection from "@/components/home/FeaturedOpportunitiesSection";
import FeaturedStartupsSection from "@/components/home/FeaturedStartupsSection";
import HeroSection from "@/components/home/HeroSection";
import StartupStatisticsSection from "@/components/home/StartupStatisticsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyJoinSection from "@/components/home/WhyJoinSection";
import { getAllOpportunities } from "@/lib/fetchings/opportunities";
import { getAllStartups } from "@/lib/fetchings/startups";

export default async function Home() {
	const startups = await getAllStartups();
	const { data } = await getAllOpportunities({
		search: "",
		workType: "",
		industry: "",
		page: "",
	});

	return (
		<>
			<HeroSection></HeroSection>
			<FeaturedStartupsSection startups={startups}></FeaturedStartupsSection>
			<FeaturedOpportunitiesSection
				opportunities={data}
			></FeaturedOpportunitiesSection>
			<WhyJoinSection></WhyJoinSection>
			<StartupStatisticsSection></StartupStatisticsSection>
			<TestimonialsSection></TestimonialsSection>
		</>
	);
}
