import React from "react";

interface filterCheckboxProps {
  className?: string;
}

export const FilterCheckbox: React.FC<filterCheckboxProps> = ({
  className,
}) => {
  return <div className={className}></div>;
};
