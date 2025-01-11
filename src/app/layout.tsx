import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRUO - Confederation of Republican Union and Order",
  description: "Official website of Confederation of Republican Union and Order",
  keywords: "gerenciamento de ativos, Inventário de TI, TI, tecnologia, ITAM, Tecnologia da informação, asset management, ITAS, software de gerenciamento de TI, Asset Panda, Snipe-IT, Asset Management, programação, notebook, Dell, Lenovo, Samsung, Notebook Dell, Notebook Lenovo, Notebooks baratos, Como gerenciar ativos tecnológicos, como fazer uma plailha de ativos tecnológicos, ITAS, IT Asset Software, gestão de ativos industriais, gerenciamento de tecnologias, gestão de ativos itil, gerenciamento de ativos de ti, gestão de ativos de ti open source, gestão de ativos ti, ITAM, O que é a gestão de ativos de TI (ITAM), Gestão de TI, asset management companies, asset management group, cruo, como fazer um invetário de TI, BlueTally, Alternativa Snipe-IT, Alternativa BlueTally, Como fazer um inventário de TI com excel, Como o ITAM Reduz Custos e Melhora a Eficiência, O que é Gerenciamento de Ativos Tecnológico, SaaS, Software Corporativo, ERP, CRM de gestão",
  icons: {
    icon: "/CRUO_logo.png"
  },
  authors: {
    name: "Confederation of Republican Union and Order",
    url: "https://www.cruo.org"
  },
  openGraph: {
    title: "CRUO - Confederation of Republican Union and Order",
    description: "Official website of Confederation of Republican Union and Order",
    url: "https://www.cruo.org",
    siteName: "cruo",
    images: [
      {
        url: "/opengraph.png",
        width: 800,
        height: 600,
        alt: "cruo logo",
      },
    ],
    authors: "cruo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cruo",
    title: "CRUO - Confederation of Republican Union and Order",
    description: "Official website of Confederation of Republican Union and Order",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "cruo logo+",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cruo.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/CRUO_logo.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
