import { useContext, useEffect } from "react";
import UnicornContext from "../../components/features/unicorns/store/UnicornContext";
import unicornMock from "../../data/mockData";

const UnicornListPage = (): React.ReactElement => {
  const { loadUnicorns } = useContext(UnicornContext);

  useEffect(() => {
    loadUnicorns(unicornMock);
  }, [loadUnicorns]);

  return <h1>Unicorns List</h1>;
};

export default UnicornListPage;
