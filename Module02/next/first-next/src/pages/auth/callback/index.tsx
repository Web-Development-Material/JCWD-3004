import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "@/utils/supabase";
import Cookies from "js-cookie";

function Callback() {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          Cookies.set("google_access_token", session?.access_token);
          Cookies.set("google_refresh_token", session?.refresh_token);
          router.push({ pathname: "/home" });
        } else {
          router.push({ pathname: "/auth/login" });
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-3">
        <h2 className="font-bold text-blue-600">Please wait ...</h2>
        <p className="text-blue-500">You will be redirected to home page</p>
      </div>
    </div>
  );
}

export default Callback;
