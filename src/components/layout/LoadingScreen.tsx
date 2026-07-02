"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center">
            <div className="relative h-14 overflow-hidden">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
              >
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-900">
                  ECO PACIFIC
                </span>
              </motion.div>
              <motion.span
                initial={{ x: "-10%" }}
                animate={{ x: "110%" }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
                className="absolute top-0 h-full w-3 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 rounded-full blur-[1px]"
              />
            </div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-2 text-xs tracking-[0.3em] font-medium text-primary-500"
            >
              PAINTING
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
