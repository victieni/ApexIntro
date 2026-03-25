import { LivePreview } from "@/components/layout/LivePreview";
import StyledCursor from "@/components/layout/StyledCursor";
import { AnimatedTabsSection } from "@/components/sections/AnimatedTabsSection";
import { AnimatedTestimonialSection } from "@/components/sections/AnimatedTestimonialsSection";
import { AppleCarouselSection } from "@/components/sections/AppleCarouselSection";
import BentoGridSection from "@/components/sections/BentoGridSection";
import CanvasRevealEffectSection from "@/components/sections/CanvasRevealEffectSection";
import CircularGallerySection from "@/components/sections/CircularGallerySection";
import ContactsSection from "@/components/sections/ContactsSection";
import { FocusCardsGallerySection } from "@/components/sections/FocusCardsGallerySection";
import HeroSection from "@/components/sections/HeroSection";
import MagicBentoGridSection from "@/components/sections/MagicBentoGridSection";
import { Marquee3DGallerySection } from "@/components/sections/Marquee3DGallerySection";
import { MarqueeStandardSection } from "@/components/sections/MarqueeStandardSection";
import { ParallaxScrollGallerySection } from "@/components/sections/ParallaxScrollSection";
import SnapCursorSection from "@/components/sections/SnapCursorSection";
import { getSections } from "@/lib/actions/globals.actions";

export default async function Home() {
	const { sections } = await getSections();

	console.log("🛎️ Sections:", sections)

	return (
		<StyledCursor>
			<LivePreview />

			<HeroSection />

			<div className="space-y-5 my-4">
				{sections!.map((s) => (
					<SectionContainer key={s.id} section={s} />
				))}
			</div>

			<ContactsSection />
		</StyledCursor>
	);
}

const SectionContainer = ({
	section,
	className,
}: {
	section: ISection;
	className?: string;
}) => {
	switch (section.blockType) {
		case "CanvasRevealEffect":
			return (
				<CanvasRevealEffectSection section={section} className={className} />
			);
		case "AnimatedTestimonials":
			return (
				<AnimatedTestimonialSection section={section} className={className} />
			);
		case "animatedTabs":
			return <AnimatedTabsSection section={section} className={className} />;
		case "BentoGrid":
			return <BentoGridSection section={section} className={className} />;
		case "MagicBento":
			return <MagicBentoGridSection section={section} className={className} />;
		case "AppleCardsCarousel":
			return <AppleCarouselSection section={section} className={className} />;
		case "CircularGallery":
			return <CircularGallerySection section={section} className={className} />;
		case "Marquee3DGallery":
			return (
				<Marquee3DGallerySection section={section} className={className} />
			);
		case "FocusCardsGallery":
			return (
				<FocusCardsGallerySection section={section} className={className} />
			);
		case "ParallaxGridGallery":
			return (
				<ParallaxScrollGallerySection section={section} className={className} />
			);
		case "SnapCursor":
			return <SnapCursorSection section={section} className={className} />;
		case "MarqueeStandard":
			return <MarqueeStandardSection section={section} />;

		default:
			return <div>Coming soon.</div>;
	}
};
