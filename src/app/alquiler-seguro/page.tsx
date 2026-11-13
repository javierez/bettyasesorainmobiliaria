import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "~/components/guide-page/guide-page";
import {
  ACCOUNT_249_CHOCOLATE,
  ACCOUNT_249_PHONE,
  ACCOUNT_249_PHONE_DISPLAY,
  showAccount249ExtraPages,
} from "~/lib/account-overrides/249";
import { ACCOUNT_249_ALQUILER_SEGURO } from "~/lib/account-overrides/249-pages";
import { getSiteUrl } from "~/lib/site-url";

export const metadata: Metadata = {
  title: "Alquiler seguro",
  description: "Alquila tu vivienda en Pamplona con selección rigurosa de inquilinos, seguro de impago y gestión completa de incidencias.",
  alternates: { canonical: `${getSiteUrl()}/alquiler-seguro` },
  robots: { index: true, follow: true },
};

/**
 * /alquiler-seguro — hardcoded page for account 249 (AB Servicios Inmobiliarios).
 * 404s for every other account, so the route is safe to keep in the shared app.
 */
export default function AlquilerSeguroPage() {
  if (!showAccount249ExtraPages()) notFound();

  return (
    <GuidePage
      content={ACCOUNT_249_ALQUILER_SEGURO}
      phone={ACCOUNT_249_PHONE}
      phoneDisplay={ACCOUNT_249_PHONE_DISPLAY}
      panelColor={ACCOUNT_249_CHOCOLATE}
    />
  );
}
