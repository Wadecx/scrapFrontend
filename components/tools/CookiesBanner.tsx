"use client";

import { cookieConfig } from "@/libs/cookie.config";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

type ConsentLevel = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export const CookiesBanner = () => {
  if (process.env.NEXT_PUBLIC_ENV !== "production") return null;

  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentLevel>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const savedConsent = Cookies.get("cookie_consent");
    if (!savedConsent) {
      setVisible(true);
    } else {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
      } catch {
        setVisible(true);
      }
    }
  }, []);

  const saveConsent = (newConsent: ConsentLevel) => {
    Cookies.set("cookie_consent", JSON.stringify(newConsent), {
      expires: 365,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    setVisible(false);
  };

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allConsent);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(minimalConsent);
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
  };

  const handlePreferenceChange = (
    category: keyof ConsentLevel,
    value: boolean
  ) => {
    const newConsent = { ...consent, [category]: value };
    setConsent(newConsent);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg z-50  text-sm border-t">
      <div className="relative">
        <div className="max-w-8/10 3xl:max-w-[1440px] pt-24 pb-12 relative mx-auto flex flex-col gap-4 ">
          <div className="flex flex-col gap-3 uppercase md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-light">{cookieConfig.message}</p>
            <div className="flex gap-2">
              <button
                className="bg-[#42277E] hover:bg-[#D6B4D6] text-white cursor-pointer active:scale-95 transition-all duration-300 uppercase font-bold px-6 py-2 rounded-xl shadow-[0_3.161px_3.161px_0_rgba(0,0,0,0.25)]"
                onClick={handleAcceptAll}
              >
                {cookieConfig.buttons.acceptAll}
              </button>
              <button
                className="bg-[#E2DAD0] hover:bg-[#FCC873] text-white cursor-pointer active:scale-95 transition-all duration-300 uppercase font-bold px-6 py-2 rounded-xl shadow-[0_3.161px_3.161px_0_rgba(0,0,0,0.25)]"
                onClick={handleRejectAll}
              >
                {cookieConfig.buttons.rejectAll}
              </button>
              <button
                className="font-light underline underline-offset-4 px-2 py-2 uppercase cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                Personnaliser
              </button>
            </div>
          </div>

          {showDetails && (
            <div className="border-t pt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black uppercase">
                      Cookies nécessaires
                    </h3>
                    <p className="text-gray-600 font-light">
                      Toujours actifs, nécessaires au fonctionnement du site
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.necessary}
                    disabled
                    className="h-4 w-4 accent-[#42277E]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black uppercase">
                      Cookies analytiques
                    </h3>
                    <p className="text-gray-600 font-light">
                      Nous aident à améliorer le site
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) =>
                      handlePreferenceChange("analytics", e.target.checked)
                    }
                    className="h-4 w-4 accent-[#42277E]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black uppercase">Cookies marketing</h3>
                    <p className="text-gray-600 font-light">
                      Utilisés pour la publicité personnalisée
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) =>
                      handlePreferenceChange("marketing", e.target.checked)
                    }
                    className="h-4 w-4 accent-[#42277E]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black uppercase">
                      Cookies de préférences
                    </h3>
                    <p className="text-gray-600 font-light">
                      Mémorisent vos choix sur le site
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.preferences}
                    onChange={(e) =>
                      handlePreferenceChange("preferences", e.target.checked)
                    }
                    className="h-4 w-4 accent-[#42277E]"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    className="bg-[#FCC873] text-white px-4 py-2 rounded-xl hover:bg-[#FFE3B3] ease-in-out transition-all uppercase font-bold cursor-pointer active:scale-95 duration-300 shadow-[0_3.161px_3.161px_0_rgba(0,0,0,0.25)]"
                    onClick={handleSavePreferences}
                  >
                    Enregistrer mes préférences
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-gray-500">
            <a
              href={cookieConfig.policyUrl}
              className="underline italic font-light"
            >
              En savoir plus sur notre politique de cookies
            </a>
          </div>
        </div>

        <img
          src="https://cloud-marketingbox.fr/very-berry/common/very-berry-mascotte-mac.png"
          alt="Very Berry mascotte"
          className="absolute bottom-0 left-0 w-48"
        />
      </div>
    </div>
  );
};
