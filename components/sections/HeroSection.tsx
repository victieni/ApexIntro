"use client";

import { useCredentials } from "@/contexts/credentials.context";
import { eHeroBg } from "@/types/enums";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import MyBtn from "../Btns/MyBtn";
import CTABtn from "../Btns/CTABtn";
import { SparklesCore } from "../ui/sparkles";

export default function HeroSection({
	className,
	...props
}: ComponentProps<"section">) {
	// const { heroBg } = useDesign();
	const {
		credentials: { hero },
	} = useCredentials();

	console.log(hero);

	return (
		<section {...props}>
			{hero.heroBg === eHeroBg.HeroHighlight ? (
				<HeroHighlightSection />
			) : hero.heroBg === eHeroBg.Sparkles ? (
				<SparklesHeroSection />
			) : (
				"Coming soon"
			)}
		</section>
	);
}

const HeroHighlightSection = () => {
	const {
		credentials: { hero },
	} = useCredentials();
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
			>
				{hero.mainText} <Highlight className="">{hero.highlightText}</Highlight>
				<div className="mt-5 flex flex-col items-center justify-center gap-3!">
					<p className="text-base! font-medium">{hero.callToActionText}</p>
					<CTABtn />
				</div>
			</motion.h1>
		</HeroHighlight>
	);
};

const SparklesHeroSection = () => {
	const {
		credentials: { AppTitle, hero },
	} = useCredentials();
	return (
		<div className="h-[40rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
			<h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
				{AppTitle}
			</h1>
			<div className="w-[40rem] h-40 relative">
				{/* Gradients */}
				<div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
				<div className="absolute inset-x-20 top-0 bg-linear-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
				<div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute inset-x-60 top-0 bg-linear-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>

				{/* Radial Gradient to prevent sharp edges */}
				<div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

				<div className="mt-5 flex flex-col items-center justify-center gap-3!">
					<p className="text-base! font-medium">{hero.callToActionText}</p>
					<CTABtn />
				</div>
			</div>
		</div>
	);
};
