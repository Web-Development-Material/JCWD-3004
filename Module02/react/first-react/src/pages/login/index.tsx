import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../../components/tailwind/Layout";

type LoginState = {
  username?: string;
  password?: string;
};

function Login() {
  const navigate = useNavigate();
  const [credential, setCredentials] = useState<LoginState>({
    username: "",
    password: "",
  });

  function onSubmit(e: any) {
    e.preventDefault();
    if (credential.username === "" || credential.password === "") {
      Swal.fire({
        title: "Error",
        text: "Please enter your credentials before submitting!",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Success",
        text: "Successfully logged in!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/example-3/" + credential.username);
        }
      });
    }
  }

  return (
    <Layout>
      <h2 className="text-blue-600 font-bold">Login</h2>
      <form
        onSubmit={onSubmit}
        className="p-10 w-96 h-full grid grid-cols-1 gap-y-5 rounded-md shadow-md"
      >
        <label className="text-blue-600 font-semibold">Username</label>
        <input
          type="text"
          value={credential.username}
          onChange={(e: any) =>
            setCredentials({
              username: e.target.value,
              password: credential.password,
            })
          }
          placeholder="Type your username here"
          className="w-full h-12 p-5 rounded-md border border-blue-500"
        />
        <label className="text-blue-600 font-semibold">Password</label>
        <input
          type="text"
          value={credential.password}
          onChange={(e: any) =>
            setCredentials({
              password: e.target.value,
              username: credential.username,
            })
          }
          placeholder="Type your password here"
          className="w-full h-12 p-5 rounded-md border border-blue-500"
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 border-none focus:outline-none rounded-md font-semibold text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default Login;
