import { useContext } from "react";
import UnicornContext from "../../features/unicorns/store/UnicornContext";
import UnicornCard from "../UnicornCard/UnicornCard";
import { Unicorn } from "../../features/unicorns/store/types";
import UnicornsListStyled from "./UnicornsListStyled";

const UnicornsList = (): React.ReactElement => {
  const { unicorns } = useContext(UnicornContext);

  return (
    <UnicornsListStyled>
      {unicorns.map((unicorn: Unicorn) => (
        <li key={unicorn.id}>
          <UnicornCard unicorn={unicorn} />
        </li>
      ))}
    </UnicornsListStyled>
  );
};

export default UnicornsList;
