export interface TestComponentProps {
  text: string;
  image: string;
  alt: string;
}

function TestComponent({ text, image, alt }: TestComponentProps) {
  return (
    <div>
      <h1>There is testing component</h1>
      <img src={image} alt={alt} width={200} height={200} />
      <h2>Component Name : {text}</h2>
    </div>
  );
}

export default TestComponent;
