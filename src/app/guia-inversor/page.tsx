import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "~/components/guide-page/guide-page";
import {
  ACCOUNT_249_CHOCOLATE,
  ACCOUNT_249_PHONE,
  ACCOUNT_249_PHONE_DISPLAY,
  showAccount249ExtraPages,
} from "~/lib/account-overrides/249";
import { ACCOUNT_249_INVERSOR } from "~/lib/account-overrides/249-pages";
import { getSiteUrl } from "~/lib/site-url";

export const metadata: Metadata = {
  title: "Guía para el inversor",
  description: "Cómo invertir en vivienda en Pamplona y Navarra: objetivo, análisis, rentabilidad, financiación, compra y gestión 360° con un único interlocutor.",
  alternates: { canonical: `${getSiteUrl()}/guia-inversor` },
  robots: { index: true, follow: true },
};

/**
 * /guia-inversor — hardcoded page for account 249 (AB Servicios Inmobiliarios).
 * 404s for every other account, so the route is safe to keep in the shared app.
 */
export default function GuiaInversorPage() {
  if (!showAccount249ExtraPages()) notFound();

  return (
    <GuidePage
      content={ACCOUNT_249_INVERSOR}
      phone={ACCOUNT_249_PHONE}
      phoneDisplay={ACCOUNT_249_PHONE_DISPLAY}
      panelColor={ACCOUNT_249_CHOCOLATE}
    />
  );
}
