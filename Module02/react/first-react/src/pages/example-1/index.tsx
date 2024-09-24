import TestComponent, {TestComponentProps} from "../../components/TestComponent";

let data = [
  {
    image:
      "https://i.pinimg.com/564x/4a/8e/e5/4a8ee52494f16358d06588ded569136f.jpg",
    alt: "hello minion 1",
    text: "Component 1",
  },
  {
    image:
      "https://i.pinimg.com/564x/39/01/b0/3901b08f91ad0a3e751907764f87a2f6.jpg",
    alt: "hello minion 2",
    text: "Component 2",
  },
  {
    image:
      "https://i.pinimg.com/564x/14/76/d8/1476d887b509305319b9d603a9b71df5.jpg",
    alt: "hello minion 3",
    text: "Component 3",
  },
];

function Example1() {
  return (
    <div>
      Example 1 Page
      {data.map((item: TestComponentProps) => {
        return (
          <TestComponent image={item.image} alt={item.alt} text={item.text} />
        );
      })}
    </div>
  );
}

export default Example1;
