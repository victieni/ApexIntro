"use client";

import Image from "next/image";
import { Tabs } from "../ui/animatedTabs";
import { cn, getImageUrl } from "@/lib/utils";
import SectionHeader from "../layout/SectionHeader";

export function AnimatedTabsSection({
	section,
	className,
}: {
	section: IAnimatedTabsSection;
	className?: string;
}) {
	return (
		<div className={cn("", className)}>
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>
			<div className="h-[30rem] md:h-[40rem] perspective-[1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10 mb-40">
				<Tabs
					tabs={section.tabs!.map((t) => ({
						title: t.tabName,
						value: t.tabName,
						content: (
							<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
								<p>{t.title}</p>
								<Image
									src={getImageUrl(t.image)!}
									alt="dummy image"
									width="1000"
									height="1000"
									className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
								/>
							</div>
						),
					}))}
				/>
			</div>
		</div>
	);
}
