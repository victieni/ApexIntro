"use client";

import { DynamicIcon } from "lucide-react/dynamic";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

export default function CanvasRevealEffectSection({
	canva,
}: {
	canva: ICanva;
}) {
	return (
		<div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
			{canva!.map((c) => (
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
	);
}
