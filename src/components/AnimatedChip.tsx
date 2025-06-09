import React from 'react';

export default function AnimatedChip({
  label,
  onClick,
}: {
  label: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}) {
  return (
    <li
      className="transform cursor-default select-none rounded-full bg-gray-100 px-3 py-1 text-xs font-medium shadow-md shadow-sm transition-all duration-300 hover:-rotate-2 hover:bg-brand hover:text-white hover:shadow-lg"
      onClick={onClick}
    >
      {label}
    </li>
  );
}
