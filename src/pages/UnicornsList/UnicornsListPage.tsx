import React, { useContext, useEffect } from "react";

import useUnicornsApi from "../../hooks/useUnicornApi";
import UnicornsList from "../../components/UnicornsList/UnicornsList";
import UnicornContext from "../../features/unicorns/store/UnicornContext";

const UnicornListPage = (): React.ReactElement => {
  const { getUnicorns } = useUnicornsApi();
  const { loadUnicorns } = useContext(UnicornContext);

  useEffect(() => {
    (async () => {
      loadUnicorns(await getUnicorns());
    })();
  }, [getUnicorns, loadUnicorns]);

  return (
    <>
      <h1>Unicorns List</h1>
      <UnicornsList />
    </>
  );
};

export default UnicornListPage;
