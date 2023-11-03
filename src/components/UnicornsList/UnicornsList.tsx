import { useContext } from "react";
import { Unicorn } from "../../features/unicorns/store/types";
import UnicornContext from "../../features/unicorns/store/UnicornContext";
import UnicornCard from "../UnicornCard/UnicornCard";
import UnicornsListStyled from "./UnicornsListStyled";

const UnicornsList = (): React.ReactElement => {
  const { unicorns } = useContext(UnicornContext);

  return (
    <UnicornsListStyled title="unicorns-list">
      {unicorns.map((unicorn: Unicorn) => (
        <li title={unicorn.name} key={unicorn.id}>
          <UnicornCard unicorn={unicorn} />
        </li>
      ))}
    </UnicornsListStyled>
  );
};

export default UnicornsList;
