import { useNavigate } from "react-router-dom";
import CardComponent, { CardProps } from "../../components/CardComponent";
import "./index.css";

const data = [
  {
    title: "Klepon: Traditional Indonesian Sweet",
    image:
      "https://i.pinimg.com/564x/4f/f8/72/4ff872a775cffa158c378b39c8f85ecd.jpg",
    description:
      "Klepon is a traditional Indonesian snack made from glutinous rice flour, filled with palm sugar, and coated in grated coconut. A perfect treat with a burst of sweetness in every bite!",
  },
  {
    title: "Nasi Goreng: Indonesia’s Favorite Fried Rice",
    image:
      "https://i.pinimg.com/564x/21/c5/ac/21c5ac87bcf3c2c74e8adfbcfeb6b82d.jpg",
    description:
      "Nasi Goreng is a beloved Indonesian fried rice dish, packed with flavors from garlic, shallots, and sweet soy sauce, often topped with a fried egg for extra richness.",
  },
  {
    title: "Gado-Gado: Indonesia's Mixed Vegetable Salad",
    image:
      "https://i.pinimg.com/564x/74/d3/82/74d3823a4a662809f86716d3c9e50120.jpg",
    description:
      "Gado-Gado is a healthy and delicious Indonesian salad made from boiled vegetables, tofu, tempeh, and lontong, topped with a creamy peanut sauce dressing.",
  },
];

function Example2() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card-container">
        {data.map((item: CardProps) => {
          return (
            <CardComponent
              title={item.title}
              image={item.image}
              description={item.description}
              onClick={() =>
                navigate("/detail/" + item.title, {
                  state: {
                    title: item.title,
                    description: item.description,
                  },
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Example2;
