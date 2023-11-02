import { Unicorn } from "../features/unicorns/store/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useUnicornsApi = () => {
  const getUnicorns = async () => {
    const response = await fetch(`${apiUrl}/unicorn?_limit=10`);
    const unicorns = (await response.json()) as Unicorn[];

    return unicorns;
  };

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
