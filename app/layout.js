import { Oswald, Special_Elite, Reenie_Beanie } from "next/font/google";
import { perfil } from "../data/perfil";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], variable: "--f-display" });
const body = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--f-body" });
const hand = Reenie_Beanie({ subsets: ["latin"], weight: "400", variable: "--f-hand" });

export const metadata = {
  title: `${perfil.nome} | Anotações`,
  description: perfil.resumoCurto,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body><main>{children}</main></body>
    </html>
  );
}
