import Heading from "@/components/layout/Heading";
import StyledCursor from "@/components/layout/StyledCursor";
import CanvasRevealEffectSection from "@/components/sections/CanvasRevealEffectSection";
import HeroSection from "@/components/sections/HeroSection";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { getSections } from "@/lib/actions/globals.actions";
import { cn } from "@/lib/utils";
import { eSectionVariants } from "@/types/enums";

export default async function Home() {
	const { sections } = await getSections();
	return (
		<StyledCursor>
			{/* TEst cursor variants */}
			<HeroSection />

			<div className="space-y-4 mt-4">
				{sections!.map((s) => (
					<SectionContainer key={s.id} section={s} />
				))}
			</div>
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
				<Heading>{section.title}</Heading>
			</div>
			<div className="flex items-center gap-x-2 text-lg">
				<span>{section.description}</span>
				{section.highlightText && (
					<PointerHighlight
						rectangleClassName="bg-primary/30 dark:bg-primary/20 border-primary leading-loose px-2! rounded-sm"
						pointerClassName="text-yellow-500"
					>
						<span className="relative z-10 font-medium">
							{section.highlightText}
						</span>
					</PointerHighlight>
				)}
			</div>

			<div>
				{section.variant === eSectionVariants.CanvasRevealEffect ? (
					<CanvasRevealEffectSection
						canva={section.CanvasRevealEffect?.canva}
					/>
				) : (
					"Coming soon..."
				)}
			</div>
		</div>
	);
};
