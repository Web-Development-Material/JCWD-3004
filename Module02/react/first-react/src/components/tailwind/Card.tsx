interface CardProps {
  id: string;
  title?: string;
  description?: string;
  image?: string;
}

function Card({ id, title, description, image }: CardProps) {
  return (
    <div
      id={id}
      className="w-full h-full flex flex-col justify-center items-center shadow-md rounded-md"
    >
      <img src={image} className="w-full h-full" />
      <div className="m-5 p-5 w-full text-slate-600">
        <h3 className="font-bold mb-5">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
