import { PropsWithChildren, useMemo, useState } from "react";
import { Unicorn } from "../../../../types";
import UnicornContext from "./UnicornContext";

const UnicornProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [unicorns] = useState<Unicorn[]>([]);

  const unicornMemo = useMemo(() => ({ unicorns }), [unicorns]);

  return (
    <UnicornContext.Provider value={unicornMemo}>
      {children}
    </UnicornContext.Provider>
  );
};

export default UnicornProviderWrapper;
