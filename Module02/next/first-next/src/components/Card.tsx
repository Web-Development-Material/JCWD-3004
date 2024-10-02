import Image from "next/image";

interface CardProps {
  id: string;
  title?: string;
  image?: string;
  description?: string;
  price?: number;
}

function Card({ id, title, image, description, price }: CardProps) {
  return (
    <div id={id} className="w-full h-full rounded-md shadow-md">
      <Image
        src={
          image !== undefined
            ? image
            : "https://i.pinimg.com/564x/6a/f1/ec/6af1ec6645410a41d5339508a83b86f9.jpg"
        }
        alt={title || "default"}
        width={500}
        height={300}
      />
      <div className="p-5 space-y-3">
        <h2 className="font-semibold text-slate-700">{title}</h2>
        <p className="text-slate-700">{description}</p>
        <p className="font-semibold text-red-500">Rp{price}</p>
      </div>
    </div>
  );
}

export default Card;
