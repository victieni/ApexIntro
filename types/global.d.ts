import type { Credential, Design, Section } from "./payload";

export {};

declare global {
	type ICredentials = Credential;
	type INavItems = Credential["navItems"];
	type IDesign = Design;
	type IHeroBg = Design["heroBg"];

	type ISection = NonNullable<Section["sections"]>[number];
	type ICanva = NonNullable<ISection["CanvasRevealEffect"]>["canva"];
}
