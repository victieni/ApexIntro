import CircularGallery from "../CircularGallery";

export default function CircularGallerySection({
	cards,
}: {
	cards: ICircularGalleryCards;
}) {
	return (
		<div style={{ height: "600px", position: "relative" }}>
			<CircularGallery
				items={cards?.map((c) => ({ image: c.imageUrl, text: c.title }))}
				borderRadius={0.05}
				scrollEase={0.02}
				scrollSpeed={5}
			/>
		</div>
	);
}
