"use client";

import { Scraper } from "@/containers/Home/scraper";
import { Login } from "@/containers/Login/Login";
import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "",
//   description: "",
// };

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Scraper />
      )}
    </div>
  );
}
