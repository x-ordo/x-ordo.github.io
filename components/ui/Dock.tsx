"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
};

type DockItemProps = {
  className?: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick?: () => void;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  icon,
  label,
  className = "",
  onClick,
  baseItemSize,
  magnification,
}: DockItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      animate={{
        width: isHovered ? magnification : baseItemSize,
        height: isHovered ? magnification : baseItemSize,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
    >
      <div className="dock-icon">{icon}</div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.15 }}
            className="dock-label"
            role="tooltip"
            style={{ x: "-50%" }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Dock({
  items,
  className = "",
  panelHeight = 52,
  baseItemSize = 40,
  magnification = 52,
}: DockProps) {
  return (
    <div className="dock-outer" style={{ height: panelHeight + 20 }}>
      <div
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            className={item.className}
            baseItemSize={baseItemSize}
            magnification={magnification}
          />
        ))}
      </div>
    </div>
  );
}
