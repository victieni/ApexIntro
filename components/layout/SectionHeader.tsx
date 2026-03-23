import React from "react";
import Heading from "./Heading";
import { PointerHighlight } from "../ui/pointer-highlight";

export default function SectionHeader({
	title,
	description,
	highlightText,
}: {
	title: string;
	description?: string;
	highlightText?: string;
}) {
	return (
		<div>
			<Heading>{title}</Heading>
			<div className="flex items-center gap-x-2 flex-wrap text-lg">
				<span>{description}</span>
				{highlightText && (
					<PointerHighlight
						rectangleClassName="bg-primary/30 dark:bg-primary/20 border-primary leading-loose px-2! rounded-sm"
						pointerClassName="text-yellow-500"
					>
						<span className="relative z-10 font-medium">{highlightText}</span>
					</PointerHighlight>
				)}
			</div>
		</div>
	);
}
