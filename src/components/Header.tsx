import React from "react";

export default ({children}: {children: React.ReactNode}) => {
  return (
    <div className="border-b mb-8">
      <h1 className="text-2xl font-semibold text-gray-800 pb-2">{children}</h1>
    </div>
  );
};
