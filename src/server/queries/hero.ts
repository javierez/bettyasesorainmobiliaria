import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Gijón"] as string[];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Tu agente inmobiliario en Asturias",
  "subtitle": "Asesora inmobiliaria en Gijón. Compra, venta y alquiler de viviendas con un trato cercano, transparente y profesional.",
  "contactButton": "Valoración gratuita",
  "backgroundType": "image",
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/website/hero.jpg",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/website/hero.jpg",
  "type": "image"
}],
  "backgroundVideo": "",
  "findPropertyButton": "Ver inmuebles"
} as HeroProps | null;
}
