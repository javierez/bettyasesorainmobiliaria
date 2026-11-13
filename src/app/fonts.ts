import { GeistSans } from "geist/font/sans";
import {
  Montserrat,
  Cormorant_Garamond,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"] });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  montserrat: { loader: montserrat, cssVar: "var(--font-montserrat)" },
  cormorant: { loader: cormorant, cssVar: "var(--font-cormorant)" },
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
