"use client";
import React, { useState } from 'react';

const Tooltip = ({ text, position = 'left', children }: {text: string, position: 'left' | 'bottom' | 'right', children: React.ReactNode}) => {
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