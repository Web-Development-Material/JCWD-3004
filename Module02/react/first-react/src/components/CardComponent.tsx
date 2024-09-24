import "../styles/card.css";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

function CardComponent({ image, title, description, onClick }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button onClick={onClick} className="card-button">
        Order Now!
      </button>
    </div>
  );
}

export default CardComponent;
