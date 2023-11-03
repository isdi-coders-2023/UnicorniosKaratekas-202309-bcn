import { useCallback, useContext } from "react";
import { Unicorn } from "../features/unicorns/store/types";
import UiContext from "../features/ui/store/UiContext";

const useUnicornsApi = () => {
  const { setIsLoading } = useContext(UiContext);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getUnicorns = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}/unicorn?_limit=10`);
      const unicorns = (await response.json()) as Unicorn[];
      setIsLoading(false);

      return unicorns;
    } catch {
      return;
    }
  }, [apiUrl, setIsLoading]);

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
