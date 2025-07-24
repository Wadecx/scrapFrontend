"use client";
import Image from "next/image";
import { useState } from "react";

type LoginProps = {
  onLoginSuccess: () => void;
};

export const Login = ({ onLoginSuccess }: LoginProps) => {
  const [pass, setPass] = useState("");
  const [pw, setPw] = useState(false);

  const connect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pass === process.env.NEXT_PUBLIC_PASSWORD) {
      onLoginSuccess();
      console.log("connect");
    } else setPw(true);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row md:items-center">
      <div className="md:w-2/5 w-full h-1/4 relative md:h-screen">
        <Image
          src="/assets/images/bg-primary.jpg"
          alt="fond"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 items-center text-left mt-8 md:mt-0">
        <h1 className="uppercase text-5xl font-black">ScrapME</h1>
        <form onSubmit={connect} className="flex flex-col gap-5">
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPass(e.target.value)}
            className="border-2 border-black p-2"
          />
          <button
            type="submit"
            className="bg-black text-white p-2 cursor-pointer text-xl rounded-lg"
          >
            Se connecter
          </button>
        </form>
        {pw && <p className="text-red-500">Mauvais mot de passe</p>}
      </div>
    </div>
  );
};
