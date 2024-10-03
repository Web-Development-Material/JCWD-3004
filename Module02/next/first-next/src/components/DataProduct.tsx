import React from "react";

interface DataProductProps {
  title: string;
  description: string;
}

function DataProduct({ title, description }: DataProductProps) {
  return (
    <div className="flex flex-col text-slate-700 space-y3">
      <h2 className="font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default DataProduct;
