import type { Credential, Design, Section } from "./payload";

export {};

declare global {
	type ICredentials = Credential;
	type INavItems = Credential["navItems"];
	type IDesign = Design;
	type IHeroBg = Design["heroBg"];

	type ISection = NonNullable<Section["sections"]>[number];
	type ICanva = NonNullable<ISection["CanvasRevealEffect"]>["canva"];
	type ISnapBoxes = NonNullable<ISection["SnapCursor"]>["boxes"];
	type IBentoItems = NonNullable<ISection["BentoGrid"]>["items"];
	type IMagicBentoItems = NonNullable<ISection["MagicBento"]>["items"];
	type IAnimatedTestimonials = NonNullable<
		ISection["AnimatedTestimonials"]
	>["testimonials"];
	type IAnimatedTabs = NonNullable<ISection["AnimatedTabs"]>["tabs"];
	type IFocusGalleryCards = NonNullable<ISection["FocusCardsGallery"]>["cards"];
	type IParallaxGridGalleryImages = NonNullable<
		ISection["ParallaxGridGallery"]
	>["images"];
	type ICircularGalleryCards = NonNullable<
		ISection["CircularGallery"]
	>["cards"];
}
