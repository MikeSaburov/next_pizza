import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";

interface filtersProps {
  className?: string;
}

export const Filters: React.FC<filtersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
    </div>
  );
};
