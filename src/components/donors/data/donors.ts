import { type Donor } from '../types';

export const donors: Donor[] = [
  // Platinum Tier - $100,000+
  {
    id: 1,
    name: "Microsoft Corporation",
    tier: "platinum",
    category: "corporate",
    period: { start: "2023", end: "2024" },
    recognition: ["Technology Center Naming Rights", "Annual Gala Presenting Sponsor"],
    website: "https://microsoft.com",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    title: "Ph.D.",
    tier: "platinum",
    category: "individual",
    period: { start: "2023" },
    recognition: ["Legacy Society Member", "Lifetime Achievement Award"]
  },

  // Gold Tier - $50,000-$99,999
  {
    id: 3,
    name: "Walmart Foundation",
    tier: "gold",
    category: "foundation",
    period: { start: "2023", end: "2024" },
    recognition: ["Education Program Sponsor"],
    website: "https://walmart.org",
    image: "https://images.unsplash.com/photo-1633418038405-8dbc6f1dc845?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "Regional Healthcare Partners",
    tier: "gold",
    category: "corporate",
    period: { start: "2023", end: "2024" },
    recognition: ["Health & Wellness Program Sponsor"],
    website: "https://example.com",
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=150&h=150&q=80"
  },

  // Silver Tier - $25,000-$49,999
  {
    id: 5,
    name: "Local Community Bank",
    tier: "silver",
    category: "corporate",
    period: { start: "2023", end: "2024" },
    recognition: ["Financial Literacy Program Sponsor"],
    website: "https://example.com",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 6,
    name: "James & Emily Wilson Family Foundation",
    tier: "silver",
    category: "foundation",
    period: { start: "2023", end: "2024" },
    recognition: ["Arts Program Sponsor"]
  },

  // Bronze Tier - $10,000-$24,999
  {
    id: 7,
    name: "Robert Chen",
    title: "CEO, Tech Innovations",
    tier: "bronze",
    category: "individual",
    period: { start: "2023", end: "2024" }
  },
  {
    id: 8,
    name: "Community Sports Foundation",
    tier: "bronze",
    category: "foundation",
    period: { start: "2023", end: "2024" },
    recognition: ["Youth Sports Program Supporter"]
  }
];