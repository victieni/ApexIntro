"use client";

import { motion } from "motion/react";
import { ComponentProps } from "react";
import { Button } from "../ui/button";

export default function MyBtn({ ...props }: ComponentProps<typeof Button>) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="w-fit"
    >
      <Button {...props} />
    </motion.div>
  );
}
