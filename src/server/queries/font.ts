
import type { FontProps } from "../../lib/data";

export const getFontProps = (_accountIdArg?: bigint): FontProps | null => {
  return {
  "sansFamily": "montserrat",
  "headingFamily": "cormorant"
} as FontProps | null;
}
