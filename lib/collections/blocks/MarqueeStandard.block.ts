import type { Block } from "payload";
import { LUCIDE_ICON_NAMES } from "@/constants";

export const MarqueeStandard: Block = {
	slug: "MarqueeStandard",
	fields: [
		{ name: "title", type: "text", required: true },
		{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
		{ name: "description", type: "textarea" },
		{ name: "highlightText", type: "text" },
		{
			name: "orientation",
			type: "radio",
			options: ["horizontal", "vertical"],
			defaultValue: "horizontal",
		},
		{
			name: "rows",
			type: "array",
			fields: [
				{
					name: "reverse",
					type: "checkbox",
					required: true,
					defaultValue: false,
				},
				{
					name: "cards",
					type: "array",
					fields: [
						{ name: "name", type: "text", required: true },
						{ name: "username", type: "text", required: true },
						{ name: "body", type: "text", required: true },
						{ name: "imageUrl", type: "text", required: true },
					],
				},
			],
		},
	],
};
