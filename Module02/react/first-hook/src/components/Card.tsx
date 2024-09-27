import { ProductsProps } from "../utils/interface";

function Card({
  id,
  title,
  description,
  image,
  price,
  onClick,
}: ProductsProps) {
  return (
    <div id={id} className="w-full h-full rounded-md bg-white">
      <img src={image} alt="product-image" className="w-full h-60" />
      <div className="p-5 space-y-5">
        <h2 className="font-semibold text-black text-md">{title}</h2>
        <p className="text-black">{description}</p>
        <h2 className="font-semibold text-red-600 text-md mt-5">
          Harga : Rp{price}
        </h2>
        <button
          onClick={onClick}
          className="mt-10 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
