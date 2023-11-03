import { renderHook } from "@testing-library/react";
import { Unicorn } from "../features/unicorns/store/types";

import useUnicornsApi from "./useUnicornApi";
import UiContextWrapper from "../features/ui/store/UiContextWrapper";

describe("Given a get custom hook", () => {
  describe("When it fetches unicorns from the API", () => {
    test("Then it should return some unicorns", async () => {
      const expectedUnicorns: Unicorn[] = [
        {
          id: 42,
          name: "Mr. Shy",
          alias: "Pinkamena Diane Pie",
          url: "https://mlp.fandom.com/wiki/Mr._and_Mrs._Shy",
          sex: "Male",
          residence: "Cloudsdale",
          occupation: "Weather factory worker (formerly)",
          kind: ["Pegasus"],
          image: [
            "https://vignette.wikia.nocookie.net/mlp/images/2/2d/Mr._Shy_ID_S6E11.png/revision/latest?cb=20160605103050",
          ],
        },
        {
          id: 43,
          name: "Mrs. Shy",
          alias: "Pinkamena Diane Pie",
          url: "https://mlp.fandom.com/wiki/Mr._and_Mrs._Shy",
          sex: "Female",
          residence: "Cloudsdale",
          occupation: "Weather factory worker (formerly)",
          kind: ["Pegasus"],
          image: [
            "https://vignette.wikia.nocookie.net/mlp/images/1/1a/Mrs._Shy_ID_S6E11.png/revision/latest?cb=20160605103103",
          ],
        },
        {
          id: 44,
          name: "Zephyr Breeze",
          alias: "Pinkamena Diane Pie",
          url: "https://mlp.fandom.com/wiki/Zephyr_Breeze",
          sex: "Male",
          residence: "Cloudsdale\nPonyville (briefly in S6E11)",
          occupation:
            "Mane therapist\nSalonist at The Mane Event\nRoyal guard (briefly)",
          kind: ["Pegasus"],
          image: [
            "https://vignette.wikia.nocookie.net/mlp/images/1/14/Zephyr_Breeze_ID_S6E11.png/revision/latest?cb=20160605103015",
          ],
        },
      ];

      const { result } = renderHook(() => useUnicornsApi(), {
        wrapper: ({ children }) => (
          <UiContextWrapper>{children}</UiContextWrapper>
        ),
      });

      const loadUnicorns = async () => {
        const unicorns = await result.current.getUnicorns();

        return unicorns;
      };

      const unicorns = await loadUnicorns();

      expect(unicorns).toStrictEqual(expectedUnicorns);
    });
  });
});
