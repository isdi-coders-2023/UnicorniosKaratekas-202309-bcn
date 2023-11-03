import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { Unicorn } from "./types";
import UnicornContext from "./UnicornContext";

const UnicornProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [unicorns, setUnicorns] = useState<Unicorn[]>([]);

  const loadUnicorns = useCallback((unicorns: Unicorn[] | undefined) => {
    setUnicorns(unicorns as Unicorn[]);
  }, []);

  const unicornsProvider = useMemo(
    () => ({ unicorns, loadUnicorns }),
    [unicorns, loadUnicorns],
  );

  return (
    <UnicornContext.Provider value={unicornsProvider}>
      {children}
    </UnicornContext.Provider>
  );
};

export default UnicornProviderWrapper;
