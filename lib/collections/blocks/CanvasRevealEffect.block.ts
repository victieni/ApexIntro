import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const CanvasRevealEffect: Block = {
	slug: "CanvasRevealEffect",
	admin: {
		images: {
			thumbnail: "https://assets.aceternity.com/canvas-reveal-effect.webp",
		},
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "canva",
			type: "array",
			fields: [
				{ name: "title", type: "text", required: true },
				{ name: "description", type: "text" },
				{
					name: "icon",
					type: "select",
					options: LUCIDE_ICON_NAMES,
				},
			],
		},
	],
};
