/** Content of a hardcoded per-account guide page, rendered by <GuidePage />. */
export interface GuidePageContent {
  hero: {
    eyebrow: string;
    /** Plain part of the title. */
    title: string;
    /** Part shown in italics after `title` (brand serif accent). */
    titleAccent: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    paragraphs: string[];
  };
  /** Short cards: who it is for / what you get. */
  highlights: {
    title: string;
    items: { icon: string; title: string; text: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  /** Optional dark panel next to a photo (formula, checklist…). */
  feature?: {
    eyebrow: string;
    title: string;
    lines: string[];
    note?: string;
    image: string;
    imageAlt: string;
  };
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    text: string;
    buttonText: string;
    /** Prefilled message for the WhatsApp button. */
    whatsappText: string;
  };
}
