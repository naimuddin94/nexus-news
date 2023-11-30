import { useQuery } from "@tanstack/react-query";
import { axiosBase } from "./useAxiosSecure";

const useArticles = () => {
  const {
    data: articles = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosBase.get("/articles/approved");
      return res.data;
    },
  });
  return { articles, isLoading, refetch };
};

export default useArticles;
