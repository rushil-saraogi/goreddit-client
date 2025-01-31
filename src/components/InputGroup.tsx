"use client";

import React, { ChangeEventHandler, FC, InputHTMLAttributes } from 'react';

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  value: string;
  icon?: string;
  error?: string;
  className?: string;
}

const InputGroup: FC<InputGroupProps> = ({
  isLoading = false,
  value,
  onChange,
  icon,
  error,
  className = '',
  children,
  ...props
}) => {
  // Determine additional input classes
  const inputClasses = `focus:ring-teal-500 py-4 text-gray-800 focus:border-teal-500 disabled:bg-gray-100 disabled:text-gray-500 block w-full pr-12 border-gray-300 rounded-md h-11 border ${
    icon ? 'pl-11' : 'pl-3'
  } ${error ? 'border-red-500' : ''} ${className}`;

  return (
    <div className="w-full">
      <div className="relative rounded-md shadow-sm">
        {/* Icon on the left */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-500">
              {icon}
            </span>
          </div>
        )}
        {/* Input field */}
        <input
          {...props}
          className={inputClasses}
          value={value}
          onChange={onChange}
        />
        {/* Loader or slot content on the right */}
        <div className="absolute inset-y-0 right-0 flex items-center">
          {isLoading ? (
            <div className="loader mr-2" />
          ) : (
            <div className="mr-2">{children}</div>
          )}
        </div>
      </div>
      {/* Error message */}
      {error && <div className="mt-1.5 text-red-500">{error}</div>}
    </div>
  );
};

export default InputGroup;
