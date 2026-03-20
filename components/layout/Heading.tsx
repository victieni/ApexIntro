"use client";

import type { ComponentProps } from "react";

import { useDesign } from "@/contexts/design.context";
import { cn, getHeaderFont } from "@/lib/utils";

export default function Heading({
	className,
	...props
}: ComponentProps<"div">) {
	const { headerFont } = useDesign();

	return (
		<div
			{...props}
			className={cn(
				`flex items-center gap-x-1 text-3xl text-primary ${
					getHeaderFont(headerFont).className
				}`,
				className
			)}
		/>
	);
}
