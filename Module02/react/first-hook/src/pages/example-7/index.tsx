import { useTheme } from "../../context/themeContext";
import { useNavigate } from "react-router-dom";

function Example7() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={
        theme === "light"
          ? "w-screen h-screen bg-white text-black flex flex-col justify-center items-center"
          : "w-screen h-screen bg-black text-white flex flex-col justify-center items-center"
      }
    >
      <h2 className="font-semibold">Example 7 Page</h2>
      <div className="w-60 h-20">
        <button onClick={() => navigate(-1)} className="w-full h-full">
          Back to Example 6
        </button>
      </div>
    </div>
  );
}

export default Example7;
