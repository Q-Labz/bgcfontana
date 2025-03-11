export interface Club {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  type: 'main' | 'satellite' | 'partner';
  website: string;
  programs?: string[];
}