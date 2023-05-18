import "./globals.css";
import { Comic_Neue } from "next/font/google";
import NavMenu from "./NavMenu";

const inter = Comic_Neue({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className.concat(
          " min-h-screen border-4 border-gray-400 text-xl"
        )}
      >
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
