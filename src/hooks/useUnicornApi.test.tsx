import unicorns from "../data/unicorns";
import { renderHook } from "@testing-library/react";
import { Unicorn } from "../features/unicorns/store/types";

import useUnicornsApi from "./useUnicornApi";

describe("Given a get custom hook", () => {
  describe("When it fetches unicorns from the API", () => {
    test("Then it should return some unicorns", async () => {
      const expectedUnicorns: Unicorn[] = unicorns;

      const { result } = renderHook(() => useUnicornsApi());

      const currentUnicorns = await result.current.getUnicorns();

      expect(currentUnicorns).toStrictEqual(expectedUnicorns);
    });
  });
});
