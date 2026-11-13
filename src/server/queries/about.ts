import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "team": [{
  "name": "Beatriz Martínez «Betty»",
  "role": "Asesora inmobiliaria",
  "email": "asesorainmobiliariabetty@gmail.com",
  "phone": "625 625 826",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/website/betty-retrato-hd.jpg"
}],
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/website/betty-retrato-hd.jpg",
  "title": "Sobre Nosotros",
  "values": [{
  "icon": "Handshake",
  "title": "Trato cercano",
  "description": "Atención personalizada y cercana en cada paso, sin tecnicismos."
}, {
  "icon": "BadgeCheck",
  "title": "Transparencia",
  "description": "Tarifas justas y transparentes desde el principio."
}, {
  "icon": "MapPin",
  "title": "Conocimiento local",
  "description": "Especialista en el mercado de Gijón: valora tu vivienda al precio justo según la zona y la demanda."
}, {
  "icon": "Award",
  "title": "Resultados",
  "description": "Resultados rápidos y eficaces, con marketing profesional y negociación experta."
}],
  "content": "Somos Betty Asesora Inmobiliaria, tu agente inmobiliario en Asturias con base en Gijón. Conocemos la ciudad y su mercado, y nos involucramos en cada proceso como si fuera propio. Ya quieras comprar, vender o alquilar una vivienda, te acompañamos con un trato cercano, transparente y profesional en cada paso del camino.",
  "showKPI": false,
  "content2": "Nuestra propuesta es sencilla: acompañarte de principio a fin y buscar la solución que mejor encaja con tus necesidades. Ofrecemos valoración gratuita, fotografía profesional y home staging, apoyo en trámites hipotecarios y asesoramiento legal y financiero, para que tomes decisiones con seguridad y tranquilidad.",
  "services": [{
  "icon": "TrendingUp",
  "title": "Valoración gratuita"
}, {
  "icon": "Home",
  "title": "Venta de viviendas"
}, {
  "icon": "Home",
  "title": "Compra y búsqueda de vivienda"
}, {
  "icon": "Key",
  "title": "Gestión de alquileres"
}, {
  "icon": "Camera",
  "title": "Fotografía profesional y home staging"
}, {
  "icon": "Banknote",
  "title": "Financiación y trámites hipotecarios"
}, {
  "icon": "Scale",
  "title": "Asesoramiento legal y financiero"
}],
  "subtitle": "Tu agente inmobiliario en Asturias",
  "buttonName": "Habla con Betty",
  "originsTitle": "De dónde venimos",
  "originsContent": "Creemos que una operación inmobiliaria no es solo una transacción, sino una decisión de vida. Por eso trabajamos contigo para encontrar la mejor solución, adaptada a tus necesidades. Estamos en Gijón, conocemos cada rincón de la ciudad y te ayudamos a tomar la mejor decisión.",
  "extendedServices": [{
  "icon": "TrendingUp",
  "title": "Valoración gratuita",
  "description": "Tasamos tu piso o casa sin compromiso para fijar un precio competitivo en el mercado."
}, {
  "icon": "Home",
  "title": "Venta de viviendas",
  "description": "Me encargo de todo para que vendas tu casa o piso en Gijón sin preocupaciones: valoración, difusión en portales y redes, visitas, negociación y trámites."
}, {
  "icon": "Home",
  "title": "Compra y búsqueda de vivienda",
  "description": "Estudio de tus necesidades, selección cuidada de inmuebles por ubicación, presupuesto y características, visitas organizadas y acompañamiento hasta la entrega de llaves."
}, {
  "icon": "Key",
  "title": "Gestión de alquileres",
  "description": "Publicación del anuncio, búsqueda de inquilinos solventes, contrato personalizado y gestión de cobros y seguimiento durante todo el arrendamiento."
}, {
  "icon": "Camera",
  "title": "Fotografía profesional y home staging",
  "description": "Reportaje fotográfico de calidad, home staging y visitas virtuales para que tu vivienda luzca en su mejor versión."
}, {
  "icon": "Banknote",
  "title": "Financiación y trámites hipotecarios",
  "description": "Financiación a medida y colaboración con entidades bancarias para facilitar tu hipoteca."
}, {
  "icon": "Scale",
  "title": "Asesoramiento legal y financiero",
  "description": "Orientación sobre impuestos, herencias, donaciones o transmisiones patrimoniales, y coordinación con notaría, registros y asesoría jurídica."
}],
  "aboutSectionTitle": "Nuestra Misión",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/website/despacho-calido.jpg",
  "nosotrosPageTitle": "Sobre Nosotros",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/270/website/servicios-hero.jpg",
  "servicesPageTitle": "Nuestros Servicios",
  "maxServicesDisplayed": 6,
  "nosotrosPageSubtitle": "Conoce a tu agente inmobiliario en Gijón: cercanía, transparencia y un profundo conocimiento de la ciudad.",
  "servicesPageSubtitle": "Todo lo que necesitas para comprar, vender o alquilar tu vivienda en Gijón, con un acompañamiento completo.",
  "servicesSectionTitle": "Nuestros Servicios"
} as AboutProps | null;
}
