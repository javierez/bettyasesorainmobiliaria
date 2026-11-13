import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "~/components/guide-page/guide-page";
import {
  ACCOUNT_249_CHOCOLATE,
  ACCOUNT_249_PHONE,
  ACCOUNT_249_PHONE_DISPLAY,
  showAccount249ExtraPages,
} from "~/lib/account-overrides/249";
import { ACCOUNT_249_ESTUDIANTES } from "~/lib/account-overrides/249-pages";
import { getSiteUrl } from "~/lib/site-url";

export const metadata: Metadata = {
  title: "Pisos para estudiantes en Pamplona",
  description: "Pisos y habitaciones para estudiantes en Pamplona, cerca de la Universidad de Navarra y la UPNA. Contratos por curso y atención durante todo el año.",
  alternates: { canonical: `${getSiteUrl()}/estudiantes` },
  robots: { index: true, follow: true },
};

/**
 * /estudiantes — hardcoded page for account 249 (AB Servicios Inmobiliarios).
 * 404s for every other account, so the route is safe to keep in the shared app.
 */
export default function EstudiantesPage() {
  if (!showAccount249ExtraPages()) notFound();

  return (
    <GuidePage
      content={ACCOUNT_249_ESTUDIANTES}
      phone={ACCOUNT_249_PHONE}
      phoneDisplay={ACCOUNT_249_PHONE_DISPLAY}
      panelColor={ACCOUNT_249_CHOCOLATE}
    />
  );
}
