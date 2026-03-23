import { eHeroBg } from "@/types/enums";
import React from "react";
import DotGrid from "../DotGrid";
import Galaxy from "../Galaxy";
import LightPillar from "../LightPillar";
import LiquidEther from "../LiquidEther";
import Orb from "../Orb";
import RippleGrid from "../RippleGrid";

export default function CustomHeroBg({
	heroBg,
}: {
	heroBg: ICredentials["hero"]["heroBg"];
}) {
	switch (heroBg) {
		case "Dot_Grid":
			return (
				<div style={{ width: "100%", height: "600px", position: "relative" }}>
					<DotGrid
						dotSize={5}
						gap={15}
						baseColor="#271E37"
						activeColor="#5227FF"
						proximity={120}
						shockRadius={250}
						shockStrength={5}
						resistance={750}
						returnDuration={1.5}
					/>
				</div>
			);
		case "Galaxy":
			return <Galaxy />;
		case "Light_Pillar":
			return (
				<LightPillar
					topColor="#5227FF"
					bottomColor="#FF9FFC"
					intensity={1}
					rotationSpeed={0.3}
					glowAmount={0.002}
					pillarWidth={3}
					pillarHeight={0.4}
					noiseIntensity={0.5}
					pillarRotation={25}
					interactive={false}
					mixBlendMode="screen"
					quality="high"
				/>
			);
		case "Liquid_Ether":
			return (
				<LiquidEther
					colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
					mouseForce={20}
					cursorSize={100}
					isViscous
					viscous={30}
					iterationsViscous={32}
					iterationsPoisson={32}
					resolution={0.5}
					isBounce={false}
					autoDemo
					autoSpeed={0.5}
					autoIntensity={2.2}
					takeoverDuration={0.25}
					autoResumeDelay={3000}
					autoRampDuration={0.6}
				/>
			);
		case "Orb":
			return (
				<Orb
					hoverIntensity={2}
					rotateOnHover
					hue={0}
					forceHoverState={false}
					backgroundColor="#000000"
				/>
			);
		case "Ripple_Grid":
			return (
				<RippleGrid
					enableRainbow={false}
					gridColor="#ffffff"
					rippleIntensity={0.05}
					gridSize={10}
					gridThickness={15}
					mouseInteraction={true}
					mouseInteractionRadius={1.2}
					opacity={0.8}
				/>
			);

		default:
			return <></>;
	}
}
