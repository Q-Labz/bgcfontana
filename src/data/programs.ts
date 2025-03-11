import { type Program } from '../components/programs/ProgramCard';

export const programs: Program[] = [
  {
    id: 1,
    title: "PROJECT LEARN",
    description: "A comprehensive academic enrichment program that reinforces and enhances the skills and knowledge young people learn at school. Through Project LEARN, we create opportunities for high-yield learning activities, including leisure reading, writing activities, homework help, and hands-on STEM projects.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&h=600&q=80",
    highlights: [
      "Daily homework assistance and tutoring",
      "Interactive STEM experiments and projects",
      "Reading and writing workshops",
      "Educational technology integration",
      "Regular progress assessments",
      "Parent-teacher collaboration"
    ],
    duration: "School Year (September-June)",
    startDates: [
      "September 5, 2024 (Fall Semester)",
      "January 15, 2025 (Spring Semester)",
      "June 10, 2025 (Summer Session)"
    ],
    requirements: [
      "Ages 6-18",
      "Current school enrollment",
      "Parent/guardian consent",
      "Initial academic assessment",
      "Commitment to regular attendance"
    ],
    tuition: {
      amount: 75,
      period: "month",
      includes: [
        "Daily tutoring sessions",
        "All learning materials",
        "Monthly progress reports",
        "Access to educational software",
        "STEM project supplies"
      ]
    },
    careers: [
      {
        title: "Academic Success Coach",
        description: "Guide students through their academic journey, providing personalized support and strategies for success."
      },
      {
        title: "STEM Education Specialist",
        description: "Lead hands-on science and technology activities, inspiring the next generation of innovators."
      },
      {
        title: "Literacy Coordinator",
        description: "Develop and implement reading and writing programs that foster a love of learning."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        text: "Project LEARN has transformed my daughter's approach to academics. Her grades have improved significantly, and she's developed a genuine love for learning.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    virtualTourUrl: "/virtual-tour/project-learn",
    category: "Education"
  },
  {
    id: 2,
    title: "Creative Arts Program",
    description: "Our comprehensive arts program nurtures creativity and self-expression through various artistic disciplines. Members explore visual arts, music, dance, theater, and digital media while developing technical skills and artistic confidence.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&h=600&q=80",
    highlights: [
      "Visual arts instruction",
      "Music and vocal training",
      "Dance classes",
      "Theater productions",
      "Digital media lab",
      "Art exhibitions"
    ],
    duration: "Year-round with seasonal showcases",
    startDates: [
      "Quarterly enrollment: Jan, Apr, Jul, Oct",
      "Summer intensive: June 15, 2024"
    ],
    requirements: [
      "Ages 6-18",
      "Interest in arts",
      "Commitment to practice",
      "Participation in showcases",
      "Parent/guardian consent"
    ],
    tuition: {
      amount: 85,
      period: "month",
      includes: [
        "All art supplies",
        "Instrument access",
        "Performance costumes",
        "Digital equipment use",
        "Exhibition space"
      ]
    },
    careers: [
      {
        title: "Arts Education Director",
        description: "Oversee comprehensive arts programming and curriculum development."
      },
      {
        title: "Performance Arts Instructor",
        description: "Guide young performers in music, dance, and theater productions."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Emily Rodriguez",
        text: "The arts program gave my son a creative outlet and boosted his confidence tremendously. The end-of-year showcase was amazing!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    category: "Arts"
  },
  {
    id: 3,
    title: "Sports & Recreation",
    description: "Our comprehensive sports and fitness program promotes physical health, teamwork, and character development through diverse athletic activities and wellness education.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&h=600&q=80",
    highlights: [
      "Team sports leagues",
      "Individual athletics",
      "Fitness classes",
      "Swimming programs",
      "Sports clinics",
      "Health education"
    ],
    duration: "Year-round with seasonal sports",
    startDates: [
      "Fall Sports: September 1, 2024",
      "Winter Sports: December 1, 2024",
      "Spring Sports: March 1, 2025",
      "Summer Programs: June 1, 2025"
    ],
    requirements: [
      "Ages 6-18",
      "Sports physical",
      "Parent/guardian consent",
      "Athletic gear",
      "Commitment to sportsmanship"
    ],
    tuition: {
      amount: 95,
      period: "month",
      includes: [
        "Equipment use",
        "Uniforms",
        "League fees",
        "Insurance coverage",
        "Professional coaching"
      ]
    },
    careers: [
      {
        title: "Athletic Director",
        description: "Coordinate sports programs and oversee coaching staff."
      },
      {
        title: "Fitness Instructor",
        description: "Lead exercise classes and promote healthy lifestyle habits."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Marcus Thompson",
        text: "The sports program taught my daughter valuable lessons about teamwork and perseverance. The coaches are exceptional mentors.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    category: "Sports"
  },
  {
    id: 4,
    title: "Health & Life Skills",
    description: "A holistic program focusing on personal wellness, social-emotional development, and essential life skills that prepare youth for successful, healthy futures.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=600&q=80",
    highlights: [
      "Nutrition education",
      "Mental health awareness",
      "Personal hygiene",
      "Decision-making skills",
      "Drug prevention",
      "Financial literacy"
    ],
    duration: "Ongoing with quarterly modules",
    startDates: [
      "New sessions begin every quarter",
      "Next start: April 1, 2024"
    ],
    requirements: [
      "Ages 8-18",
      "Parent/guardian consent",
      "Commitment to program",
      "Participation in workshops"
    ],
    tuition: {
      amount: 65,
      period: "month",
      includes: [
        "Workshop materials",
        "Wellness journal",
        "Cooking classes",
        "Guest speaker sessions",
        "Field trips"
      ]
    },
    careers: [
      {
        title: "Youth Wellness Coordinator",
        description: "Design and implement comprehensive health and life skills programs."
      },
      {
        title: "Mental Health Educator",
        description: "Facilitate workshops on emotional well-being and stress management."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Lisa Chen",
        text: "This program helped my teen develop crucial life skills and better understanding of personal health. The financial literacy workshops were particularly valuable.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    category: "Life Skills"
  },
  {
    id: 5,
    title: "Character & Leadership",
    description: "Empowering youth to become responsible citizens and leaders through mentorship, community service, and leadership development opportunities.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&h=600&q=80",
    highlights: [
      "Youth council participation",
      "Community service projects",
      "Leadership workshops",
      "Public speaking training",
      "Civic engagement",
      "Peer mentoring"
    ],
    duration: "Year-round program",
    startDates: [
      "Leadership Academy: September 2024",
      "Youth Council Elections: October 2024",
      "Service Projects: Monthly"
    ],
    requirements: [
      "Ages 13-18",
      "Letter of recommendation",
      "Interview process",
      "Commitment to service",
      "Academic good standing"
    ],
    tuition: {
      amount: 75,
      period: "month",
      includes: [
        "Leadership materials",
        "Workshop access",
        "Project supplies",
        "Event registration",
        "Leadership certification"
      ]
    },
    careers: [
      {
        title: "Youth Leadership Director",
        description: "Guide and mentor young leaders while developing leadership programs."
      },
      {
        title: "Community Engagement Coordinator",
        description: "Organize service projects and civic engagement opportunities."
      }
    ],
    testimonials: [
      {
        id: 1,
        name: "Michael Chen",
        text: "The leadership program transformed me from a shy student into a confident public speaker and community leader.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
      }
    ],
    category: "Leadership"
  }
];