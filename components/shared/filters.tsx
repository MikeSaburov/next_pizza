import React from "react";
import { Title } from "./title";

interface filtersProps {
  className?: string;
}

export const Filters: React.FC<filtersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="my-5 font-bold" />
    </div>
  );
};
