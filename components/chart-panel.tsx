"use client";

import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

type FinancialDatum = {
  year: string;
  revenue: number;
  ebit: number;
  restaurants: number;
};

type ValueDatum = {
  year: string;
  traffic: number;
  check: number;
  comps: number;
};

type ReviewDatum = {
  city: string;
  overall: number;
  service: number;
  food: number;
  positive: number;
};

const chartStyle = {
  grid: "rgba(94, 72, 60, 0.18)",
  text: "#6b5f58",
  revenue: "#9b4521",
  ebit: "#402c22",
  restaurants: "#d4a37c",
  traffic: "#9b4521",
  check: "#d97d43",
  comps: "#2f2723",
  overall: "#9b4521",
  service: "#d9b89f"
};

function ChartShell({
  children,
  heightClassName
}: {
  children: ReactNode;
  heightClassName: string;
}) {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false
  );

  return (
    <div className={heightClassName}>
      {mounted ? (
        children
      ) : (
        <div className="flex h-full items-center justify-center rounded-[1.75rem] border border-[rgba(94,72,60,0.12)] bg-white/70">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
            Loading chart
          </p>
        </div>
      )}
    </div>
  );
}

const tooltipStyle = {
  background: "rgba(255, 248, 240, 0.96)",
  border: "1px solid rgba(94,72,60,0.12)",
  borderRadius: "18px",
  color: "#181310",
  boxShadow: "0 18px 50px rgba(34, 22, 18, 0.12)"
};

export function FinancialMomentumChart({ data }: { data: FinancialDatum[] }) {
  return (
    <ChartShell heightClassName="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b95b2e" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#8d3d1e" stopOpacity={0.88} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartStyle.grid} vertical={false} />
          <XAxis dataKey="year" stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            stroke={chartStyle.text}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}B`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={chartStyle.text}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="revenue"
            name="Revenue ($M)"
            fill="url(#revenueFill)"
            radius={[12, 12, 4, 4]}
          />
          <Line
            yAxisId="right"
            dataKey="ebit"
            name="EBIT ($M)"
            stroke={chartStyle.ebit}
            strokeWidth={3}
            dot={{ fill: chartStyle.ebit, strokeWidth: 0 }}
          />
          <Line
            yAxisId="right"
            dataKey="restaurants"
            name="Restaurants"
            stroke={chartStyle.restaurants}
            strokeWidth={2.5}
            strokeDasharray="5 5"
            dot={{ fill: chartStyle.restaurants, strokeWidth: 0 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function ValuePressureChart({ data }: { data: ValueDatum[] }) {
  return (
    <ChartShell heightClassName="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <defs>
            <linearGradient id="compsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3e342e" stopOpacity={0.92} />
              <stop offset="100%" stopColor="#241c19" stopOpacity={0.86} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartStyle.grid} vertical={false} />
          <XAxis dataKey="year" stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <YAxis stroke={chartStyle.text} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <Bar
            dataKey="comps"
            name="Comparable sales %"
            fill="url(#compsFill)"
            radius={[10, 10, 0, 0]}
          />
          <Line
            dataKey="traffic"
            name="Traffic %"
            stroke={chartStyle.traffic}
            strokeWidth={3}
            dot={{ fill: chartStyle.traffic, strokeWidth: 0 }}
          />
          <Line
            dataKey="check"
            name="Average check %"
            stroke={chartStyle.check}
            strokeWidth={3}
            dot={{ fill: chartStyle.check, strokeWidth: 0 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function ReviewSignalChart({ data }: { data: ReviewDatum[] }) {
  return (
    <ChartShell heightClassName="h-[26rem] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 12, right: 12 }}>
          <defs>
            <linearGradient id="overallFill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c2f17" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#bf6b3f" stopOpacity={0.95} />
            </linearGradient>
            <linearGradient id="serviceFill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#cab09c" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#ebd5c3" stopOpacity={0.98} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartStyle.grid} horizontal={false} />
          <XAxis
            type="number"
            domain={[3.8, 4.6]}
            stroke={chartStyle.text}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="city"
            width={110}
            stroke={chartStyle.text}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <Bar dataKey="overall" name="Overall score" fill="url(#overallFill)" radius={[0, 10, 10, 0]} />
          <Bar dataKey="service" name="Service score" fill="url(#serviceFill)" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}
