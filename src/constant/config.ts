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
    value: 'Paket Rumah A',
  },
  {
    value: 'Paket Rumah B',
  },
  {
    value: 'Paket Rumah C',
  },
  {
    value: 'Paket Rumah D',
  },
  {
    value: 'Paket Aula / Gedung A',
  },
  {
    value: 'Paket Aula / Gedung B',
  },
  {
    value: 'Paket Aula / Gedung C',
  },
  {
    value: 'Paket Aula / Gedung D',
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
Saya ${value.email}, saya menemukan Fix Creative Photography melalui ${
    value.find_us
  }.
  
saya tertarik Menggunakan Jasa Fix Creative Photography
  
Nama: ${value.email} 
Kebutuhan: ${value.paket || value.all_in_package}
Lokasi: ${value.estimate_location}
Tanggal: ${value.date}
Estimasi Budget: ${value.budget_range}
Rencana Tanggal: ${value.date}
Rencana Tempat: ${value.estimate_location}

Boleh di info Pricelistnya, Terimakasih Fix Creative Photography`;
  return message;
};
