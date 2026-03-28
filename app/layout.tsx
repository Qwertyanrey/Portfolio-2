import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Иванов И.И. - Frontend-разработчик",
  description: "Резюме frontend-разработчика. Опыт 5 лет, React, TypeScript, Next.js",
  keywords: ["frontend", "разработчик", "React", "TypeScript", "резюме"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
