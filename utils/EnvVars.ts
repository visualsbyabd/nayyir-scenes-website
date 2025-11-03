const phone: string | undefined = process.env.NEXT_PUBLIC_PHONE;
const mail: string | undefined = process.env.NEXT_PUBLIC_MAIL;
const facebook: string | undefined = process.env.NEXT_PUBLIC_FACEBOOK;
const whatsapp: string | undefined = process.env.NEXT_PUBLIC_WHATSAPP;
const instagram: string | undefined = process.env.NEXT_PUBLIC_INSTAGRAM;
const tiktok: string | undefined = process.env.NEXT_PUBLIC_TIKTOK;
const linkedin: string | undefined = process.env.NEXT_PUBLIC_LINKEDIN;

console.log( phone, mail, facebook, whatsapp, instagram, tiktok, linkedin );
export { phone, mail, facebook, whatsapp, instagram, tiktok, linkedin };
