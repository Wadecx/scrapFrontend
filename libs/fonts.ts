import { Montserrat } from "next/font/google";

const monstserrat = Montserrat({
  style: "normal",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const fontVariables = monstserrat.variable;
