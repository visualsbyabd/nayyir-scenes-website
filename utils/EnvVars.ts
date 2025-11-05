import { Url, parse } from "url"; 
// ^ Import both the type and the function

const phone: string  = process.env.NEXT_PUBLIC_PHONE!;
const mail: string  = process.env.NEXT_PUBLIC_MAIL!;
const facebook: Url = parse(process.env.NEXT_PUBLIC_FACEBOOK ?? "https://FACEBOOK.com")!;
const whatsapp: string = process.env.NEXT_PUBLIC_WHATSAPP!;
const instagram: Url = parse(process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://INSTAGRAM.com")!;
const tiktok: Url = parse(process.env.NEXT_PUBLIC_TIKTOK ?? "https://TIKTOK.com")!;
const linkedin: Url = parse(process.env.NEXT_PUBLIC_LINKEDIN ?? "https://LINKEDIN.com")!;

export { phone, mail, facebook, whatsapp, instagram, tiktok, linkedin };