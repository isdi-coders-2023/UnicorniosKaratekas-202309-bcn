import { useContext, useEffect } from "react";

import unicornMock from "../../data/mockData";
import UnicornContext from "../../features/unicorns/store/UnicornContext";

const UnicornListPage = (): React.ReactElement => {
  const { loadUnicorns } = useContext(UnicornContext);

  useEffect(() => {
    loadUnicorns(unicornMock);
  }, [loadUnicorns]);

  return <h1>Unicorns List</h1>;
};

export default UnicornListPage;
