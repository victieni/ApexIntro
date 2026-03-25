import type { GlobalConfig } from "payload";
import {
	AnimatedTabs,
	AnimatedTestimonials,
	AppleCardsCarousel,
	BentoGrid,
	CanvasRevealEffect,
	CircularGallery,
	FocusCardsGallery,
	MagicBento,
	Marquee3DGallery,
	MarqueeStandard,
	ParallaxGridGallery,
	SnapCursor,
} from "../blocks";
import { updateSections } from "@/lib/actions/mutation.actions";

export const Sections: GlobalConfig = {
	slug: "sections",
	versions: {
		drafts: {
			autosave: {
				interval: 100, // ? Best for optimal live preview.
			},
		},
	},
	fields: [
		{
			name: "sections",
			type: "blocks",
			blocks: [
				AnimatedTabs,
				AnimatedTestimonials,
				AppleCardsCarousel,
				BentoGrid,
				CircularGallery,
				CanvasRevealEffect,
				FocusCardsGallery,
				MagicBento,
				Marquee3DGallery,
				MarqueeStandard,
				ParallaxGridGallery,
				SnapCursor,
			],
		},
	],
	hooks: {
		afterChange: [updateSections],
	},
};
