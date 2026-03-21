import MagicBento from "../MagicBento";

export default function MagicBentoGridSection({
	items,
}: {
	items: IMagicBentoItems;
}) {
	return (
    <div>

		<MagicBento
			textAutoHide={true}
			enableStars
			enableSpotlight
			enableBorderGlow={true}
			enableTilt={false}
			enableMagnetism={false}
			clickEffect
			spotlightRadius={400}
			particleCount={12}
			glowColor="132, 0, 255"
			disableAnimations={false}
      
      />
      </div>
	);
}
