import useSWR from "swr";

export function useStream(id: string) {
  const { data, error } = useSWR(id ? `/api/streams/${id}` : null);
  return { stream: data, isLoading: !error && !data, error };
}
