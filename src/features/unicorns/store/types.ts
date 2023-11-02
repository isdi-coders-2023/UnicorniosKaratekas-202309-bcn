export interface UnicornContextStructure {
  unicorns: Unicorn[];
  loadUnicorns: (unicorn: Unicorn[]) => void;
}

export interface Unicorn {
  id: number;
  name: string;
  alias: string;
  url: string;
  sex: string;
  residence: string;
  occupation: string;
  kind: string[];
  image: string[];
}
