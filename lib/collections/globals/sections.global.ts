import { LUCIDE_ICON_NAMES } from "@/constants";
import { eSectionVariants } from "@/types/enums";
import type { GlobalConfig } from "payload";

export const Sections: GlobalConfig = {
	slug: "sections",
	fields: [
		{
			name: "sections",
			type: "array",
			fields: [
				{ name: "title", type: "text", required: true },
				{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
				{ name: "description", type: "textarea" },
				{ name: "highlightText", type: "text" },
				{
					name: "variant",
					type: "select",
					options: Object.entries(eSectionVariants).map(([label, value]) => ({
						label,
						value,
					})),
					required: true,
				},
				{
					type: "tabs",
					tabs: [
						{
							name: "CanvasRevealEffect",
							fields: [
								{ name: "title", type: "text", required: true },
								{ name: "icon", type: "select", options: LUCIDE_ICON_NAMES },
							],
						},
						{ name: "AppleCardsCarousel", fields: [] },
						{ name: "FocusCardsImageGallery", fields: [] },
						{ name: "BentoGrid", fields: [] },
						{ name: "MagicBento", fields: [] },
						{ name: "CircularGallery", fields: [] },
						{ name: "SnapCursor", fields: [] },
						{ name: "SpotLightCards", fields: [] },
					],
				},
			],
		},
	],
};
