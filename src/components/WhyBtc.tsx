"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useI18n } from "@/lib/i18n";
import { AnimateIn } from "./AnimateIn";

const BTC_HISTORY = [
  { date: "2015", price: 431 },
  { date: "2016", price: 964 },
  { date: "2017", price: 14156 },
  { date: "2018", price: 3743 },
  { date: "2019", price: 7194 },
  { date: "2020", price: 29002 },
  { date: "2021", price: 46306 },
  { date: "2022", price: 16548 },
  { date: "2023", price: 42265 },
  { date: "2024", price: 93429 },
  { date: "2025", price: 87509 },
];

const formatPrice = (value: number) => {
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}k`;
  return `$${value}`;
};

export function WhyBtc() {
  const { t } = useI18n();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateIn animation="fade-right">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {t("whyBtc.title")}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {t("whyBtc.subtitle")}
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-arka-primary" />
                  <span className="text-gray-600">
                    <strong className="text-gray-900">{t("whyBtc.point1.title")}</strong>{" "}
                    {t("whyBtc.point1.desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-arka-primary" />
                  <span className="text-gray-600">
                    <strong className="text-gray-900">{t("whyBtc.point2.title")}</strong>{" "}
                    {t("whyBtc.point2.desc")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-arka-primary" />
                  <span className="text-gray-600">
                    <strong className="text-gray-900">{t("whyBtc.point3.title")}</strong>{" "}
                    {t("whyBtc.point3.desc")}
                  </span>
                </li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn animation="fade-left" delay={200}>
            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm">
              <p className="mb-4 text-sm font-medium text-gray-600">
                {t("whyBtc.chartLabel")}
              </p>
              <div className="h-[240px] min-h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%" minHeight={200}>
                  <AreaChart
                    data={BTC_HISTORY}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="btcChartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#F07E63" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#F07E63" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#E5E7EB"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#6B7280", fontSize: 12 }}
                      tickFormatter={formatPrice}
                      width={45}
                      domain={["auto", "auto"]}
                    />
                    <Tooltip
                      formatter={(value: number | undefined) =>
                        value != null ? [formatPrice(value), "BTC"] : ""
                      }
                      labelFormatter={(label) => `${t("whyBtc.chartYear")}: ${label}`}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #E5E7EB",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      labelStyle={{ fontWeight: 600, color: "#111827" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#F07E63"
                      strokeWidth={2}
                      fill="url(#btcChartGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                {t("whyBtc.disclaimer")}
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
