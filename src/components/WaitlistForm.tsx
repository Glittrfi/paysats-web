"use client";

import { useState } from "react";
import Script from "next/script";

const LAUNCHLIST_ACTION = "https://getlaunchlist.com/s/w5vnPk";

const SAVING_GOALS = [
  "Emergency fund (BTC)",
  "Travel",
  "Rent / Housing",
  "Gadgets & tech",
  "Wedding",
  "Education",
  "Business / Side hustle",
  "Long-term BTC savings",
  "Other",
];

const USER_TYPES = [
  { value: "new", label: "New to neobanks" },
  { value: "existing", label: "Already use digital banking" },
  { value: "power", label: "Power saver" },
] as const;

export function WaitlistForm() {
  const [userType, setUserType] = useState<string>("");

  return (
    <>
      <form
        action={LAUNCHLIST_ACTION}
        method="post"
        target="_blank"
        className="launchlist-form space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg sm:p-10"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+62 812 3456 7890"
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          />
        </div>
        <div>
          <label
            htmlFor="saving_for"
            className="block text-sm font-medium text-gray-700"
          >
            What are you mainly saving for?
          </label>
          <select
            id="saving_for"
            name="saving_for"
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          >
            <option value="">Select an option</option>
            {SAVING_GOALS.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="block text-sm font-medium text-gray-700">
            I am…
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            {USER_TYPES.map(({ value, label }) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="user_type"
                  value={value}
                  checked={userType === value}
                  onChange={() => setUserType(value)}
                  className="h-4 w-4 border-gray-300 text-arka-primary focus:ring-arka-primary"
                />
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-arka-primary py-4 text-base font-semibold text-white shadow-lg shadow-arka-primary/25 transition-all hover:bg-arka-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
        >
          Join Waitlist
        </button>
      </form>
      <a
        href="https://getlaunchlist.com/?ref=arka"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block text-center text-xs text-gray-400 hover:text-gray-600 transition"
      >
        Waitlist powered by LaunchList
      </a>
      <Script
        src="https://getlaunchlist.com/js/widget-diy.js"
        strategy="lazyOnload"
      />
    </>
  );
}
