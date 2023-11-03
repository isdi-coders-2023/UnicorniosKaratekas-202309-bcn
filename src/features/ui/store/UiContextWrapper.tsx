import { PropsWithChildren } from "react";
import UiContext from "./UiContext";

const UiContextWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  return <UiContext.Provider value={{}}>{children}</UiContext.Provider>;
};

export default UiContextWrapper;
