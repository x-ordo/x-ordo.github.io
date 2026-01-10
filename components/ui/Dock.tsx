"use client";

import React from "react";

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
  return (
    <div
      onClick={onClick}
      className={`dock-item group relative ${className}`}
      tabIndex={0}
      role="button"
      style={{
        width: baseItemSize,
        height: baseItemSize,
        // CSS custom properties for hover animation
        "--base-size": `${baseItemSize}px`,
        "--magnified-size": `${magnification}px`,
      } as React.CSSProperties}
    >
      <div className="dock-icon">{icon}</div>
      <div
        className="dock-label opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-2.5 transition-all duration-150 ease-out"
        role="tooltip"
      >
        {label}
      </div>
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  panelHeight = 40,
  baseItemSize = 32,
  magnification = 38,
}: DockProps) {
  return (
    <div className="dock-outer" style={{ height: panelHeight + 16 }}>
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
      <style jsx global>{`
        .dock-item {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dock-item:hover {
          width: var(--magnified-size) !important;
          height: var(--magnified-size) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .dock-item {
            transition: none;
          }
          .dock-label {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
