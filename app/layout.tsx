import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CodeBreakout v0.1",
  description: "The real way to build frontend apps, with a little AI magic!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head />
      <body className="bg-background text-foreground is-boxed has-animations boxed-container">
        <div className="body-wrap ">
          <main className="min-h-screen flex flex-col items-center">
            {children}
            <Analytics />
          </main>
        </div>
      </body>
    </html>
  );
}
