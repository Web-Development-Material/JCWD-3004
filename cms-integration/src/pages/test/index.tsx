import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "@/utils/interface";

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ message: string } | null>(null);

  const SPACE_ID = "i8n0zdgbzg78"; // Ganti dengan Space ID Anda
  const ACCESS_TOKEN = "kxiWbwk_LiphDSJrsVU-UFGSxzuCNr8bwIfzuIz83DM"; // Ganti dengan Access Token Anda

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}`
        );
        setArticles(response.data.items);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  console.log("article : ", articles);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching articles: {error.message}</div>;

  return (
    <div className="bg-white w-screen h-full p-10 flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-5">
        {articles?.map((article: any) => {
          return (
            <div className="w-full h-full border border-slate-300 space-y-2">
              <h2 className="font-bold text-gray-800">{article?.fields?.pageTitle}</h2>
              <p className="text-gray-800">{article?.fields?.pageDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
