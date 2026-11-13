// Hardcoded pages for account 249 (AB Servicios Inmobiliarios, Pamplona):
// /guia-inversor, /estudiantes and /alquiler-seguro. Lives in code (not DB)
// so admin UI edits to website_config can't wipe it. Content per page lives in
// 249-pages.ts; the shared layout is <GuidePage />.

export const ACCOUNT_249_ID = "249";

/**
 * True when we are rendering for this account.
 *
 * `accountId` is only passed by the CRM preview, which renders an ARBITRARY
 * account from this one deployment. Omitted everywhere else, where the
 * deployment's own env var is the right answer.
 */
export function isAccount249(accountId?: bigint | string): boolean {
  const id = accountId?.toString() ?? process.env.NEXT_PUBLIC_ACCOUNT_ID;
  return id === ACCOUNT_249_ID;
}

/**
 * Master switch for the three extra pages (/guia-inversor, /estudiantes,
 * /alquiler-seguro). Hidden until the client is shown and quoted for them:
 * while false they 404 and stay out of the navbar and sitemap.
 */
const ACCOUNT_249_EXTRA_PAGES_ENABLED = false;

/** True when the extra pages should render (and appear in nav/sitemap). */
export function showAccount249ExtraPages(accountId?: bigint | string): boolean {
  return ACCOUNT_249_EXTRA_PAGES_ENABLED && isAccount249(accountId);
}

/** Photos from the agency's brand manual, uploaded to the EU website bucket. */
const ASSET_BASE =
  "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/249/website";

export const ACCOUNT_249_IMAGES = {
  inversor: `${ASSET_BASE}/guia-inversor.jpg`,
  inversorDetail: `${ASSET_BASE}/guia-inversor-detalle.jpg`,
  estudiantes: `${ASSET_BASE}/estudiantes.jpg`,
  estudiantesDetail: `${ASSET_BASE}/estudiantes-detalle.jpg`,
  alquilerSeguro: `${ASSET_BASE}/alquiler-seguro.jpg`,
  alquilerSeguroDetail: `${ASSET_BASE}/alquiler-seguro-detalle.jpg`,
} as const;

/** Extra navbar entries, in the order they render (after Alquiler). */
export const ACCOUNT_249_NAV_PAGES = [
  { href: "/guia-inversor", label: "Guía del inversor" },
  { href: "/estudiantes", label: "Estudiantes" },
  { href: "/alquiler-seguro", label: "Alquiler seguro" },
] as const;

export const ACCOUNT_249_PHONE = "+34606841009";
export const ACCOUNT_249_PHONE_DISPLAY = "606 84 10 09";

/** "Chocolate" from the brand manual — dark panels on the guide pages. */
export const ACCOUNT_249_CHOCOLATE = "#36251C";
