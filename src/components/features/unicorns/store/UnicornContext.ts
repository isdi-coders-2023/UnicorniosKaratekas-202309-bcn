import { createContext } from "react";
import UnicornContextStructure from "./types";

const UnicornContext = createContext<UnicornContextStructure>(
  {} as UnicornContextStructure,
);

export default UnicornContext;
