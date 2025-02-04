import React from "react";

export default ({children, actions}: {children: React.ReactNode, actions?: React.ReactNode}) => {
  return (
    <div className="border-b mb-4 pb-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">{children}</h1>
      {
        actions && (
          <div>
            {actions}
          </div>
        )
      }
    </div>
  );
};
