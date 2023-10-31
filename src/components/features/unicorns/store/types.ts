import { Unicorn } from "../../../../types";

interface UnicornContextStructure {
  unicorns: Unicorn[];
  loadUnicorns: (unicorns: Unicorn[]) => void;
  addUnicorn: (unicorn: Unicorn[]) => void;
  deleteUnicorn: (unicorn: Unicorn[]) => void;
  modifyUnicorn: (unicorn: Unicorn[]) => void;
}

export default UnicornContextStructure;
