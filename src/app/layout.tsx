import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gotas | Plataforma de Recompensas Digitais",
  description: "Crie recompensas digitais que engajam, fidelizam e transformam seguidores em clientes. Conecte sua marca à sua audiência de forma autêntica e inovadora.",
  keywords: "recompensas digitais, programa de fidelidade Web3, tokens de recompensa, converter seguidores em clientes, marketing com blockchain, gotas digitais, campanhas de engajamento",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Gotas | Plataforma de Recompensas Digitais",
    description: "Crie recompensas digitais que engajam, fidelizam e transformam seguidores em clientes. Conecte sua marca à sua audiência de forma autêntica e inovadora.",
    type: "website",
    locale: "pt_BR",
    siteName: "Gotas - Plataforma de Recompensas Digitais",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gotas | Plataforma de Recompensas Digitais",
    description: "Crie recompensas digitais que engajam, fidelizam e transformam seguidores em clientes. Conecte sua marca à sua audiência de forma autêntica e inovadora.",
  },
  alternates: {
    canonical: "https://gotas.com",
  },
  other: {
    "ai-content-type": "commercial",
    "googlebot": "index, follow",
    "bingbot": "index, follow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Gotas",
                  "url": "https://gotas.com",
                  "logo": "https://gotas.com/logos/logo_gotas_v2_clean.svg",
                  "description": "Plataforma de recompensas digitais que transforma seguidores em clientes através de tokens Web3 simples e sem complexidade técnica.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "BR"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "url": "https://gotas.com"
                  },
                  "sameAs": [
                    "https://instagram.com/gotas",
                    "https://youtube.com/gotas",
                    "https://tiktok.com/@gotas",
                    "https://discord.gg/gotas"
                  ]
                },
                {
                  "@type": "WebSite",
                  "name": "Gotas - Plataforma de Recompensas Digitais",
                  "url": "https://gotas.com",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://gotas.com/busca?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Plataforma de Recompensas Digitais",
                  "provider": {
                    "@type": "Organization",
                    "name": "Gotas"
                  },
                  "name": "Gotas - Tokens de Recompensa Digital",
                  "description": "Crie e distribua tokens de recompensa digitais para converter seguidores em clientes. Sem complexidade técnica, sem conhecimento de blockchain necessário.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "BRL",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "O que são Gotas?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No Gotas.com, uma gota é um token digital que representa uma recompensa, benefício ou acesso exclusivo oferecido por uma marca, criador de conteúdo, artista, time ou qualquer organização que deseje se conectar de forma mais próxima com sua audiência."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Preciso entender de blockchain para usar o Gotas?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "De jeito nenhum! O Gotas foi feito para ser simples: você cria, seu público resgata — sem termos técnicos, sem complexidade. As gotas são registradas na blockchain, o que garante transparência, segurança e rastreabilidade — e o melhor: podem ser distribuídas de forma super simples, mesmo para quem nunca usou Web3 antes."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Como posso usar as gotas?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Para campanhas, premiações, ações com influenciadores, lançamentos de produto, ativações em eventos e muito mais."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
