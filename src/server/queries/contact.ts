

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": false,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Gijón",
  "address": {
  "street": "Plaza Humedal, 1, 3º E",
  "city": "Gijón",
  "state": "Asturias",
  "country": "España"
},
  "phoneNumbers": {
  "main": "625 625 826"
},
  "emailAddresses": {
  "info": "asesorainmobiliariabetty@gmail.com"
},
  "scheduleInfo": {
  "weekdays": "",
  "saturday": "",
  "sunday": ""
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=Plaza%20Humedal%2C%201%2C%203%C2%BA%20E%2C%20Gij%C3%B3n%2C%20Asturias%2C%2033206",
  "isDefault": true
}]
} as ContactProps | null;
}

