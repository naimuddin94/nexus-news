import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useArticles = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: articles = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles/approved");
      return res.data;
    },
  });
  return { articles, isLoading, refetch };
};

export default useArticles;
