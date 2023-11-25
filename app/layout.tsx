import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Trello Clone",
    template: `%s | Trello Clone`,
  },
  description: "Testing Next.js App Router",
  icons: [
    { url: "/logo.svg", href: "/logo.svg" },
    { url: "/logo.png", href: "/logo.png" },
  ],
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
