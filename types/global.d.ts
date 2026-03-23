import type { Credential, Design, Section } from "./payload";

export {};

declare global {
	type ICredentials = Credential;
	type INavItems = Credential["navItems"];
	type IDesign = Design;
	type IHeroBg = Design["heroBg"];

	type ISection = NonNullable<Section["sections"]>[number];
	type ICanvasSection = Extract<ISection, { blockType: "CanvasRevealEffect" }>;
	type ISnapCursorSection = Extract<ISection, { blockType: "SnapCursor" }>;
	type IBentoGridSection = Extract<ISection, { blockType: "BentoGrid" }>;
	type IMagicBentoSection = Extract<ISection, { blockType: "MagicBento" }>;
	type IAnimatedTestimonialsSection = Extract<
		ISection,
		{ blockType: "AnimatedTestimonials" }
	>;
	type IAnimatedTabsSection = Extract<ISection, { blockType: "animatedTabs" }>;
	type IAppleCarouselSection = Extract<
		ISection,
		{ blockType: "AppleCardsCarousel" }
	>;
	type IFocusGallerySection = Extract<
		ISection,
		{ blockType: "FocusCardsGallery" }
	>;
	type IParallaxGridGallerySection = Extract<
		ISection,
		{ blockType: "ParallaxGridGallery" }
	>;
	type ICircularGallerySection = Extract<
		ISection,
		{ blockType: "CircularGallery" }
	>;
	type IMarquee3DGallerySection = Extract<
		ISection,
		{ blockType: "Marquee3DGallery" }
	>;
}
