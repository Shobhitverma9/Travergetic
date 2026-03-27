import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AnnouncementBar from "@/components/shared/AnnouncementBar";
import CustomCursor from "@/components/shared/CustomCursor";

export const metadata: Metadata = {
  title: "Travergetic Innovations | Travel & Hospitality Tech Solutions",
  description:
    "Travergetic Innovations Private Limited — Specialized technology company for travel, hotel & hospitality industry. AI, digital transformation, mobile apps & marketing.",
  keywords:
    "travel tech, hospitality technology, hotel software, AI booking, digital transformation, travel agency software",
  openGraph: {
    title: "Travergetic Innovations | Travel & Hospitality Tech Solutions",
    description:
      "AI-powered digital solutions for travel and hospitality businesses.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
