import StyledCursor from "@/components/layout/StyledCursor";
import CanvasRevealEffectSection from "@/components/sections/CanvasRevealEffectSection";
import HeroSection from "@/components/sections/HeroSection";
import SplashCursor from "@/components/SplashCursor";
import { DesignProvider } from "@/contexts/design.context";
import { getDesign, getSections } from "@/lib/actions/globals.actions";
import { cn } from "@/lib/utils";
import { eSectionVariants } from "@/types/enums";

export default async function Home() {
	const design = await getDesign();
	const { sections } = await getSections();
	return (
		<StyledCursor>
			{/* TEst cursor variants */}
			<DesignProvider designInit={design}>
				<HeroSection />

				<div>
					{sections!.map((s) => (
						<SectionContainer key={s.id} section={s} />
					))}
				</div>
			</DesignProvider>
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
	return (
		<div className={cn("", className)}>
			<div>
				<p>{section.title}</p>
			</div>

			<div>
				{section.variant === eSectionVariants.CanvasRevealEffect ? (
					<CanvasRevealEffectSection />
				) : (
					"Coming soon..."
				)}
			</div>
		</div>
	);
};
