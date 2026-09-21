export type PricingTier = {
  name: string;
  features: string[];
};

export type RetainerService = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  pricingNote: string;
  tiers: PricingTier[];
};

export type ProjectService = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  pricingNote: string;
};

export const retainerService: RetainerService = {
  slug: "digital-marketing-monthly-management",
  title: "Digital Marketing Monthly Management",
  tagline: "Your entire digital presence, managed and engineered for growth.",
  description:
    "We don't just post content — we take the time to deeply understand your business, your audience, and your goals, then engineer your digital presence across every social media platform to drive real, measurable growth.",
  includes: [
    "Social Media Marketing",
    "SEO",
    "SEM",
    "Google Ads",
    "Meta Ads",
    "Performance Marketing",
    "Content Marketing",
  ],
  pricingNote: "Monthly retainer — Starter / Growth / Premium",
  tiers: [
    {
      name: "Starter",
      features: ["2 platforms", "Basic SEO", "Monthly report"],
    },
    {
      name: "Growth",
      features: ["All channels + SEM", "Content marketing", "Bi-weekly report"],
    },
    {
      name: "Premium",
      features: ["Full-stack service", "Dedicated manager", "Weekly strategy calls"],
    },
  ],
};

/** Ordered ascending by value: technology first, then marketing management
 * (the retainer above, rendered separately between index 1 and 2), then
 * creative production, then performance, then support services. */
export const projectServices: ProjectService[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "AI-powered software built around your business.",
    description:
      "We design and develop custom software solutions with AI features — tailored to how your business actually works. From internal management tools to client-facing platforms, we build technology that solves real problems and scales with you.",
    includes: [
      "Custom Software",
      "AI Features",
      "SaaS Development",
      "Business Automation",
      "Internal Tools",
      "AI Integration",
    ],
    pricingNote: "Custom quote per project",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "High-performance websites built to convert.",
    description:
      "We develop custom websites with AI-powered features — for businesses, e-commerce stores, portfolios, and landing pages. Every website we build is fast, responsive, and designed to turn visitors into customers.",
    includes: [
      "Website Development",
      "E-Commerce",
      "Landing Pages",
      "AI Features",
      "Custom Development",
      "Responsive Design",
    ],
    pricingNote: "Package + custom quote",
  },
  {
    slug: "video-production-ad-films",
    title: "Video Production & Ad Films",
    tagline: "Creative content produced by specialists in video and ad films.",
    description:
      "Our in-house creative team specializes in video production and advertisement films — from brand reels and product videos to full-length ad films and documentaries. We handle everything from concept to final cut.",
    includes: [
      "Ad Films",
      "Brand Videos",
      "Reels",
      "Documentaries",
      "Short Films",
      "Post-Production",
      "Videography",
    ],
    pricingNote: "Package + custom quote for larger productions",
  },
  {
    slug: "seo",
    title: "SEO — Search Engine Optimisation",
    tagline: "Get found by the right people at the right time.",
    description:
      "On-page, off-page, and technical SEO — keyword research, site audit, and a full optimisation plan. We engineer your search presence to drive consistent organic traffic and qualified leads.",
    includes: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", "Audit Report"],
    pricingNote: "Package + custom quote",
  },
  {
    slug: "ads",
    title: "Meta Ads & Google Ads",
    tagline: "Performance campaigns built to convert, not just reach.",
    description:
      "Campaign strategy, creative production, audience targeting, and pixel/tracking setup — fully configured and optimised to drive leads and sales across Meta and Google platforms.",
    includes: ["Google Ads", "Meta Ads", "Performance Marketing", "Campaign Setup", "Conversion Tracking"],
    pricingNote: "Fixed setup fee + % of ad spend",
  },
  {
    slug: "photography",
    title: "Photography",
    tagline: "Visuals that make your brand impossible to ignore.",
    description:
      "Product photography, model and portfolio shoots, and brand campaign photography — professional, on-brand, and ready for digital and print use.",
    includes: ["Product Photography", "Commercial Photography", "Brand Campaigns", "Model Shoots"],
    pricingNote: "Package + custom quote",
  },
  {
    slug: "video-editing-design",
    title: "Video Editing & Design",
    tagline: "Creative output for every format and platform.",
    description:
      "Video editing, motion graphics, posters, flyers, brochures, flex banners, pamphlets, and invitations — standalone or bundled into a package.",
    includes: [
      "Video Editing",
      "Posters",
      "Flyers",
      "Brochures",
      "Print Design",
      "Business Collaterals",
      "Pamphlets",
    ],
    pricingNote: "Fixed packages per deliverable",
  },
  {
    slug: "brand-logo-identity",
    title: "Brand Logo & Identity",
    tagline: "A brand identity that means business.",
    description:
      "Logo design, brand kit, colour palette, typography, and a complete brand guidelines document — built to be consistent across every platform and touchpoint.",
    includes: ["Brand Identity", "Logo Design", "Brand Guidelines", "Typography", "Colour Palette"],
    pricingNote: "Fixed packages",
  },
  {
    slug: "website-optimisation",
    title: "Website Optimisation",
    tagline: "Turn your existing website into a high-performance asset.",
    description:
      "Speed improvements, Core Web Vitals fixes, UI/UX enhancements, and SEO optimisation for your existing website — without rebuilding from scratch.",
    includes: ["Website Optimisation", "UI/UX", "Core Web Vitals", "Speed Optimisation", "SEO"],
    pricingNote: "Package + custom quote",
  },
  {
    slug: "digital-marketing-consultation",
    title: "Digital Marketing Consultation",
    tagline: "Clarity before commitment.",
    description:
      "A focused one-on-one advisory session — strategy audit, campaign review, and a clear direction for your business's digital growth. Perfect before starting any major marketing initiative.",
    includes: ["Marketing Strategy", "Campaign Planning", "Business Advisory", "AI-Powered Solutions"],
    pricingNote: "Fixed per session",
  },
  {
    slug: "internship-certificate-program",
    title: "Internship Certificate Program",
    tagline: "Real work. Real learning. Recognised certificate.",
    description:
      "College students get hands-on experience working on live projects across our tech, creative, and marketing teams — and walk away with a certificate they can actually use. 2nd year and final year students welcome.",
    includes: ["Internships", "Certificate Program", "Live Projects", "2nd Year", "Final Year", "College MOU"],
    pricingNote: "Fee paid by student · 15–60 day programs · MOU tie-ups available for colleges",
  },
];
