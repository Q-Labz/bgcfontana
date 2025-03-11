import { type DonorTier } from '../types';

export const donorTiers: DonorTier[] = [
  {
    name: "Platinum",
    description: "Leadership Circle",
    range: "$100,000+",
    color: "rgb(226 232 240)" // slate-200
  },
  {
    name: "Gold",
    description: "Benefactor Circle",
    range: "$50,000-$99,999",
    color: "rgb(254 240 138)" // yellow-200
  },
  {
    name: "Silver",
    description: "Patron Circle",
    range: "$25,000-$49,999",
    color: "rgb(226 232 240)" // slate-200
  },
  {
    name: "Bronze",
    description: "Supporter Circle",
    range: "$10,000-$24,999",
    color: "rgb(251 146 60)" // orange-400
  }
];