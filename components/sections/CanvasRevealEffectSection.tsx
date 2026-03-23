"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import SectionHeader from "../layout/SectionHeader";
import { cn } from "@/lib/utils";

export default function CanvasRevealEffectSection({
	section,
	className,
}: {
	section: ICanvasSection;
	className?: string;
}) {
	return (
		<div className={className}>
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>

			<div
				className={cn(
					"py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8"
				)}
			>
				{section.canva!.map((c) => (
					<CanvasRevealEffect.Card
						key={c.id}
						title={c.title}
						icon={<DynamicIcon size={36} name={c.icon!} />}
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-black"
							colors={[
								[236, 72, 153],

								// [232, 121, 249],
							]}
							dotSize={2}
						/>

						<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
					</CanvasRevealEffect.Card>
				))}
			</div>
		</div>
	);
}
