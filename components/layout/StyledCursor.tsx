"use client";

import type { ReactNode } from "react";
import { useDesign } from "@/contexts/design.context";
import { eCursorVariants } from "@/types/enums";
import ClickSpark from "../ClickSpark";
import SplashCursor from "../SplashCursor";
import TargetCursor from "../TargetCursor";

export default function StyledCursor({ children }: { children?: ReactNode }) {
	const { cursorVariant } = useDesign();

	if (cursorVariant === eCursorVariants.ClickSpark) {
		return (
			<ClickSpark
				sparkColor="#fff"
				sparkSize={23}
				sparkRadius={15}
				sparkCount={8}
				duration={400}
			>
				{children}
			</ClickSpark>
		);
	} else if (cursorVariant === eCursorVariants.SplashCursor) {
		return (
			<>
				<SplashCursor />
				{children}
			</>
		);
	} else if (cursorVariant === eCursorVariants.TargetCursor) {
		return (
			<ClickSpark
				sparkColor="#fff"
				sparkSize={23}
				sparkRadius={15}
				sparkCount={8}
				duration={400}
			>
				{children}
				<TargetCursor
					spinDuration={2}
					hideDefaultCursor
					parallaxOn
					hoverDuration={0.2}
				/>
			</ClickSpark>
		);
	}
	return <></>;
}
