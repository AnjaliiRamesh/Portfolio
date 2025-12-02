// HeatmapTooltip.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeatmapTooltip({ visible, x, y, data }) {
  // x,y are page relative positions; style positions in parent
  return (
    <AnimatePresence>
      {visible && data && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -6 }}
          transition={{ duration: 0.12 }}
          style={{
            position: "fixed",
            left: x,
            top: y,
            transform: "translate(-50%, -110%)",
            zIndex: 50,
            pointerEvents: "none"
          }}
          className="bg-black/90 text-white text-sm rounded-md px-3 py-2 shadow-lg max-w-xs"
        >
          <div className="font-semibold">{data.count} contribution{data.count !== 1 ? "s" : ""}</div>
          <div className="text-gray-300 text-xs">{data.date}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
