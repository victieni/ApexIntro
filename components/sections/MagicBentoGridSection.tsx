import type { ComponentProps } from "react";
import MagicBento from "../MagicBento";
import { cn } from "@/lib/utils";
import SectionHeader from "../layout/SectionHeader";

export default function MagicBentoGridSection({
	section,
	className,
	...props
}: {
	section: IMagicBentoSection;
} & ComponentProps<"div">) {
	return (
		<div
			{...props}
			className={cn("flex items-center justify-center", className)}
		>
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>

			<MagicBento
				textAutoHide={true}
				enableStars
				enableSpotlight
				enableBorderGlow={true}
				enableTilt={true}
				enableMagnetism={true}
				clickEffect
				spotlightRadius={400}
				particleCount={12}
				glowColor="132, 0, 255"
				disableAnimations={false}
				cardData={section.items!}
			/>
		</div>
	);
}
