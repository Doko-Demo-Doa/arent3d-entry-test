import { useQuery } from "@tanstack/react-query";

export default function useFakeApi() {
  const mutation = useQuery(["0"], async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.json();
  });

  return mutation;
}
