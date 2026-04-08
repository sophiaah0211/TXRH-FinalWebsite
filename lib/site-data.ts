export type NavSection = {
  id: string;
  label: string;
  eyebrow: string;
};

export const navSections: NavSection[] = [
  {
    id: "the-house-value-built",
    label: "Why the Parking Lot Fills",
    eyebrow: "The company"
  },
  {
    id: "where-the-model-gets-tested",
    label: "Where the Promise Strains",
    eyebrow: "The problem"
  },
  {
    id: "what-the-table-is-saying",
    label: "The Receipts Under the Heat Lamp",
    eyebrow: "The evidence"
  },
  {
    id: "protect-the-line-out-the-door",
    label: "Keep the Wait Worth It",
    eyebrow: "The solution"
  }
];

export const heroMetrics = [
  {
    label: "2025 revenue",
    value: "$5.88B",
    note: "Total revenue from the provided TXRH financial workbook."
  },
  {
    label: "Restaurants",
    value: "816",
    note: "Systemwide restaurant count across Texas Roadhouse, Bubba's 33, and Jaggers."
  },
  {
    label: "Survey pulse",
    value: "32 responses",
    note: "Customer survey summary provided for this project."
  },
  {
    label: "Review sample",
    value: "10 markets",
    note: "Location-level sentiment pulled from the supplied heatmap draft."
  }
];

export const companyMilestones = [
  {
    year: "1993",
    title: "The first Roadhouse opens in Clarksville, Indiana",
    body: "The founding idea was straightforward: deliver steakhouse satisfaction at an everyday price with enough energy that dinner felt like an event."
  },
  {
    year: "2021",
    title: "The recovery year reset the base",
    body: "Company comparable restaurant sales surged 37.8%, creating a new operating benchmark for what demand could look like when the brand regained full momentum."
  },
  {
    year: "2023",
    title: "Unit economics stayed unusually strong",
    body: "Texas Roadhouse average unit volume reached $7.6 million, showing the brand was still converting traffic into unusually productive boxes."
  },
  {
    year: "2025",
    title: "Scale became a strategic question",
    body: "With 816 restaurants and $5.88 billion in revenue, the challenge is no longer proving the model works. It is preserving what makes it work."
  }
];

export const companyPillars = [
  {
    title: "Value architecture",
    body: "The brand wins because it feels generous. Survey respondents still describe Texas Roadhouse with emotional words like \"yummy,\" \"fun,\" and \"cinnamon butter,\" not just low price."
  },
  {
    title: "High-volume economics",
    body: "Texas Roadhouse average unit volume climbed from $6.4 million in 2021 to $8.7 million in 2025, turning store-level execution into a scale advantage."
  },
  {
    title: "Experience as operating system",
    body: "The promise is bigger than steak. Fresh-baked rolls, energetic service, and the sense of abundance are part of the business model, not decorative brand cues."
  },
  {
    title: "A brand people actively choose",
    body: "The customer survey suggests the chain still earns emotional preference, which matters because casual dining is full of alternatives that compete on convenience alone."
  }
];

export const problemSignals = [
  {
    title: "The same value cues that attract traffic create new strain",
    body: "Rolls, crowd energy, and generous portions are central to the brand promise, but each one becomes fragile when restaurants are busy, understaffed, or inconsistent."
  },
  {
    title: "Guests are noticing friction in the wrong places",
    body: "Survey responses point to waits, crowding, and drink pricing as the moments where the value story starts to feel less generous than the brand intends."
  },
  {
    title: "Growth raises the cost of inconsistency",
    body: "An 816-unit system can absorb normal noise, but not repeated slippage in steak accuracy, refill speed, or first impressions during long waits."
  }
];

export const pressureCards = [
  {
    label: "Traffic pressure",
    value: "+2.8%",
    note: "Company guest traffic increased again in 2025, which is a strength, but it also raises the burden on throughput and wait management."
  },
  {
    label: "Check pressure",
    value: "+2.1%",
    note: "Average check still increased in 2025, leaving less room for guests to tolerate add-on pricing that feels out of sync with the value promise."
  },
  {
    label: "Value friction",
    value: "20%",
    note: "One in five survey respondents flagged drinks as overpriced, making beverage attachment a strategic tension rather than a clean margin lever."
  },
  {
    label: "First-visit risk",
    value: "31%",
    note: "The survey notes that 31% of respondents were first-time visitors, so a weak first impression can erase future repeat traffic before loyalty ever forms."
  }
];

export const strategicProblem =
  "Texas Roadhouse has built a traffic engine around generosity and reliability, but the project evidence suggests that the brand is beginning to test the edge of that promise. The strategic problem is not weak demand. It is protecting perceived value as volume, waits, and pricing pressure make inconsistency easier for guests to notice.";

export const financialSeries = [
  { year: "2021", revenue: 3463.9, ebit: 297.2, restaurants: 667 },
  { year: "2022", revenue: 4014.9, ebit: 320.2, restaurants: 697 },
  { year: "2023", revenue: 4631.7, ebit: 354.0, restaurants: 741 },
  { year: "2024", revenue: 5373.3, ebit: 516.5, restaurants: 784 },
  { year: "2025", revenue: 5878.1, ebit: 474.7, restaurants: 816 }
];

export const valueSeries = [
  { year: "2021", traffic: 27.6, check: 10.2, comps: 37.8 },
  { year: "2022", traffic: 1.9, check: 7.8, comps: 9.7 },
  { year: "2023", traffic: 5.4, check: 4.7, comps: 10.1 },
  { year: "2024", traffic: 4.4, check: 4.1, comps: 8.5 },
  { year: "2025", traffic: 2.8, check: 2.1, comps: 4.9 }
];

export const marketReviewData = [
  { city: "Corona, CA", overall: 4.49, service: 4.33, food: 4.57, positive: 69 },
  { city: "Orlando, FL", overall: 4.48, service: 4.49, food: 4.45, positive: 74 },
  { city: "Columbus, OH", overall: 4.39, service: 4.45, food: 4.38, positive: 72 },
  { city: "Phoenix, AZ", overall: 4.42, service: 4.48, food: 4.4, positive: 67 },
  { city: "Mesquite, TX", overall: 4.27, service: 4.21, food: 4.42, positive: 63 },
  { city: "Pittsburgh, PA", overall: 4.27, service: 4.34, food: 4.32, positive: 65 },
  { city: "Fort Collins, CO", overall: 4.25, service: 4.27, food: 4.16, positive: 66 },
  { city: "Indianapolis, IN", overall: 4.15, service: 4.19, food: 4.13, positive: 64 },
  { city: "Matthews, NC", overall: 4.12, service: 3.97, food: 4.23, positive: 63 },
  { city: "JBLM, WA", overall: 4.07, service: 3.96, food: 4.15, positive: 61 }
];

export const surveyHighlights = [
  {
    title: "Emotional equity is still strong",
    detail:
      "The survey summary says 84% of respondents are 18 to 24, they score \"bang for buck\" at 3.9 out of 5, and their dominant brand words are \"yummy,\" \"fun,\" and \"cinnamon butter.\""
  },
  {
    title: "Rolls are both magnet and vulnerability",
    detail:
      "Respondents linked the brand most closely to rolls and named them the best value item, but repeated complaints about slow refills and stingy service turn a signature strength into a visible liability."
  },
  {
    title: "Drinks are the clearest pricing mismatch",
    detail:
      "The survey identifies drinks as a friction point, with one in five respondents saying beverages feel overpriced relative to the rest of the experience."
  },
  {
    title: "Waits shape value before the food does",
    detail:
      "Wait times and crowding were the top complaints in the customer survey, which matters more because nearly a third of respondents were first-time visitors."
  }
];

export const interviewHighlights = [
  {
    speaker: "Grace Vaughn, Austin, Texas",
    quote:
      "Steak temperature is the most common complaint.",
    takeaway:
      "Execution problems are not abstract. When steaks come back, the brand absorbs both operational waste and a credibility hit."
  },
  {
    speaker: "Kayla Bulseco, Ames, Iowa",
    quote:
      "Wait times are the biggest complaint, especially on game days.",
    takeaway:
      "Peak-period demand is valuable, but unmanaged waits can turn the busiest nights into the weakest value moments."
  },
  {
    speaker: "Grace Vaughn, Austin, Texas",
    quote:
      "Have line cooks pay more attention to detail when cooking steaks, to reduce the number sent back.",
    takeaway:
      "The first recommendation signal from the interviews is operational precision, not a dramatic reinvention of the concept."
  },
  {
    speaker: "Kayla Bulseco, Ames, Iowa",
    quote:
      "Create a bundled deal pairing an appetizer with a margarita at a discounted price.",
    takeaway:
      "The second recommendation signal is to make higher-margin add-ons feel more accessible rather than simply charging more for them."
  }
];

export const evidenceSummary = [
  {
    metric: "2025 revenue",
    value: "$5.88B",
    note: "Growth is real. The question is how much of it can stay guest-friendly."
  },
  {
    metric: "2025 EBIT",
    value: "$474.7M",
    note: "Profit remains strong, even after a step down from the 2024 peak."
  },
  {
    metric: "TXRH AUV",
    value: "$8.7M",
    note: "Few casual dining boxes stay this productive without a sharp value proposition."
  },
  {
    metric: "Average review score",
    value: "4.29 / 5",
    note: "The broad signal is positive, but service variance creates visible weak spots."
  }
];

export const evidenceGaps = [
  "Upper-management interview transcript to be inserted.",
  "Peer competitor financial benchmark to be added with sourced comparables.",
  "Full review-mining methodology appendix to be added if the raw Apify export is included later."
];

export const solutionPillars = [
  {
    title: "Recommendation",
    body:
      "Preserve Texas Roadhouse's value advantage by improving perceived value, not by racing to the bottom on price. The best move is a focused value-protection program built around kitchen precision, wait-friction reduction, and smarter beverage bundling."
  },
  {
    title: "Why this move fits the evidence",
    body:
      "Every major source points the same direction. Guests still love the brand, but they notice when the experience feels slower, less generous, or less consistent than expected. Fixing those moments protects the traffic engine without eroding margins through blanket discounting."
  },
  {
    title: "What should not happen",
    body:
      "The evidence does not suggest a broken concept, a menu overhaul, or a premium repositioning. The opportunity is to tighten the existing promise until the busy-night experience feels as strong as the brand's reputation."
  }
];

export const roadmap = [
  {
    phase: "0-90 days",
    title: "Fix the experience leaks guests notice first",
    actions: [
      "Audit steak remake rates and shift-level temperature errors by restaurant.",
      "Test host-stand wait messaging and queue expectations during peak traffic windows.",
      "Pilot one appetizer-and-margarita bundle in select high-volume stores."
    ]
  },
  {
    phase: "3-6 months",
    title: "Turn operational fixes into repeatable routines",
    actions: [
      "Standardize kitchen coaching on steak accuracy and ticket handoff discipline.",
      "Create a peak-hour service playbook for refill speed and table-touch cadence.",
      "Measure whether bundled beverage offers lift attachment without weakening check quality."
    ]
  },
  {
    phase: "6-12 months",
    title: "Scale only what improves value perception",
    actions: [
      "Roll out the bundle only if it improves guest sentiment and beverage mix together.",
      "Use review and survey tracking to identify whether wait complaints are falling in pilot markets.",
      "Embed value-perception metrics into routine operating reviews instead of treating them as one-off research."
    ]
  }
];

export const riskTable = [
  {
    title: "Risk",
    points: [
      "Bundling can train guests to wait for promotions if the offer is too broad.",
      "Operational audits can become noise if stores are not coached on what action to take.",
      "Peak-hour process changes can feel mechanical if hospitality is scripted too hard."
    ]
  },
  {
    title: "Tradeoff",
    points: [
      "The company may sacrifice some short-term beverage margin to rebuild price fairness.",
      "Tighter steak quality controls may slow the line slightly before they reduce remakes.",
      "Wait transparency does not shorten waits, but it can protect trust while the company works on throughput."
    ]
  },
  {
    title: "Expected payoff",
    points: [
      "Fewer remakes and fewer frustrating waits protect both labor productivity and guest goodwill.",
      "A bundled beverage strategy can increase accessibility without turning the whole menu promotional.",
      "Most importantly, the brand keeps feeling generous, which is the asset doing the hardest work."
    ]
  }
];

export const sources = [
  "TXRH Financials.xlsx",
  "Texas Roadhouse 10k report.pdf",
  "Customer Survey Analysis.pdf",
  "Interview Question TXRH.pdf",
  "texas-roadhouse-heatmap.jsx",
  "Project instruction screenshots provided in the prompt"
];
