import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Cookies from "js-cookie";
import { supabase } from "@/utils/supabase";
import Swal from "sweetalert2";

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

  async function signInWithGoogle() {
    const REDIRECT_URL = "/auth/callback";
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: REDIRECT_URL,
      },
    });
    if (error) {
      Swal.fire({
        title: "Failed to login with Google",
        text: "Please try again later",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <div className="w-screen h-full bg-white flex flex-col justify-center items-center">
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
        <div className="flex flex-col space-y-5">
          <button
            type="submit"
            className="w-full h-10 rounded-md bg-slate-700 text-white font-semibold"
          >
            Login
          </button>
          <button
            onClick={signInWithGoogle}
            type="button"
            className="w-full bg-white h-10 rounded-md border bg-slate-700 text-black font-semibold flex justify-center items-center"
          >
            <img
              className="h-full"
              src="https://i.pinimg.com/564x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg"
            />
            Login with Google OAuth
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
