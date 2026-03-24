import { LUCIDE_ICON_NAMES } from "@/constants";
import type { Block } from "payload";

export const AnimatedTestimonials: Block = {
	slug: "AnimatedTestimonials",
	admin: {
		images: {
			thumbnail: "https://assets.aceternity.com/animated-testimonials.webp",
		},
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "testimonials",
			type: "array",
			fields: [
				{ name: "name", type: "text", required: true },
				{
					name: "designation",
					type: "text",
					required: true,
					defaultValue: "client",
				},
				{ name: "quote", type: "textarea", required: true },
				{ name: "image", type: "upload", relationTo: "media", required: true },
			],
		},
	],
};
