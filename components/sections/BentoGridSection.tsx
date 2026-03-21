import { cn, getRandomNumber } from "@/lib/utils";
import { DynamicIcon } from "lucide-react/dynamic";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default function BentoGridSection({ items }: { items: IBentoItems }) {
	console.log(getRandomNumber(1, items?.length));
	return (
		<div>
			<BentoGrid className="max-w-4xl mx-auto">
				{items!.map((b, i) => (
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
						// className={cn(
						// 	"cursor-target",
						// 	(i === getRandomNumber(1, items?.length) ||
						// 		i === getRandomNumber(1, items?.length)) &&
						// 		"md:col-span-2!"
						// )}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
