import { CookiesBanner, GoogleTagManager } from "@/components";
import { GoogleConsentModeTag } from "@/components/tools/GoogleConsentModeTag";
import { Footer, Header } from "@/layouts";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <body className="">
          <GoogleConsentModeTag />
          <CookiesBanner />
          <GoogleTagManager gtmId="" />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
