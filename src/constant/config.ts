import { TFormData } from '@/app/page';

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000';

export const LIST_PAKET = [
  {
    value: 'Bronze Wedding',
  },
  {
    value: 'Silver Wedding',
  },
  {
    value: 'Platinum wedding',
  },
  {
    value: 'Gold wedding',
  },
  {
    value: 'Diamond wedding',
  },
  {
    value: 'Bronze Engagement',
  },
  {
    value: 'Silver Engagement',
  },
  {
    value: 'Platinum Engagement',
  },
  {
    value: 'Bronze Outdoor',
  },
  {
    value: 'Silver Outdoor',
  },
  {
    value: 'Platinum Outdoor',
  },
  {
    value: 'Gold Outdoor',
  },
  {
    value: 'Bronze Indoor',
  },
  {
    value: 'Silver Indoor',
  },
  {
    value: 'Platinum Indoor',
  },
  {
    value: 'All in Package Photo & Video',
  },
];

export const ALL_IN_PACKAGES = [
  {
    value: 'Wedding',
  },
  {
    value: 'Akad Only',
  },
  {
    value: 'Engagement',
  },
  {
    value: 'Postwedding',
  },
  {
    value: 'Bundling 1 (Engagement & Wedding)',
  },
  {
    value: 'Bundling 2 (Siraman, Engagement & Wedding)',
  },
];

export const BUDGET_RANGE = [
  {
    value: '< 5 Juta',
  },
  {
    value: '10 - 15 Juta',
  },
  {
    value: '15 - 20 Juta',
  },
  {
    value: '> 20 Juta',
  },
];

export const FIND_US = [
  {
    value: 'Facebook',
  },
  {
    value: 'Instagram',
  },
  {
    value: 'Twitter',
  },
  {
    value: 'Tiktok',
  },
  {
    value: 'Youtube',
  },
  {
    value: 'Google',
  },
  {
    value: 'Teman / Keluarga / Saudara',
  },
  {
    value: 'Pameran',
  },
  {
    value: 'Lainnya',
  },
];

export const parseMessage = (value: TFormData) => {
  const message = `Assalamualaikum Fix Creative Photography
Saya ${value.nama}, saya tertarik Menggunakan Jasa Fix Creative Photography
  
Nama: ${value.nama}
Email: ${value.email}
Kebutuhan: ${value.paket}
Tanggal: ${value.date}
Estimasi Budget: ${value.budget_range}
Rencana Tanggal: ${value.date}

Boleh di info Pricelistnya, Terimakasih Fix Creative Photography`;
  return message;
};
