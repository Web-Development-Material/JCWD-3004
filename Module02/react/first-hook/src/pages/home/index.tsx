import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Home() {
  const navigate = useNavigate();
  let userToken = Cookies.get("userToken");
  let userName = Cookies.get("userName");
  let userPlan = Cookies.get("userPlan");

  // pemanggilan session storage
  let userNameSession = sessionStorage.getItem("userName");

  // pemanggilan local storage
  let userNameLocal = localStorage.getItem("userName");

  function logOut() {
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("userToken");
        Cookies.remove("userName");
        navigate("/auth/register");
      }
    });
  }

  useEffect(() => {
    if (!userToken) {
      navigate("/auth/register");
    }
  }, []);

  return (
    <div className="w-screen h-full bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h2 className="font-bold text-slate-700">Home Page</h2>
        <p className="font-semibold text-slate-600">Hello, {userName}</p>
        <p className="text-slate-600">You are {userPlan} member </p>
        <p className="text-green-500 font-semibold">
          Data Session - Name : {userNameSession}
        </p>
        <p className="text-red-500 font-semibold">
          Data Local - Name : {userNameLocal}
        </p>
        <button
          onClick={logOut}
          className="my-10 bg-red-500 text-white font-semibold rounded-md"
        >
          Log Out
        </button>
        {userPlan === "premium" ? (
          <div className="w-60 h-60 bg-blue-500 rounded-md flex justify-center items-center">
            <p className="text-white">
              If you choose premium plan, you can see this object
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
