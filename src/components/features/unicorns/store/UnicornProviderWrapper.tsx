import { PropsWithChildren, useCallback, useState } from "react";
import { Unicorn } from "../../../../types";
import UnicornContext from "./UnicornContext";

const UnicornProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [unicorns, setUnicorns] = useState<Unicorn[]>([]);

  const loadUnicorns = useCallback((uniconrs: Unicorn[]) => {
    setUnicorns(uniconrs);
  }, []);

  return (
    <UnicornContext.Provider value={{ unicorns, loadUnicorns }}>
      {children}
    </UnicornContext.Provider>
  );
};

export default UnicornProviderWrapper;
