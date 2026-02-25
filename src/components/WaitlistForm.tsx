"use client";

import { useState } from "react";
import Script from "next/script";
import { useI18n } from "@/lib/i18n";

const LAUNCHLIST_ACTION = "https://getlaunchlist.com/s/w5vnPk";

const SAVING_GOAL_KEYS = [
  "goal.emergency",
  "goal.travel",
  "goal.housing",
  "goal.gadgets",
  "goal.wedding",
  "goal.education",
  "goal.business",
  "goal.longterm",
  "goal.other",
] as const;

export function WaitlistForm() {
  const [userType, setUserType] = useState<string>("");
  const { t } = useI18n();

  const userTypes = [
    { value: "new", labelKey: "form.userNew" as const },
    { value: "existing", labelKey: "form.userExisting" as const },
    { value: "power", labelKey: "form.userPower" as const },
  ];

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
            {t("form.name")} <span className="text-gray-400">{t("form.optional")}</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t("form.namePlaceholder")}
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t("form.email")} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("form.emailPlaceholder")}
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            {t("form.phone")} <span className="text-gray-400">{t("form.optional")}</span>
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
            {t("form.savingFor")}
          </label>
          <select
            id="saving_for"
            name="saving_for"
            className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-arka-primary focus:ring-1 focus:ring-arka-primary"
          >
            <option value="">{t("form.selectOption")}</option>
            {SAVING_GOAL_KEYS.map((key) => (
              <option key={key} value={t(key)}>
                {t(key)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="block text-sm font-medium text-gray-700">
            {t("form.iAm")}
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            {userTypes.map(({ value, labelKey }) => (
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
                <span className="text-sm text-gray-700">{t(labelKey)}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-arka-primary py-4 text-base font-semibold text-white shadow-lg shadow-arka-primary/25 transition-all hover:bg-arka-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-arka-primary focus:ring-offset-2"
        >
          {t("form.submit")}
        </button>
      </form>
      <Script
        src="https://getlaunchlist.com/js/widget-diy.js"
        strategy="lazyOnload"
      />
    </>
  );
}
