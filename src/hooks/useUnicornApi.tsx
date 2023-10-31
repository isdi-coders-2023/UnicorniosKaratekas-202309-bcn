import { useCallback } from "react";
import UnicornContextStructure from "../components/features/unicorns/store/types";

const useUnicornsApi = () => {
  const apiUrl = import.meta.env.VITE_SWAPI_URL;

  const getUnicorns = useCallback(async () => {
    const response = await fetch(`${apiUrl}?_limit=10`);
    const unicorns = (await response.json()) as UnicornContextStructure;

    return unicorns;
  }, [apiUrl]);

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
