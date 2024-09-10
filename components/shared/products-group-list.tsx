import React from "react";

interface productsGroupListProps {
  className?: string;
}

export const ProductsGroupList: React.FC<productsGroupListProps> = ({
  className,
}) => {
  return <div className={className}></div>;
};
