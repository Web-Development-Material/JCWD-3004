import React from "react";

export interface ProductsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  quantity:number
}
