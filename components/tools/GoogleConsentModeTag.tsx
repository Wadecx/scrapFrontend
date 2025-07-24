"use client";

import Script from "next/script";

export const GoogleConsentModeTag = () => {
  if (process.env.NEXT_PUBLIC_ENV !== "production") return null;

  return (
    <Script
      id="gtag-consent"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            personalization_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
          });
          gtag("set", "ads_data_redaction", true);
          gtag("set", "url_passthrough", false);
        `,
      }}
    />
  );
};
