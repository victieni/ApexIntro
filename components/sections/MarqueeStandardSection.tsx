import { cn, getImageUrl } from "@/lib/utils";
import Image from "next/image";
import { Marquee } from "../ui/marquee";

const reviews = [
	{
		name: "Jack",
		username: "@jack",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Jill",
		username: "@jill",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "John",
		username: "@john",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "Jane",
		username: "@jane",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "Jenny",
		username: "@jenny",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "James",
		username: "@james",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/james",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	imageUrl,
	name,
	username,
	body,
}: {
	imageUrl: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
				// dark styles
				"dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img
					src={imageUrl}
					alt="image-sample"
					width="32"
					height="32"
					className="rounded-full size-10 object-cover"
				/>
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function MarqueeStandardSection({
	section,
}: {
	section: IMarqueeStandardSection;
}) {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			

			{section.rows?.map((r) => (
				<Marquee
					key={r.id}
					pauseOnHover
					reverse={r.reverse!}
					className="[--duration:20s]"
				>
					{r.cards!.map((review) => (
						<ReviewCard key={review.username} imageUrl={getImageUrl(review.image)!} {...review} />
					))}
				</Marquee>
			))}
			<div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
			<div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
		</div>
	);
}
