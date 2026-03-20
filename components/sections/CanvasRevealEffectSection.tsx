"use client"

import React from "react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { DynamicIcon } from "lucide-react/dynamic";

export default function CanvasRevealEffectSection() {
	return (
		<div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
			<CanvasRevealEffect.Card
				title="Nisha is Munni"
				icon={<DynamicIcon name="a-arrow-down" />}
			>
				<CanvasRevealEffect
					animationSpeed={3}
					containerClassName="bg-black"
					colors={[
						[236, 72, 153],
						[232, 121, 249],
					]}
					dotSize={2}
				/>

				<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
			</CanvasRevealEffect.Card>
			{/* <CanvasRevealEffect.Card title="Munni is Aditi" icon={<DynamicIcon />}>
				<CanvasRevealEffect
					animationSpeed={3}
					containerClassName="bg-sky-600"
					colors={[[125, 211, 252]]}
				/>
			</CanvasRevealEffect.Card> */}
		</div>
	);
}
