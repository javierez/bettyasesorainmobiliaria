

export const getLogo = (_accountIdArg?: bigint): string | null => {
  return "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/branding/logo_2026.png" as string | null;
}

/**
 * Icono cuadrado de la pestaña (`website_config.favicon`). El logo suele ser
 * apaisado y a 16 px queda en una raya invisible (grupomarinccm.com), así que
 * cuando hay favicon propio manda él.
 */
export const getFavicon = (_accountIdArg?: bigint): string | null => {
  return "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/branding/favicon_2026.png" as string | null;
}
