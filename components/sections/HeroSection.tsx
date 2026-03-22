"use client";

import { useRef, type ComponentProps } from "react";
import { useCredentials } from "@/contexts/credentials.context";
import { eHeroBg } from "@/types/enums";
import { motion, useScroll, useTransform } from "motion/react";
import CTABtn from "../Btns/CTABtn";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { SparklesCore } from "../ui/sparkles";
import { Vortex } from "../ui/vortex";

export default function HeroSection({
	className,
	...props
}: ComponentProps<"section">) {
	// const { heroBg } = useDesign();
	const {
		credentials: { hero },
	} = useCredentials();

	return (
		<section {...props}>
			{hero.heroBg === eHeroBg.HeroHighlight ? (
				<HeroHighlightSection />
			) : hero.heroBg === eHeroBg.Sparkles ? (
				<SparklesHeroSection />
			) : hero.heroBg === eHeroBg.GeminiEffect ? (
				<GeminiEffectSection />
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
		credentials: { appTitle, hero },
	} = useCredentials();
	return (
		<div className="h-[40rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
			<h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
				{appTitle}
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

function GeminiEffectSection() {
	const {
		credentials: { appTitle, hero },
	} = useCredentials();

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
	const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
	const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
	const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
	const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

	return (
		<div
			className="h-screen bg-background w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
			ref={ref}
		>
			<GoogleGeminiEffect
				title={appTitle}
				description={hero.mainText}
				pathLengths={[
					pathLengthFirst,
					pathLengthSecond,
					pathLengthThird,
					pathLengthFourth,
					pathLengthFifth,
				]}
			/>

			<div className="mt-5 flex flex-col items-center justify-center gap-3!">
				<p className="text-base! font-medium">{hero.callToActionText}</p>
			</div>
		</div>
	);
}

export function VortexDemo() {
	const {
		credentials: { appTitle, hero },
	} = useCredentials();

	return (
		<div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
			<Vortex
				backgroundColor="black"
				className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
			>
				<h2 className="text-2xl md:text-6xl font-bold text-center">
					{appTitle}
				</h2>
				<p className="text-base md:text-2xl max-w-xl mt-6 text-center">
					{hero.mainText}
				</p>

				<div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
					<p className=" text-base md:text-lg font-medium max-w-xl mt-6 text-center">
						{hero.callToActionText}
					</p>
					<CTABtn className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]" />

					{/* <button className="px-4 py-2  text-white ">Watch trailer</button> */}
				</div>
			</Vortex>
		</div>
	);
}
