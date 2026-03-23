import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const AnimatedTestimonials: Block = {
	slug: "AnimatedTestimonials",
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
				{ name: "imageUrl", type: "text" },
			],
		},
	],
};
