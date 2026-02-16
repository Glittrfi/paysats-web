"use client";

import { useState, FormEvent } from "react";

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

type UserType = (typeof USER_TYPES)[number]["value"];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [userType, setUserType] = useState<UserType | "">("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    savingFor: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /*
     * CONNECT TO YOUR WAITLIST API: Replace this block with your backend call.
     * Example:
     *   const res = await fetch('/api/waitlist', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ ...formData, userType }),
     *   });
     *   if (!res.ok) throw new Error('Failed');
     *   setSubmitted(true);
     */

    // Frontend-only simulation (remove when API is connected)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-arka-primary/20 bg-arka-surface/80 p-8 text-center">
        <p className="text-2xl font-display font-semibold text-arka-primary-dark">
          You&apos;re in.
        </p>
        <p className="mt-2 text-gray-600">
          We&apos;ll email you when Arka opens for new BTC savings accounts.
        </p>
        <a
          href="#"
          className="mt-6 inline-block text-sm font-semibold text-arka-primary hover:text-arka-primary-dark underline"
        >
          Share Arka with a friend
        </a>
        <p className="mt-2 text-xs text-gray-400">
          (Placeholder link—add your referral flow later)
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg sm:p-10"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          placeholder="Your name"
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
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          placeholder="you@example.com"
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
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
          className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          placeholder="+62 812 3456 7890"
        />
      </div>
      <div>
        <label
          htmlFor="savingFor"
          className="block text-sm font-medium text-gray-700"
        >
          What are you mainly saving for?
        </label>
        <select
          id="savingFor"
          name="savingFor"
          value={formData.savingFor}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, savingFor: e.target.value }))
          }
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
                name="userType"
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
        Join the waitlist
      </button>
    </form>
  );
}
