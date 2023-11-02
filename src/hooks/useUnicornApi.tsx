import { useCallback, useContext } from "react";
import UnicornContext from "../features/unicorns/store/UnicornContext";
import { Unicorn } from "../features/unicorns/store/types";

const useUnicornsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { loadUnicorns } = useContext(UnicornContext);

  const getUnicorns = useCallback(async () => {
    const response = await fetch(`${apiUrl}?_limit=10`);
    const unicorns = (await response.json()) as Unicorn[];

    loadUnicorns(unicorns);
  }, [apiUrl, loadUnicorns]);

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
