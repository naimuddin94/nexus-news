import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminAllArticles = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: articles = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res.data;
    },
  });
  return { articles, isLoading, refetch };
};

export default useAdminAllArticles;
