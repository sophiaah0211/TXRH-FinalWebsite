"use client";

import {
  AlertTriangle,
  ArrowRight,
  Clock3,
  GlassWater,
  Quote,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed
} from "lucide-react";

import {
  FinancialMomentumChart,
  ReviewSignalChart,
  ValuePressureChart
} from "@/components/chart-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteNavigation } from "@/components/site-navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  companyMilestones,
  companyPillars,
  evidenceGaps,
  evidenceSummary,
  financialSeries,
  heroMetrics,
  interviewHighlights,
  marketReviewData,
  pressureCards,
  problemSignals,
  roadmap,
  riskTable,
  solutionPillars,
  sources,
  strategicProblem,
  surveyHighlights,
  valueSeries
} from "@/lib/site-data";

const problemIcons = [UtensilsCrossed, Clock3, AlertTriangle];
const solutionIcons = [ShieldCheck, ArrowRight, GlassWater];

const rankedMarkets = [...marketReviewData].sort((a, b) => b.overall - a.overall);
const strongestMarket = rankedMarkets[0];
const weakestMarket = rankedMarkets[rankedMarkets.length - 1];
const averagePositive =
  Math.round(
    (marketReviewData.reduce((sum, market) => sum + market.positive, 0) / marketReviewData.length) *
      10
  ) / 10;

function SectionBridge({
  kicker,
  text,
  nextId,
  nextLabel,
  light = false
}: {
  kicker: string;
  text: string;
  nextId: string;
  nextLabel: string;
  light?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`mt-10 rounded-[2rem] border px-5 py-5 sm:px-6 ${
          light
            ? "border-[rgba(94,72,60,0.12)] bg-[rgba(255,255,255,0.62)]"
            : "border-white/10 bg-[rgba(255,255,255,0.04)]"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p
              className={`text-xs uppercase tracking-[0.24em] ${
                light ? "text-[var(--ink-muted)]" : "text-[var(--muted-foreground)]"
              }`}
            >
              {kicker}
            </p>
            <p
              className={`mt-3 text-sm leading-7 sm:text-base ${
                light ? "text-[var(--ink)]" : "text-[var(--foreground)]"
              }`}
            >
              {text}
            </p>
          </div>
          <Button
            variant={light ? "secondary" : "default"}
            onClick={() => document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" })}
          >
            {nextLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

function EvidenceTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[rgba(94,72,60,0.1)] bg-white/80">
      <div className="grid grid-cols-[1.2fr_0.6fr_0.6fr_0.6fr] border-b border-[rgba(94,72,60,0.08)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)] sm:px-5">
        <span>Market</span>
        <span>Overall</span>
        <span>Service</span>
        <span>Positive</span>
      </div>
      {rankedMarkets.map((market) => (
        <div
          key={market.city}
          className="grid grid-cols-[1.2fr_0.6fr_0.6fr_0.6fr] items-center border-b border-[rgba(94,72,60,0.06)] px-4 py-3 text-sm last:border-b-0 sm:px-5"
        >
          <span className="font-medium text-[var(--ink)]">{market.city}</span>
          <span className="text-[var(--ink-muted)]">{market.overall.toFixed(2)}</span>
          <span className="text-[var(--ink-muted)]">{market.service.toFixed(2)}</span>
          <span className="text-[var(--ink-muted)]">{market.positive}%</span>
        </div>
      ))}
    </div>
  );
}

export function StrategicSite() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <SiteNavigation />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-12 h-[26rem] w-[26rem] rounded-full bg-[rgba(155,69,33,0.18)] blur-3xl" />
        <div className="absolute right-[-9rem] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-[rgba(212,163,124,0.13)] blur-3xl" />
        <div className="absolute left-[20%] top-[118rem] h-80 w-80 rounded-full bg-[rgba(64,44,34,0.16)] blur-3xl" />
      </div>

      <main className="relative mx-auto w-full max-w-[1440px] px-4 pb-16 pt-24 sm:px-6 lg:px-8 xl:px-10">
        <div className="min-w-0 space-y-10">
          <section
            id="the-house-value-built"
            className="scroll-mt-32 overflow-hidden rounded-[2.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(201,106,56,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-5 py-7 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10 lg:py-10"
          >
            <Reveal>
              <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Texas Roadhouse strategic analysis</Badge>
                    <Badge>Built from project materials</Badge>
                    <Badge>Consulting-style narrative</Badge>
                  </div>

                  <div className="space-y-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted-foreground)]">
                      Section 1 of 4
                    </p>
                    <h1 className="max-w-5xl font-display text-[3.1rem] leading-[0.92] sm:text-6xl lg:text-[5.8rem]">
                      Why the Parking Lot Fills
                    </h1>
                    <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                      Before Texas Roadhouse can be critiqued, it has to be understood. This is a
                      company that made casual dining feel abundant again: loud enough to feel alive,
                      affordable enough to feel fair, and disciplined enough to turn that feeling into
                      unusually strong unit economics.
                    </p>
                  </div>

                  <Card className="bg-[rgba(0,0,0,0.24)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      Core argument
                    </p>
                    <p className="mt-4 text-base leading-7 text-[var(--foreground)]">
                      Texas Roadhouse did not build its edge by feeling premium or low-end. It built
                      it by making value feel generous. That is the asset holding the whole strategy
                      together.
                    </p>
                  </Card>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="bg-[rgba(255,255,255,0.03)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        The emotional side
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                        Survey respondents do not describe the brand in generic restaurant language.
                        They remember fun, flavor, and cinnamon butter. That is demand quality, not
                        just transaction volume.
                      </p>
                    </Card>
                    <Card className="bg-[rgba(255,255,255,0.03)]">
                      <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                        The business side
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                        Average unit volume climbed from $6.4 million in 2021 to $8.7 million in
                        2025. Very few casual dining concepts scale that well unless the guest
                        proposition is unusually durable.
                      </p>
                    </Card>
                  </div>
                </div>

                <div className="grid gap-4">
                  {heroMetrics.map((item, index) => (
                    <Reveal key={item.label} delay={index * 0.06}>
                      <Card className="relative h-full overflow-hidden bg-[rgba(8,8,8,0.24)]">
                        <div className="absolute inset-y-0 right-0 w-24 bg-[linear-gradient(180deg,rgba(201,106,56,0.16),transparent)]" />
                        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                          {item.label}
                        </p>
                        <p className="mt-3 font-display text-4xl text-[var(--foreground)]">
                          {item.value}
                        </p>
                        <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--muted-foreground)]">
                          {item.note}
                        </p>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {companyPillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <Card className="h-full bg-[rgba(255,255,255,0.035)]">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                      {pillar.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground)]">{pillar.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
              <Reveal>
                <Card className="h-full bg-[linear-gradient(180deg,rgba(201,106,56,0.12),rgba(255,255,255,0.03))]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                    Strategic reading
                  </p>
                  <h3 className="mt-3 font-display text-3xl">A chain can scale. A feeling is harder.</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                    Texas Roadhouse matters because it appears to have preserved both. It kept the box
                    productive while also keeping the visit memorable. That makes the company more than
                    a restaurant operator. It makes it a test of whether generosity can survive scale.
                  </p>
                </Card>
              </Reveal>

              <div className="grid gap-4">
                {companyMilestones.map((item, index) => (
                  <Reveal key={item.year} delay={index * 0.05}>
                    <Card className="h-full">
                      <div className="flex gap-4">
                        <div className="min-w-16 font-display text-3xl text-[var(--accent-soft)]">
                          {item.year}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[var(--foreground)]">{item.title}</p>
                          <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <SectionBridge
              kicker="The handoff"
              text="That makes the next question unavoidable. If the brand's real asset is the feeling of abundance, where does that feeling start to thin when the stores get busier, the checks rise, and the system gets larger?"
              nextId="where-the-model-gets-tested"
              nextLabel="Go to the problem"
            />
          </section>

          <section
            id="where-the-model-gets-tested"
            className="scroll-mt-32 overflow-hidden rounded-[2.75rem] border border-white/10 bg-[radial-gradient(circle_at_bottom_left,rgba(201,106,56,0.12),transparent_28%),linear-gradient(180deg,rgba(18,15,13,0.97),rgba(12,10,9,0.95))] px-5 py-7 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:px-8 lg:px-10 lg:py-10"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Section 2 of 4"
                title="Where the Promise Strains"
                description="The problem is not that Texas Roadhouse stopped working. It is that the same cues that built the brand now carry more weight than before. When a company wins on generosity, guests notice the exact moment generosity feels rationed."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {problemSignals.map((item, index) => {
                const Icon = problemIcons[index];

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <Card className="h-full bg-[rgba(255,255,255,0.03)]">
                      <Icon className="h-5 w-5 text-[var(--accent-soft)]" />
                      <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                        {item.body}
                      </p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
              <Reveal>
                <Card className="h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                    The strategic problem
                  </p>
                  <p className="mt-4 font-display text-[2rem] leading-tight text-[var(--foreground)] sm:text-[2.45rem]">
                    {strategicProblem}
                  </p>
                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      Why this matters now
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                      A larger system amplifies every weak moment. A long wait, a missed steak
                      temperature, or a drink that feels overpriced does not just frustrate one table.
                      It weakens the brand's most important claim: that the whole night still feels worth it.
                    </p>
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {pressureCards.map((card, index) => (
                  <Reveal key={card.label} delay={index * 0.05}>
                    <Card className="h-full">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                        {card.label}
                      </p>
                      <p className="mt-3 font-display text-4xl text-[var(--foreground)]">
                        {card.value}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                        {card.note}
                      </p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <SectionBridge
              kicker="The handoff"
              text="A strategic problem is only credible if the proof holds. The next section puts the claim under pressure with numbers, customer language, employee observation, and location-level sentiment."
              nextId="what-the-table-is-saying"
              nextLabel="See the evidence"
            />
          </section>

          <section
            id="what-the-table-is-saying"
            className="scroll-mt-32 overflow-hidden rounded-[2.75rem] border border-[rgba(94,72,60,0.12)] bg-[radial-gradient(circle_at_top_left,rgba(191,107,63,0.1),transparent_24%),linear-gradient(180deg,rgba(249,242,234,0.98),rgba(244,234,223,0.96))] px-5 py-7 text-[var(--ink)] shadow-[0_24px_90px_rgba(0,0,0,0.18)] sm:px-8 lg:px-10 lg:py-10"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Section 3 of 4"
                title="The Receipts Under the Heat Lamp"
                description="This section carries the burden of proof. The financials show a business still producing growth. The survey, interview, and review signals show exactly where that growth begins to test perceived value."
                theme="dark"
              />
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {evidenceSummary.map((item, index) => (
                <Reveal key={item.metric} delay={index * 0.05}>
                  <Card className="h-full border-[rgba(94,72,60,0.1)] bg-white/75">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                      {item.metric}
                    </p>
                    <p className="mt-3 font-display text-4xl text-[var(--ink)]">{item.value}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{item.note}</p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-2">
              <Reveal>
                <Card className="border-[rgba(94,72,60,0.1)] bg-white/82">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                        Financial trajectory
                      </p>
                      <h3 className="mt-2 font-display text-3xl text-[var(--ink)]">
                        Revenue climbed faster than the guest promise can be assumed
                      </h3>
                    </div>
                    <Sparkles className="h-5 w-5 text-[var(--accent-strong)]" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    Revenue rose from $3.46 billion in 2021 to $5.88 billion in 2025 while the
                    system expanded from 667 to 816 restaurants. The business is scaling. The open
                    question is whether the feeling that built it is scaling just as well.
                  </p>
                  <div className="mt-6">
                    <FinancialMomentumChart data={financialSeries} />
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.08}>
                <Card className="border-[rgba(94,72,60,0.1)] bg-white/82">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Value mechanics
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-[var(--ink)]">
                    Traffic held. Pricing help cooled.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    Traffic remained positive in 2025, but average check growth slowed to 2.1%.
                    That narrows the room for careless pricing moves and makes visible value moments
                    even more strategically important.
                  </p>
                  <div className="mt-6">
                    <ValuePressureChart data={valueSeries} />
                  </div>
                </Card>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <Card className="h-full border-[rgba(94,72,60,0.1)] bg-white/82">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Sentiment by market
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-[var(--ink)]">
                    Service variance is where the warning gets loud
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    Overall ratings stay strong across the ten supplied locations, but the gap between
                    overall and service scores shows where the value promise starts to fray first.
                  </p>
                  <div className="mt-6">
                    <ReviewSignalChart data={marketReviewData} />
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-5">
                <Reveal delay={0.06}>
                  <Card className="border-[rgba(94,72,60,0.1)] bg-white/82">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                      Signal board
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-[1.5rem] border border-[rgba(94,72,60,0.08)] bg-white/70 p-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                          Strongest market
                        </p>
                        <p className="mt-2 font-display text-2xl text-[var(--ink)]">
                          {strongestMarket.city}
                        </p>
                        <p className="mt-2 text-sm text-[var(--ink-muted)]">
                          {strongestMarket.overall.toFixed(2)} overall
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-[rgba(94,72,60,0.08)] bg-white/70 p-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                          Weakest market
                        </p>
                        <p className="mt-2 font-display text-2xl text-[var(--ink)]">
                          {weakestMarket.city}
                        </p>
                        <p className="mt-2 text-sm text-[var(--ink-muted)]">
                          {weakestMarket.overall.toFixed(2)} overall
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-[rgba(94,72,60,0.08)] bg-white/70 p-4">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                          Avg. positive share
                        </p>
                        <p className="mt-2 font-display text-2xl text-[var(--ink)]">
                          {averagePositive}%
                        </p>
                        <p className="mt-2 text-sm text-[var(--ink-muted)]">
                          Positive reviews across all ten sampled markets
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>

                <Reveal delay={0.1}>
                  <Card className="border-[rgba(94,72,60,0.1)] bg-white/82">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                      Market table
                    </p>
                    <div className="mt-4">
                      <EvidenceTable />
                    </div>
                  </Card>
                </Reveal>
              </div>
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[0.94fr_1.06fr]">
              <Reveal>
                <Card className="h-full border-[rgba(94,72,60,0.1)] bg-white/82">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Survey readout
                  </p>
                  <div className="mt-4 space-y-4">
                    {surveyHighlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.5rem] border border-[rgba(94,72,60,0.08)] bg-white/70 p-4"
                      >
                        <p className="text-sm font-medium text-[var(--ink)]">{item.title}</p>
                        <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {interviewHighlights.map((item, index) => (
                  <Reveal key={`${item.speaker}-${index}`} delay={index * 0.05}>
                    <Card className="h-full border-[rgba(94,72,60,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(249,242,234,0.92))]">
                      <Quote className="h-5 w-5 text-[var(--accent-strong)]" />
                      <p className="mt-4 text-lg leading-8 text-[var(--ink)]">"{item.quote}"</p>
                      <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                        {item.speaker}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                        {item.takeaway}
                      </p>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <Card className="mt-10 border-dashed border-[rgba(94,72,60,0.2)] bg-transparent">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  Concise content gaps
                </p>
                <div className="mt-4 grid gap-3">
                  {evidenceGaps.map((gap) => (
                    <p key={gap} className="text-sm leading-7 text-[var(--ink-muted)]">
                      {gap}
                    </p>
                  ))}
                </div>
              </Card>
            </Reveal>

            <SectionBridge
              kicker="The handoff"
              text="Once the evidence is laid side by side, the direction becomes clearer. The company does not need a new identity. It needs a more disciplined way to protect the identity already creating traffic."
              nextId="protect-the-line-out-the-door"
              nextLabel="See the solution"
              light
            />
          </section>

          <section
            id="protect-the-line-out-the-door"
            className="scroll-mt-32 overflow-hidden rounded-[2.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(201,106,56,0.15),transparent_28%),linear-gradient(180deg,rgba(40,19,13,0.97),rgba(23,13,10,0.96))] px-5 py-7 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:px-8 lg:px-10 lg:py-10"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Section 4 of 4"
                title="Keep the Wait Worth It"
                description="The recommendation is deliberately decisive. Texas Roadhouse should not chase a broad reinvention. It should protect perceived value through tighter kitchen precision, cleaner wait management, and beverage bundles that feel more generous than extractive."
              />
            </Reveal>

            <Reveal>
              <Card className="mt-10 bg-[linear-gradient(180deg,rgba(201,106,56,0.16),rgba(255,255,255,0.03))]">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                  Executive conclusion
                </p>
                <p className="mt-4 font-display text-[2rem] leading-tight text-[var(--foreground)] sm:text-[2.65rem]">
                  The right move is not to discount harder. It is to make Texas Roadhouse feel more
                  worth it at the exact moments when pressure makes that hardest.
                </p>
              </Card>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {solutionPillars.map((item, index) => {
                const Icon = solutionIcons[index];

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <Card className="h-full bg-[rgba(255,255,255,0.03)]">
                      <Icon className="h-5 w-5 text-[var(--accent-soft)]" />
                      <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                        {item.body}
                      </p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <Card className="h-full bg-[linear-gradient(180deg,rgba(201,106,56,0.14),rgba(255,255,255,0.03))]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                    Implementation roadmap
                  </p>
                  <div className="mt-6 space-y-6">
                    {roadmap.map((phase, index) => (
                      <div key={phase.phase} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent-soft)]">
                            {phase.phase}
                          </p>
                          <h3 className="mt-2 font-display text-2xl">{phase.title}</h3>
                          <div className="mt-3 space-y-2">
                            {phase.actions.map((action) => (
                              <p
                                key={action}
                                className="text-sm leading-7 text-[var(--muted-foreground)]"
                              >
                                {action}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-5">
                {riskTable.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <Card className="h-full">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                        {item.title}
                      </p>
                      <div className="mt-4 space-y-3">
                        {item.points.map((point) => (
                          <p key={point} className="text-sm leading-7 text-[var(--muted-foreground)]">
                            {point}
                          </p>
                        ))}
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <Card className="mt-10 bg-[rgba(255,255,255,0.03)]">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                  Persuasive close
                </p>
                <p className="mt-4 max-w-4xl text-base leading-8 text-[var(--foreground)]">
                  Texas Roadhouse already has the traffic, the scale, and the emotional memory most
                  chains are still trying to build. The strategic task is narrower and more important:
                  protect the moments that make the brand feel generous, before growth turns those
                  moments into friction guests can feel.
                </p>
              </Card>
            </Reveal>
          </section>

          <footer className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-6 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Closing note
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
                  The site is intentionally built as one argument: first establish why the company is
                  special, then show where the specialness gets stressed, then prove it, then answer
                  it decisively.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)]">
                  Sources used on site
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {sources.map((source) => (
                    <p key={source} className="text-sm text-[var(--foreground)]">
                      {source}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
