import type { ComponentProps } from "react";
import MagicBento from "../MagicBento";
import { cn } from "@/lib/utils";

export default function MagicBentoGridSection({
	items,
	className,
	...props
}: {
	items: IMagicBentoItems;
} & ComponentProps<"div">) {
	if (!items) return;

	return (
		<div
			{...props}
			className={cn("flex items-center justify-center", className)}
		>
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
				cardData={items}
			/>
		</div>
	);
}
