import { Unicorn } from "../../../../types";

interface UnicornContextStructure {
  unicorns: Unicorn[];
  loadUnicorns: (unicorn: Unicorn[]) => void;
}

export default UnicornContextStructure;
