

export type SocialLink = {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok";
  url: string;
  previewImage?: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [{
  "platform": "facebook",
  "url": "https://www.facebook.com/profile.php?id=100084804832268",
  "previewImage": undefined
}, {
  "platform": "instagram",
  "url": "https://www.instagram.com/bettytuasesora",
  "previewImage": undefined
}] as SocialLink[];
}