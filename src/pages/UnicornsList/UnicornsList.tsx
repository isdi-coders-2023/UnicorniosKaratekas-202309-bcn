import { useContext, useEffect } from "react";

import unicorns from "../../data/unicorns";
import UnicornContext from "../../features/unicorns/store/UnicornContext";

const UnicornListPage = (): React.ReactElement => {
  const { loadUnicorns } = useContext(UnicornContext);

  useEffect(() => {
    loadUnicorns(unicorns);
  }, [loadUnicorns]);

  return <h1>Unicorns List</h1>;
};

export default UnicornListPage;
