export interface Donor {
  id: number;
  name: string;
  title?: string;
  organization?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  category: 'individual' | 'organization' | 'foundation' | 'corporate';
  period: {
    start: string;
    end?: string;
  };
  amount?: number;
  recognition?: string[];
  image?: string;
  website?: string;
}

export interface DonorTier {
  name: string;
  description: string;
  range: string;
  color: string;
}