import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.islamtec.com"), // replace with real domain
  title: {
    default: "Islamtec | Learn Qur’an with Tajweed",
    template: "%s | Islamtec",
  },
  description:
    "Islamtec provides structured Qur’an and Tajweed education for children and adults through authentic online instruction.",
  openGraph: {
    title: "Islamtec | Learn Qur’an with Tajweed",
    description:
      "Structured Qur’an and Tajweed programs designed for children and adults.",
    url: "https://www.islamtec.com",
    siteName: "Islamtec",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-textDark`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
