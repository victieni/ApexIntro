"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import TargetCursor from "../TargetCursor";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default function SnapCursorSection({
	boxes,
	...props
}: { boxes: ISnapBoxes } & ComponentProps<"div">) {
	return (
		<div {...props}>
			<TargetCursor
				spinDuration={2}
				hideDefaultCursor
				parallaxOn
				hoverDuration={0.2}
			/>

			<BentoGrid className="max-w-4xl mx-auto md:auto-rows-auto">
				{boxes!.map((b, i) => (
					<BentoGridItem.Simple
						key={b.id}
						body={b.body}
						className={cn(
							"cursor-target border-dashed border-2",
							(i === 3 || i === 6) && "md:col-span-2"
						)}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
