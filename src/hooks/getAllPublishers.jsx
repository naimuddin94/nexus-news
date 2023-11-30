import { useQuery } from "@tanstack/react-query";
import { axiosBase } from "./useAxiosSecure";

const useAllPublisher = () => {
  const {
    data: publishers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosBase.get("/admin/publishers");
      return res.data;
    },
  });
  return { publishers, isLoading, refetch };
};

export default useAllPublisher;
