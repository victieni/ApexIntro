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
				{ name: "category", type: "text" },
				{ name: "title", type: "text" },
				{ name: "imageUrl", type: "text" },
				// {name: "content", type: "text"},
			],
		},
	],
};
