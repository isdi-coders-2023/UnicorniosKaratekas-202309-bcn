import useUnicornsApi from "./useUnicornApi";

describe("Given a get custom hook", () => {
  describe("When it fetches the url 'https://unicorns-api-2-zdnv.onrender.com/unicorn?_limit=10'", () => {
    test("Then it should return an array of Unicorns", async () => {
      const expectedUnicorns = [
        {
          id: 7,
          name: "Spike",
          alias: "Spike the Dragon",
          url: "https://mlp.fandom.com/wiki/Spike",
          sex: "Male",
          residence:
            "Canterlot (S1E1 and S9E26)\nCastle of Friendship (S4E26 to S9E26)\nGolden Oak Library, Ponyville (season 1 to 4)",
          occupation:
            "Twilight Sparkle's assistant\nFriendship ambassador (as of S715)\nTwilight's royal advisor (as of S9E24)\nCouncil of Friendship member (as of S9E26)\nDragon Lord (temporarily in S6E5)",
          kind: ["Dog", "Dragon"],
          image: [
            "https://vignette.wikia.nocookie.net/mlp/images/8/87/Spike_ID_S8E11.png/revision/latest?cb=20180526160714",
            "https://vignette.wikia.nocookie.net/mlp/images/5/5c/Spike_ID_S4E24.png/revision/latest?cb=20140709021014",
            "https://vignette.wikia.nocookie.net/mlp/images/7/70/Baby_Spike_ID_S9E4.png/revision/latest?cb=20190423232953",
            "https://vignette.wikia.nocookie.net/mlp/images/3/30/Spike_newborn_ID_S1E23.png/revision/latest?cb=20130830145203",
            "https://vignette.wikia.nocookie.net/mlp/images/8/8a/Future_Spike_ID_S9E26.png/revision/latest?cb=20191013014835",
            "https://vignette.wikia.nocookie.net/mlp/images/5/50/Spike_ID_EG.png/revision/latest?cb=20130727075603",
          ],
        },
        {
          id: 8,
          name: "Apple Bloom",
          alias: "Apple Blossom",
          url: "https://mlp.fandom.com/wiki/Apple_Bloom",
          sex: "Female",
          residence: "Sweet Apple Acres",
          occupation:
            "Cutie Mark Crusader\nSchool of Friendship teacher (S9E26)\nSchool of Friendship tutor (S8E12-S9E26)\nStudent (formerly)",
          kind: ["Earth"],
          image: [
            "https://vignette.wikia.nocookie.net/mlp/images/1/1c/Apple_Bloom_ID_S6E4.png/revision/latest?cb=20160411140505",
            "https://vignette.wikia.nocookie.net/mlp/images/d/d3/Apple_Bloom_infant_ID_S2E23.png/revision/latest?cb=20150721214129",
            "https://vignette.wikia.nocookie.net/mlp/images/f/fb/Adult_Apple_Bloom_ID_S9E22.png/revision/latest?cb=20190928155028",
          ],
        },
      ];

      const { getUnicorns } = useUnicornsApi();

      const currentUnicorns = await getUnicorns();

      expect(currentUnicorns).toStrictEqual(expectedUnicorns);
    });
  });
});
