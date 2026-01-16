export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date (YYYY-MM-DD)
  readingMinutes: number;
  keywords: string[];
  body: Array<{ type: "p" | "h2" | "ul"; content: string | string[] }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "manufactured-home-loan-options",
    title: "Manufactured Home Loan Options (Plain-English Overview)",
    description:
      "A simple overview of common manufactured/mobile home financing paths, including leased land vs owned land considerations. Educational only.",
    date: "2026-01-01",
    readingMinutes: 6,
    keywords: ["manufactured home loans", "mobile home financing", "loan options"],
    body: [
      {
        type: "p",
        content:
          "Manufactured home financing can feel confusing because it depends on the home, the land situation, and the lender’s guidelines. This guide is educational and meant to help you understand the landscape — not to promise approvals or rates."
      },
      { type: "h2", content: "The two questions that change everything" },
      {
        type: "ul",
        content: [
          "Do you own the land, or is it leased land (a park)?",
          "Is the home new or used (and what year is it)?"
        ]
      },
      {
        type: "p",
        content:
          "Those details often determine whether the home is treated more like real property (mortgage-style programs) or personal property (often chattel-style programs). Requirements vary by lender and state."
      },
      { type: "h2", content: "Common financing paths (high level)" },
      {
        type: "ul",
        content: [
          "Chattel loans: common for parks/leased land scenarios.",
          "Manufactured home mortgages: more common when land is owned and the home qualifies.",
          "Specialized manufactured home lenders: may offer programs tailored to different scenarios."
        ]
      },
      {
        type: "p",
        content:
          "Because programs change, the best next step is to have a licensed lender/broker review your specific scenario and explain what’s currently available in your state."
      }
    ]
  },
  {
    slug: "chattel-loan-vs-mortgage",
    title: "Chattel Loan vs Mortgage: What’s the Difference?",
    description:
      "Learn why leased land often uses chattel loans and why land ownership can open mortgage-style options. Educational only.",
    date: "2026-01-02",
    readingMinutes: 5,
    keywords: ["chattel loan", "manufactured home mortgage", "leased land"],
    body: [
      {
        type: "p",
        content:
          "If you’re shopping for a manufactured home, you’ll often hear “chattel loan” and “mortgage” used interchangeably — but they’re usually different structures. This is educational; requirements vary by lender and state."
      },
      { type: "h2", content: "Chattel loans (common for leased land)" },
      {
        type: "p",
        content:
          "A chattel loan is often used when the home is treated like personal property. This can be common in parks where the land is leased."
      },
      { type: "h2", content: "Mortgage-style programs (more common with land)" },
      {
        type: "p",
        content:
          "Mortgage-style programs are typically secured by real estate (land + home) when the property qualifies and the lender offers that structure."
      },
      { type: "h2", content: "What this means for you" },
      {
        type: "ul",
        content: [
          "Ask early: land owned or leased?",
          "Confirm the home’s year and HUD code status.",
          "Expect different rate/term possibilities depending on the scenario."
        ]
      }
    ]
  },
  {
    slug: "documents-needed-manufactured-home-loan",
    title: "Documents You May Need for a Manufactured Home Loan",
    description:
      "A practical checklist of documents lenders often request for manufactured/mobile home financing. Varies by lender and state.",
    date: "2026-01-03",
    readingMinutes: 6,
    keywords: ["documents", "manufactured home loan", "checklist"],
    body: [
      {
        type: "p",
        content:
          "Lenders typically ask for documentation to verify identity, income, and details about the home/land. Exact requirements vary by lender and state, but this checklist can help you prepare."
      },
      { type: "h2", content: "Identity & basic info" },
      { type: "ul", content: ["Government ID", "Contact info", "Employment history"] },
      { type: "h2", content: "Income verification" },
      { type: "ul", content: ["Pay stubs", "W-2s and/or tax returns", "Bank statements"] },
      { type: "h2", content: "Home & property details" },
      {
        type: "ul",
        content: [
          "Year/make/model (and HUD tags/serial number if available)",
          "Purchase contract (if you’re under contract)",
          "Land status (owned vs leased)",
          "Park lease/lot rent details (if applicable)"
        ]
      },
      {
        type: "p",
        content:
          "If you’re not sure what applies to your situation, a licensed lender can tell you exactly what they’ll need for your program and property type."
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

