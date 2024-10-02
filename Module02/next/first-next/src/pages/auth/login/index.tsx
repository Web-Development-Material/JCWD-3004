import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

type LoginState = {
  username: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const [credentials, setCredential] = useState<LoginState>({
    username: "",
    password: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push({
      // -> router.push untuk navigasi ke halaman tertentu
      pathname: "/home",
      query: {
        username: credentials.username, // -> untuk mengirim params ke 'home'
      },
    });
  }

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <h2 className="font-bold text-slate-600 my-5">Form Login</h2>
      <form
        onSubmit={onSubmit}
        className="shadow-md rounded-md w-1/2 h-full my-10 flex flex-col p-10 space-y-5"
      >
        <label className="font-semibold text-slate-500">Username</label>
        <input
          className="rounded-md border border-slate-700 p-3 text-black"
          placeholder="type your username here ..."
          value={credentials.username}
          onChange={(e: any) =>
            setCredential({
              username: e.target.value,
              password: credentials.password,
            })
          }
        />
        <label className="font-semibold text-slate-500">Password</label>
        <input
          className="rounded-md border border-slate-700 p-3 text-black"
          placeholder="type your password here ..."
          value={credentials.password}
          onChange={(e: any) =>
            setCredential({
              username: credentials.username,
              password: e.target.value,
            })
          }
        />
        <button
          type="submit"
          className="w-full h-10 rounded-md bg-slate-700 text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
