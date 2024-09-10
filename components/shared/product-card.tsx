import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface productCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<productCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260 px]">
          <img
            className="max-w-[215px] min-w-[100px] min-h-[100px] max-h-[215px]"
            src={imageUrl}
            alt={name}
          />
        </div>
        <Title text={name} size={"sm"} className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
