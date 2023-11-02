import { Unicorn } from "../types";

const useUnicornsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUnicorns = async () => {
    const response = await fetch(`${apiUrl}?_limit=10`);
    const unicorns = (await response.json()) as Unicorn[];

    return unicorns;
  };

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
