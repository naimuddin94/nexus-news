import { useQuery } from "@tanstack/react-query";
import { axiosBase } from "./useAxiosSecure";

const useTrendingArticles = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const res = await axiosBase.get("/articles/views");
      return res.data;
    },
  });
  return { articles, isLoading };
};

export default useTrendingArticles;
