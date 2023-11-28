import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";

const useOwnerArticles = () => {
  const { user } = useAuthInfo();
  const axiosSecure = useAxiosSecure();
  const {
    data: articles = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/articles/owner?email=${user?.email}`);
      return res.data;
    },
  });
  return { articles, isLoading, refetch };
};

export default useOwnerArticles;
