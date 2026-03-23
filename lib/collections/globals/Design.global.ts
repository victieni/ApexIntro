import {
	eAppFonts,
	eCursorVariants,
	eHeaderFonts,
	eHeroBg,
} from "@/types/enums";
import type { GlobalConfig } from "payload";

export const Design: GlobalConfig = {
	slug: "designs",
	versions: {
		drafts: {
			autosave: {
				interval: 100, // ? Best for optimal live preview.
			},
		},
	},
	fields: [
		{
			name: "cursorVariant",
			type: "radio",
			options: Object.entries(eCursorVariants).map(([label, value]) => ({
				label,
				value,
			})),
			defaultValue: eCursorVariants.SplashCursor,
		},
		{
			name: "headerFont",
			type: "select",
			options: Object.entries(eHeaderFonts).map(([label, value]) => ({
				label,
				value,
			})),
			defaultValue: eHeaderFonts.KeaniaOne,
			required: true,
		},
		{
			name: "appFont",
			type: "select",
			options: Object.entries(eAppFonts).map(([label, value]) => ({
				label,
				value,
			})),
			defaultValue: eAppFonts.Poppins,
			required: true,
		},
	],
};
