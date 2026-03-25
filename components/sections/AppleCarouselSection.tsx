"use client";

import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { cn, getImageUrl } from "@/lib/utils";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";

export function AppleCarouselSection({
	section,
	className,
}: {
	section: IAppleCarouselSection;
	className?: string;
}) {
	// const cards = data.map((card, index) => (
	// 	<Card key={card.src} card={card} index={index} />
	// ));
	const cards = section.cards?.map((c, index) => (
		<Card
			key={c.id}
			card={{
				title: c.title!,
				category: c.category!,
				thumbnailUrl: getImageUrl(c.thumbnail)!,
				content: (
					<Content
						body={c.content.body}
						imageUrl={getImageUrl(c.content.image)!}
						subTitle={c.content.subTitle}
					/>
				),
			}}
			index={index}
		/>
	));

	return (
		<div className={cn("w-full h-full py-20", className)}>
			{/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
				Get to know your iSad.
			</h2> */}
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>
			<Carousel items={cards!} />
		</div>
	);
}

const Content = ({
	subTitle,
	body,
	imageUrl,
}: {
	subTitle: string;
	body: string;
	imageUrl: string;
}) => {
	return (
		<div
			key={"dummy-content"}
			className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
		>
			<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
				<span className="font-bold text-neutral-700 dark:text-neutral-200">
					{subTitle}
				</span>{" "}
				{body}
			</p>
			<Image
				src={imageUrl}
				alt="img"
				height="999"
				width="999"
				className="md:w-1/2 md:h-1/2 h-full w-full mt-5 mx-auto rounded-lg object-contain"
			/>
		</div>
	);
};
