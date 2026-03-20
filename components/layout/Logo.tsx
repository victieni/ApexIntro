import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ComponentProps } from "react";

export default function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn("flex items-center gap-x-1", className)}>
      <Image
        src={"/assets/icon.png"}
        alt="logo"
        width={999}
        height={999}
        priority
        className="size-10 object-cover rounded-lg"
      />
      <p className="text-lg font-semibold text-primary">ApexIntro</p>
    </div>
  );
}
