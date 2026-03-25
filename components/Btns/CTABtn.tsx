import type { ComponentProps } from "react";
import { useCredentials } from "@/contexts/credentials.context";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { Magnetic } from "../ui/magnetic";

export default function CTABtn({
	className,
	...props
}: ComponentProps<"button">) {
	const {
		credentials: { hero },
	} = useCredentials();

	const springOptions = { bounce: 0.1 };

	const clickHandler = () => {
		toast.success(hero.callToActionMessage || "Lets build the futures✨", {
			id: "dsdew4",
		});
	};

	return (
		<Magnetic
			intensity={0.2}
			springOptions={springOptions}
			actionArea="global"
			range={200}
		>
			<button
				{...props}
				onClick={clickHandler}
				className={cn(
					"inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-100 px-4 py-2 text-sm text-zinc-950 transition-all duration-200 hover:bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600",
					className
				)}
			>
				<Magnetic
					intensity={0.1}
					springOptions={springOptions}
					actionArea="global"
					range={200}
				>
					<span>{hero.callToActionButtonText}</span>
				</Magnetic>
			</button>
		</Magnetic>
	);
}
