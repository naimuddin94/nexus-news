import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
    // axiosSecure("/articles").then((res) => setArticles(res.data));
  }, [axiosSecure]);

  return articles;
};

export default useArticles;
