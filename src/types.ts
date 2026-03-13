export interface VerbEntry {
  verb: string;
  phonetic: string;
  meanings: string[];
  forms: {
    past: string;
    pastParticiple: string;
    presentParticiple: string;
    thirdPerson: string;
  };
  examples: string[];
  passage: {
    text: string;
    source: string;
    year?: number;
  };
  etymology?: {
    roots: string;
    origin: string;
    mnemonic: string;
  };
  cognates?: { word: string; meaning: string }[];
  synonyms?: { word: string; nuance: string; formality: string }[];
  collocations?: { pattern: string; example: string }[];
  layers?: { level: string; meaning: string; example: string }[];
}
