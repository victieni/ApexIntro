import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const AppleCardsCarousel: Block = {
	slug: "AppleCardsCarousel",
	admin: {
		images: {
			thumbnail: "https://assets.aceternity.com/apple-cards-carousel.webp",
			// icon: "https://assets.aceternity.com/apple-cards-carousel.webp",
		},
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "cards",
			type: "array",
			fields: [
				{ name: "title", type: "text", required: true },
				{ name: "category", type: "text", required: true },
				{ name: "thumbnailUrl", type: "text", required: true },
				{
					name: "content",
					type: "group",
					fields: [
						{ name: "subTitle", type: "text", required: true },
						{ name: "body", type: "textarea", required: true },
						{ name: "imageUrl", type: "text" },
					],
				},
			],
		},
	],
};
