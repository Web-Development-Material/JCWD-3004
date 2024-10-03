import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();
axios.defaults.baseURL = "https://66f65798436827ced976b37a.mockapi.io";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rqbneqIoeyvMX5OxvP8wpixHdvZeZVy9RA&s" />
      </Header>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
