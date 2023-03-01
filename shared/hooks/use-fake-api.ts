export default function useFakeApi() {
  const mutation = useMutation<{ couponCode: string }>({
    mutationFn: async () => {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve({ couponCode: "INFINITY_dulHbP" });
        }, 1500);
      });
    },
  });

  return mutation;
}
