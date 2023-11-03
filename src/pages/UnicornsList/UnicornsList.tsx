import { useContext, useEffect } from "react";
import UnicornContext from "../../features/unicorns/store/UnicornContext";
import { Unicorn } from "../../features/unicorns/store/types";
import UnicornCard from "../../components/UnicornCard/UnicornCard";
import useUnicornsApi from "../../hooks/useUnicornApi";

const UnicornListPage = (): React.ReactElement => {
  const { loadUnicorns } = useContext(UnicornContext);
  const { getUnicorns } = useUnicornsApi();
  const unicornCardMock: Unicorn = {
    id: 1,
    name: "Twilight Sparkle",
    alias: "Princess Twilight Sparkle",
    url: "https://mlp.fandom.com/wiki/Twilight_Sparkle",
    sex: "Female",
    residence:
      "Canterlot (S1E1, S9E26)\nCastle of Friendship, Ponyville (seasons 5-9)\nGolden Oak Library, Ponyville (seasons 1-4)\nCrystal Princess Palace (toy line)",
    occupation:
      "Ruler of Equestria (S9E26)\nFounder/leader of the Council of Friendship (S9E26)\nRuler of the Castle of Friendship (S4E26-S9E26)\nFounder/principal of the School of Friendship (S8E1-S9E20)\nStarlight Glimmer's teacher (S5E26-S7E1)\nGolden Oak Library librarian (seasons 1-4)\nPrincess Celestia's student (seasons 1-3)\nStudent at Celestia's School for Gifted Unicorns (formerly)",
    kind: ["Alicorn", "Unicorn", "Human"],
    image: [
      "https://vignette.wikia.nocookie.net/mlp/images/b/bc/Princess_Twilight_Sparkle_ID_S4E26.png/revision/latest?cb=20160207045127",
      "https://vignette.wikia.nocookie.net/mlp/images/6/6c/Twilight_S2E25_cropped.png/revision/latest?cb=20160315121005",
      "https://vignette.wikia.nocookie.net/mlp/images/9/97/Twilight_filly_crop_S2E25.png/revision/latest?cb=20140108015837",
      "https://vignette.wikia.nocookie.net/mlp/images/1/18/Twilight_Sparkle_infant_ID_MLPS2.png/revision/latest?cb=20190823095629",
      "https://vignette.wikia.nocookie.net/mlp/images/e/ef/Future_Twilight_Sparkle_ID_S9E26.png/revision/latest?cb=20191013013633",
      "https://vignette.wikia.nocookie.net/mlp/images/0/0c/Twilight_Sparkle_human_at_lockers_EG.png/revision/latest?cb=20141211040145",
    ],
  };

  useEffect(() => {
    (async () => {
      loadUnicorns(await getUnicorns());
    })();
  }, [getUnicorns, loadUnicorns]);
  return (
    <>
      <h1>Unicorns List</h1>
      <UnicornCard unicorn={unicornCardMock} />
    </>
  );
};

export default UnicornListPage;