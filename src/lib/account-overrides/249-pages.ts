// Content of account 249's three extra pages. Copy written from the agency's
// brand manual (tone: cercano, experto, elegante; "un único interlocutor").
// Deliberately no prices, tax rates or legal figures: those change and the
// agency has not given us any.

import type { GuidePageContent } from "~/components/guide-page/types";
import { ACCOUNT_249_IMAGES as IMG } from "~/lib/account-overrides/249";

export const ACCOUNT_249_INVERSOR: GuidePageContent = {
  hero: {
    eyebrow: "Guía para el inversor",
    title: "Invertir en Pamplona con",
    titleAccent: "visión patrimonial.",
    subtitle:
      "Una inversión inmobiliaria no empieza con un piso: empieza con un objetivo. Te acompañamos desde el análisis hasta la gestión del inmueble, con un único interlocutor experto.",
    image: IMG.inversor,
    imageAlt: "Vivienda contemporánea con jardín y luz natural",
  },
  intro: {
    title: "Cómo trabajamos con inversores",
    paragraphs: [
      "Cada inversor busca algo distinto: una renta estable, diversificar su patrimonio, comprar para reformar o dejar un legado a su familia. Por eso no te enseñamos un catálogo: primero escuchamos, después analizamos y solo entonces proponemos.",
      "Conocemos el mercado de Pamplona y Navarra desde hace más de 50 años. Eso nos permite valorar cada barrio, cada tipo de inmueble y cada perfil de inquilino con datos reales, no con promesas.",
    ],
  },
  highlights: {
    title: "Qué te ofrecemos",
    items: [
      {
        icon: "target",
        title: "Estrategia a medida",
        text: "Definimos contigo el objetivo, el plazo y el riesgo que quieres asumir.",
      },
      {
        icon: "lock",
        title: "Oportunidades discretas",
        text: "Acceso a inmuebles que no siempre llegan a los portales.",
      },
      {
        icon: "trending-up",
        title: "Informes de rentabilidad",
        text: "Números claros antes de decidir: ingresos, gastos y retorno esperado.",
      },
      {
        icon: "briefcase",
        title: "Gestión delegada 360°",
        text: "Reforma, alquiler, inquilinos e incidencias, sin que tengas que intervenir.",
      },
    ],
  },
  steps: {
    eyebrow: "Paso a paso",
    title: "El camino de una buena inversión",
    items: [
      {
        title: "Define tu objetivo",
        text: "Renta mensual, revalorización a largo plazo o una combinación de las dos. Hablamos de presupuesto, plazo y del papel que tendrá el inmueble en tu patrimonio.",
      },
      {
        title: "Analizamos el mercado",
        text: "Zonas con demanda real de alquiler, precios de compra y de renta, perfil del inquilino y evolución prevista del barrio.",
      },
      {
        title: "Calculamos la rentabilidad",
        text: "Rentabilidad bruta y neta, con todos los gastos: impuestos de compra, notaría, registro, reforma, comunidad, IBI y seguros.",
      },
      {
        title: "Financiación",
        text: "Nuestro broker hipotecario estudia tu caso y negocia con las entidades para conseguir las mejores condiciones.",
      },
      {
        title: "Compra con seguridad jurídica",
        text: "Revisamos la documentación, la situación registral y las cargas, y te acompañamos hasta la firma en notaría.",
      },
      {
        title: "Ponemos el inmueble en valor",
        text: "Reforma, interiorismo y fotografía profesional para que el inmueble se alquile antes y mejor.",
      },
      {
        title: "Alquilamos y gestionamos",
        text: "Selección de inquilinos, seguro de impago, cobro de rentas e incidencias. Tú recibes un informe; nosotros nos ocupamos del resto.",
      },
    ],
  },
  feature: {
    eyebrow: "Las cuentas claras",
    title: "Cómo se mide la rentabilidad",
    lines: [
      "Rentabilidad bruta = renta anual ÷ precio de compra × 100",
      "Rentabilidad neta = (renta anual − gastos anuales) ÷ (precio de compra + gastos de compra) × 100",
    ],
    note: "La neta es la que de verdad importa. En el informe que te preparamos aparecen todos los gastos, también los que se suelen olvidar.",
    image: IMG.inversorDetail,
    imageAlt: "Mesa de trabajo con cuaderno y pluma",
  },
  faqs: [
    {
      question: "¿Qué tipo de inmueble es mejor para empezar?",
      answer:
        "Depende de tu objetivo. Un piso de dos o tres habitaciones en una zona con demanda estable suele ser una primera inversión sólida, pero lo decidimos juntos después de analizar tu caso.",
    },
    {
      question: "¿Tengo que ocuparme yo del alquiler?",
      answer:
        "No. Podemos gestionar el inmueble por completo: selección del inquilino, contrato, seguro de impago, cobros e incidencias.",
    },
    {
      question: "¿Trabajáis con inversores de fuera de Navarra?",
      answer:
        "Sí. Muchos de nuestros clientes invierten en Pamplona sin vivir aquí. Te mantenemos informado en cada paso y puedes firmar con poderes si lo necesitas.",
    },
    {
      question: "¿Cuánto cuesta el primer estudio?",
      answer:
        "La primera reunión para conocer tu objetivo no tiene coste. A partir de ahí te explicamos con transparencia qué incluye cada servicio.",
    },
  ],
  cta: {
    title: "Hablemos de tu inversión",
    text: "Cuéntanos qué buscas y te preparamos un primer análisis, sin compromiso.",
    buttonText: "Solicitar asesoramiento",
    whatsappText: "Hola, me interesa vuestra guía para el inversor y me gustaría recibir asesoramiento.",
  },
};

export const ACCOUNT_249_ESTUDIANTES: GuidePageContent = {
  hero: {
    eyebrow: "Estudiantes",
    title: "Tu casa en Pamplona",
    titleAccent: "durante el curso.",
    subtitle:
      "Pisos y habitaciones para estudiantes cerca de la Universidad de Navarra, la UPNA y los centros de formación de la ciudad. Sin sorpresas y con alguien al otro lado del teléfono.",
    image: IMG.estudiantes,
    imageAlt: "Escritorio luminoso con cuaderno y teléfono",
  },
  intro: {
    title: "Pensado para estudiantes y familias",
    paragraphs: [
      "Mudarse a otra ciudad para estudiar es un gran paso, para el estudiante y para su familia. Queremos que encontrar piso sea la parte fácil: viviendas revisadas, contratos claros y un trato cercano durante todo el curso.",
      "Si eres propietario, también te ayudamos a alquilar tu vivienda a estudiantes con todas las garantías.",
    ],
  },
  highlights: {
    title: "Qué encontrarás",
    items: [
      {
        icon: "map-pin",
        title: "Buenas zonas",
        text: "Viviendas bien comunicadas con los campus y el centro.",
      },
      {
        icon: "calendar",
        title: "Contratos por curso",
        text: "Duración adaptada al calendario académico, de septiembre a junio.",
      },
      {
        icon: "file-text",
        title: "Todo por escrito",
        text: "Inventario, condiciones y gastos claros desde el primer día.",
      },
      {
        icon: "phone",
        title: "Atención durante el curso",
        text: "Si algo se estropea, nos llamas y lo gestionamos.",
      },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    title: "De la búsqueda a la entrega de llaves",
    items: [
      {
        title: "Cuéntanos qué necesitas",
        text: "Centro de estudios, presupuesto, fechas y si buscas piso completo o habitación.",
      },
      {
        title: "Te proponemos opciones",
        text: "Seleccionamos viviendas que encajan contigo y organizamos las visitas, también por videollamada si aún no estás en Pamplona.",
      },
      {
        title: "Reservas la vivienda",
        text: "Te explicamos el contrato, la fianza y los gastos incluidos antes de firmar nada.",
      },
      {
        title: "Entrada y curso tranquilo",
        text: "Te entregamos las llaves con el inventario firmado y estamos disponibles durante todo el curso.",
      },
    ],
  },
  feature: {
    eyebrow: "Documentación",
    title: "Qué te pediremos",
    lines: [
      "DNI, NIE o pasaporte del estudiante",
      "Matrícula o carta de admisión del centro",
      "Datos de la persona que avala (normalmente, padres o tutores)",
      "Justificante de ingresos del avalista",
    ],
    note: "Si vienes de fuera de España, te indicamos qué documentos equivalentes sirven.",
    image: IMG.estudiantesDetail,
    imageAlt: "Rincón de lectura junto a una ventana",
  },
  faqs: [
    {
      question: "¿Cuándo conviene empezar a buscar?",
      answer:
        "Cuanto antes, mejor: la demanda se concentra entre mayo y septiembre. Escríbenos en cuanto tengas claro dónde vas a estudiar.",
    },
    {
      question: "¿Puedo alquilar solo una habitación?",
      answer:
        "Sí, cuando tenemos disponibilidad. Dinos si prefieres piso completo, compartido o habitación y te avisamos de lo que encaje.",
    },
    {
      question: "¿Los gastos están incluidos?",
      answer:
        "Depende de cada vivienda. Siempre te lo indicamos por escrito antes de reservar, para que sepas cuánto pagarás cada mes.",
    },
    {
      question: "Soy propietario, ¿me ayudáis a alquilar a estudiantes?",
      answer:
        "Sí. Seleccionamos a los inquilinos, pedimos avalista, preparamos el contrato por curso y nos ocupamos de las incidencias.",
    },
  ],
  cta: {
    title: "¿Buscas piso para el próximo curso?",
    text: "Déjanos tus datos y te enviamos las opciones disponibles.",
    buttonText: "Quiero que me avisen",
    whatsappText: "Hola, soy estudiante y busco piso en Pamplona para el próximo curso.",
  },
};

export const ACCOUNT_249_ALQUILER_SEGURO: GuidePageContent = {
  hero: {
    eyebrow: "Alquiler seguro",
    title: "Alquila tu vivienda",
    titleAccent: "con total tranquilidad.",
    subtitle:
      "Seleccionamos al inquilino, aseguramos el cobro de la renta y gestionamos cada incidencia. Tu vivienda, protegida; tú, sin preocupaciones.",
    image: IMG.alquilerSeguro,
    imageAlt: "Salón luminoso en tonos cálidos",
  },
  intro: {
    title: "Tu vivienda merece el mismo cuidado que pondríamos en la nuestra",
    paragraphs: [
      "Alquilar no debería darte miedo. El problema no es alquilar: es hacerlo sin método. Por eso aplicamos un proceso riguroso que empieza mucho antes de firmar el contrato y sigue durante todo el alquiler.",
      "Con un único interlocutor experto, sabes en todo momento quién cuida de tu vivienda y en qué situación está.",
    ],
  },
  highlights: {
    title: "Qué incluye",
    items: [
      {
        icon: "user-check",
        title: "Selección rigurosa",
        text: "Estudiamos la solvencia y el perfil de cada candidato antes de proponértelo.",
      },
      {
        icon: "shield-check",
        title: "Seguro de impago",
        text: "Protección frente a rentas impagadas y defensa jurídica, según póliza.",
      },
      {
        icon: "wrench",
        title: "Gestión de incidencias",
        text: "Averías, reparaciones y comunicación con el inquilino: lo coordinamos nosotros.",
      },
      {
        icon: "file-text",
        title: "Contrato y fianza",
        text: "Contrato redactado a medida, inventario fotográfico y fianza en regla.",
      },
    ],
  },
  steps: {
    eyebrow: "Nuestro método",
    title: "Así protegemos tu alquiler",
    items: [
      {
        title: "Valoramos tu vivienda",
        text: "Te decimos la renta que puede conseguir y qué mejoras merecen la pena.",
      },
      {
        title: "La preparamos y la presentamos",
        text: "Fotografía profesional y anuncio cuidado para atraer al inquilino adecuado.",
      },
      {
        title: "Seleccionamos al inquilino",
        text: "Comprobamos ingresos, estabilidad laboral, referencias y registros de morosidad.",
      },
      {
        title: "Firmamos con garantías",
        text: "Contrato, inventario, fianza y alta del seguro de impago antes de entregar las llaves.",
      },
      {
        title: "Gestionamos el día a día",
        text: "Cobro de rentas, incidencias, renovaciones y salida del inquilino. Te informamos de todo.",
      },
    ],
  },
  feature: {
    eyebrow: "Lo que revisamos",
    title: "Antes de proponerte un inquilino",
    lines: [
      "Nóminas, contrato de trabajo o declaración de la renta",
      "Relación entre ingresos y renta mensual",
      "Consulta en ficheros de morosidad",
      "Referencias de alquileres anteriores",
      "Avalista cuando el perfil lo requiere",
    ],
    image: IMG.alquilerSeguroDetail,
    imageAlt: "Apretón de manos sobre una mesa de mármol",
  },
  faqs: [
    {
      question: "¿Qué pasa si el inquilino deja de pagar?",
      answer:
        "Si la vivienda tiene seguro de impago, la aseguradora cubre las rentas y la defensa jurídica en los términos de la póliza. Nosotros gestionamos el proceso por ti.",
    },
    {
      question: "¿Puedo elegir yo al inquilino?",
      answer:
        "Sí. Te presentamos los candidatos que superan nuestro estudio con un informe de cada uno, y la decisión final es tuya.",
    },
    {
      question: "¿Tengo que estar disponible para las averías?",
      answer:
        "No. El inquilino nos avisa a nosotros, coordinamos la reparación y te informamos antes de cualquier gasto.",
    },
    {
      question: "¿Y si ya tengo la vivienda alquilada?",
      answer:
        "Podemos hacernos cargo de la gestión de un alquiler en curso. Revisamos el contrato y te proponemos cómo protegerlo mejor.",
    },
  ],
  cta: {
    title: "Alquila sin preocupaciones",
    text: "Te hacemos una valoración gratuita de la renta de tu vivienda.",
    buttonText: "Solicitar valoración",
    whatsappText: "Hola, me interesa vuestro servicio de alquiler seguro para mi vivienda.",
  },
};
