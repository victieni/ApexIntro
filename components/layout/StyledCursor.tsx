"use client";

import type { ReactNode } from "react";
import { useDesign } from "@/contexts/design.context";
import { eCursorVariants } from "@/types/enums";
import ClickSpark from "../ClickSpark";
import SplashCursor from "../SplashCursor";

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
	}
	return <></>;
}
