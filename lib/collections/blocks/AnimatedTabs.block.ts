import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";
import { imageFields } from "../Media";

export const AnimatedTabs: Block = {
	slug: "animatedTabs",
	admin: {
		images: {
			thumbnail: "https://assets.aceternity.com/tabs.webp",
		},
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "tabs",
			type: "array",
			fields: [
				{ name: "tabName", type: "text", required: true },
				{ name: "title", type: "text", required: true },
				{ name: "image", type: "group", required: true, fields: imageFields },
			],
		},
	],
};
