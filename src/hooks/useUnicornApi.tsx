import { Unicorn } from "../types";

const useUnicornsApi = () => {
  const getUnicorns = async () => {
    const response = await fetch(
      `https://unicorns-api-2-zdnv.onrender.com/unicorn?_limit=10`,
    );
    const unicorns = (await response.json()) as Unicorn[];

    return unicorns;
  };

  return {
    getUnicorns,
  };
};

export default useUnicornsApi;
