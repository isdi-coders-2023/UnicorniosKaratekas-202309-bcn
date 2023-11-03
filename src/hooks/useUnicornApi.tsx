import { useCallback } from "react";

import { Unicorn } from "../features/unicorns/store/types";

const useUnicornsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUnicorns = useCallback(async () => {
    const response = await fetch(`${apiUrl}/unicorn?_limit=10`);
    const unicorns = (await response.json()) as Unicorn[];

    return unicorns;
  }, [apiUrl]);

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
