import FeaturedOpportunitiesSection from "@/components/home/FeaturedOpportunitiesSection";
import FeaturedStartupsSection from "@/components/home/FeaturedStartupsSection";
import HeroSection from "@/components/home/HeroSection";
import StartupStatisticsSection from "@/components/home/StartupStatisticsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyJoinSection from "@/components/home/WhyJoinSection";

export default function Home() {
	return (
		<>
			<HeroSection></HeroSection>
			<FeaturedStartupsSection></FeaturedStartupsSection>
			<FeaturedOpportunitiesSection></FeaturedOpportunitiesSection>
			<WhyJoinSection></WhyJoinSection>
			<StartupStatisticsSection></StartupStatisticsSection>
			<TestimonialsSection></TestimonialsSection>
		</>
	);
}
