import Navbar from "@/components/navbar/navbar";
import Texture from "@/components/root-texture/texture";
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishab Yadav",
  description: "Full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen w-full">
            <nav className="fixed z-50 top-8 left-1/2 -translate-x-1/2">
              <Navbar />
            </nav>
            <div className="absolute inset-0 flex justify-center blur-3xl z-10 pointer-events-none">
              <Texture />
            </div>
            <main className="relative h-screen w-screen z-20 bg-white/50 dark:bg-black/70">
              {children}
            </main>
          </div>
        </NextThemesProvider>
      </body>
    </html>
  );
}
