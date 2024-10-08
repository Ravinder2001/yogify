import { Inter } from "@next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./sessionProviders";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Breathe Yoga",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <AOSInit />
      <body>
        <AuthProvider>{children} </AuthProvider>
      </body>
    </html>
  );
}
