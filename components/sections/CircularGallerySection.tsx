import { cn, getImageUrl } from "@/lib/utils";
import CircularGallery from "../CircularGallery";
import SectionHeader from "../layout/SectionHeader";

export default function CircularGallerySection({
	section,
	className,
}: {
	section: ICircularGallerySection;
	className?: string;
}) {
	return (
		<div className={cn("h-[600] relative", className)}>
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>
			<CircularGallery
				items={section.cards?.map((c) => ({
					image: getImageUrl(c.image)!,
					text: c.title,
				}))}
				borderRadius={0.05}
				scrollEase={0.02}
				scrollSpeed={5}
			/>
		</div>
	);
}
