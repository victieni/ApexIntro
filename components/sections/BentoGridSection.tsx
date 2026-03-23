import { cn } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import SectionHeader from "../layout/SectionHeader";

export default function BentoGridSection({
	section,
	className,
}: {
	section: IBentoGridSection;
	className?: string;
}) {
	return (
		<div className={cn("", className)}>
			<SectionHeader
				title={section.title}
				description={section.description!}
				highlightText={section.highlightText!}
			/>

			<BentoGrid className="max-w-4xl mx-auto">
				{section.items!.map((b, i) => (
					<BentoGridItem
						key={b.id}
						title={b.title}
						description={b.description}
						// header={}
						icon={<DynamicIcon name={b.icon!} />}
						className={cn(
							"cursor-target",
							(i === 3 || i === 6) && "md:col-span-2!",
							i === 7 && "md:col-span-3!"
						)}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
