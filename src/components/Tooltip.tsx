"use client";
import React, { useState } from 'react';

export type TooltipPosition = 'left' | 'bottom' | 'right';

const Tooltip = ({ text, position = 'left', children }: {text: string, position: TooltipPosition, children: React.ReactNode}) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <div
      className="tooltip-box"
      onMouseEnter={() => setHoverActive(true)}
      onMouseLeave={() => setHoverActive(false)}
    >
      {children}
      {text && hoverActive && (
        <div className={`tooltip ${position}`}>
          <span className="text-sm font-semibold">{text}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;