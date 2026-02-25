"use client";

import { useEffect, useState } from "react";

const INDODAX_URL = "https://indodax.com/api/ticker/btcidr";

interface PriceData {
  last: number;
  high: number;
  low: number;
}

export function BtcTicker() {
  const [data, setData] = useState<PriceData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPrice() {
      try {
        const res = await fetch(INDODAX_URL);
        if (!res.ok) return;
        const json = await res.json();
        if (cancelled) return;
        const t = json.ticker;
        setData({
          last: Number(t.last),
          high: Number(t.high),
          low: Number(t.low),
        });
      } catch {
        /* silent — ticker is non-critical */
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 30_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (!data) return null;

  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(data.last);

  const mid = (data.high + data.low) / 2;
  const changeFromMid = ((data.last - mid) / mid) * 100;
  const isUp = changeFromMid >= 0;

  return (
    <div className="hidden items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium sm:flex">
      <span className="text-orange-500">₿</span>
      <span className="text-gray-700">{formatted}</span>
      <span className={isUp ? "text-green-600" : "text-red-500"}>
        {isUp ? "↑" : "↓"} {Math.abs(changeFromMid).toFixed(1)}%
      </span>
    </div>
  );
}
