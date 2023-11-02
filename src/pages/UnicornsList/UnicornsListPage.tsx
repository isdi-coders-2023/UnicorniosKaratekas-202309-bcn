import { useEffect } from "react";

import useUnicornsApi from "../../hooks/useUnicornApi";
import UnicornsList from "../../components/UnicornsList/UnicornsList";

const UnicornListPage = (): React.ReactElement => {
  const { getUnicorns } = useUnicornsApi();

  useEffect(() => {
    (async () => {
      await getUnicorns();
    })();
  }, [getUnicorns]);

  return (
    <>
      <h1>Unicorns List</h1>
      <UnicornsList />
    </>
  );
};

export default UnicornListPage;
