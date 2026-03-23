"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "../layout/SectionHeader";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default function SnapCursorSection({
	section,
	...props
}: { section: ISnapCursorSection } & ComponentProps<"div">) {
	return (
		<div {...props}>
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>

			<BentoGrid className="max-w-4xl mx-auto md:auto-rows-auto">
				{section.boxes!.map((b, i) => (
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
