
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Beatriz Martínez Ordóñez",
  "description": "Betty Asesora Inmobiliaria: tu agente inmobiliario en Gijón y Asturias. Compra, venta y alquiler con trato cercano y transparente.",
  "socialLinks": {
  "facebook": "https://www.facebook.com/profile.php?id=100084804832268",
  "instagram": "https://www.instagram.com/bettytuasesora"
},
  "officeLocations": [{
  "name": "Gijón",
  "address": ["Plaza Humedal, 1, 3º E", "Gijón, Asturias"],
  "phone": "625 625 826",
  "email": "asesorainmobiliariabetty@gmail.com"
}],
  "copyright": "© 2026 Betty Asesora Inmobiliaria. Todos los derechos reservados."
} as FooterProps | null;
}
