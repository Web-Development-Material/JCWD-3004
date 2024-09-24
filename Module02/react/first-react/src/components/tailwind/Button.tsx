interface ButtonProps {
  id: string;
  title?: string;
  type?: "green" | "red";
  onClick?: () => void;
}

function Button({ id, title, type, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      className={
        type === "green"
          ? "bg-green-500 hover:bg-green-600 text-white font-semibold border-none rounded-md focus:outline-none"
          : "bg-red-500 hover:bg-red-600 text-white font-semibold border-none rounded-md focus:outline-none"
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
