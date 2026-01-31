"use client";

import { motion } from "framer-motion";

export default function AnimatedHero({ text }: { text: string }) {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center text-primary"
    >
      {text}
    </motion.h1>
  );
}
