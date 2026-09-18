export type FounderSection = {
  title: string;
  paragraphs: readonly string[];
  quote?: string;
  closing?: readonly string[];
};

export const founder = {
  name: "Ajith Ilakkuvan",
  role: "Founder & CEO, Hango",
  tags: ["Entrepreneur", "Educator", "Community Leader"],
  location: "Pollachi, Tamil Nadu",
  photoSrc: "/team/ajith-ilakkuvan.webp",

  intro: [
    "Ajith Ilakkuvan is from Pollachi, Tamil Nadu — and the founder of Hango, a tech and creative company built to engineer digital growth. He is an entrepreneur, educator, and community leader with a background spanning hospitality, events, photography, marketing, business development, analytics, artificial intelligence, and technology.",
    "His professional journey has taken him across diverse fields including hospitality, events, photography, marketing, business development, analytics, Artificial Intelligence and technology. This exposure to different industries shaped his approach to business — understanding people, identifying opportunities and finding practical solutions rather than looking at problems from just one perspective.",
    "Today, Ajith is the Founder & CEO of Hango, a digital growth company that brings together marketing, creativity, technology and AI to help businesses build stronger digital presence and achieve measurable growth.",
  ],

  sections: [
    {
      title: "Beyond Entrepreneurship",
      paragraphs: [
        "For Ajith, learning is not something that happens only inside a classroom.",
        "He has been actively involved in teaching, mentoring and knowledge-sharing, particularly around Artificial Intelligence, digital technologies, marketing and entrepreneurship. He enjoys simplifying complex ideas and helping students, entrepreneurs and business owners understand how emerging technologies can be applied in the real world.",
        "His teaching and speaking experiences have given him an opportunity to interact with people from different backgrounds — from students and young professionals to entrepreneurs and business communities.",
        "He believes that knowledge becomes more valuable when it is shared and applied.",
      ],
    },
    {
      title: "A Community Leader",
      paragraphs: [
        "Ajith also believes that entrepreneurship is not only about building a company, but also about contributing to the community around you.",
        "As an active community leader and President of JCI Pollachi Pride, he works with young professionals and community members to create opportunities for leadership, personal development, entrepreneurship, networking and social impact.",
        "His involvement in community leadership has strengthened one of his core beliefs:",
      ],
      quote: "Growth becomes meaningful when you create growth around you.",
      closing: [
        "Whether he is building a business, teaching a new concept, mentoring someone or working on a community initiative, Ajith is driven by the same principle — bring people together, create possibilities and turn ideas into action.",
      ],
    },
    {
      title: "His Vision for Hango",
      paragraphs: ["Ajith founded Hango with a simple belief:"],
      quote: "Technology should not replace human thinking. It should amplify it.",
      closing: [
        "He envisions Hango as a tech and creative company — one that builds software, produces content, and engineers digital growth for businesses that are done settling for average. His goal is to combine human creativity with AI and technology to create practical, results-driven solutions — and to demonstrate that world-class digital thinking, software capability, and creative production can be built from a place he proudly calls home.",
        "From Pollachi to businesses beyond the region, his vision is to build a company that demonstrates that world-class digital thinking, creativity and technology can be built from a place he proudly calls home.",
      ],
    },
  ] satisfies FounderSection[],

  principles: [
    "Understand the business.",
    "Understand the people.",
    "Think differently.",
    "Use technology intelligently.",
    "Engineer growth.",
  ],
};
