import unicorns from "../data/unicorns";
import { Unicorn } from "../features/unicorns/store/types";
import useUnicornsApi from "./useUnicornApi";

describe("Given a get custom hook", () => {
  describe("When it fetches the url 'https://unicorns-api-2-zdnv.onrender.com/unicorn?_limit=10'", () => {
    test("Then it should return an array of Unicorns", async () => {
      const expectedUnicorns: Unicorn[] = unicorns;

      const { getUnicorns } = useUnicornsApi();

      const currentUnicorns = await getUnicorns();

      expect(currentUnicorns).toStrictEqual(expectedUnicorns);
    });
  });
});
