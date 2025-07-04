import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishab Yadav",
  description: "Full stack web developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen  w-screen">
            <nav className="fixed z-50 w-fit h-fit bottom-8 lg:top-8  left-1/2 -translate-x-1/2">
              <Navbar />
            </nav>
            <div className="fixed overflow-hidden inset-0 flex justify-center blur-3xl z-10 pointer-events-none">
              <div className="h-full bg-gradient-blue-to-white-inverted dark:bg-gradient-blue-to-black-inverted lg:bg-gradient-blue-to-white lg:dark:bg-gradient-blue-to-black w-full mx-auto flex"></div>
            </div>
            <main className="absolute h-screen w-screen scrollbar-none overflow-y-auto scroll-smooth  overflow-x-hidden z-20 bg-white/50 dark:bg-black/70">
              {children}
            </main>
          </div>
        </NextThemesProvider>
      </body>
    </html>
  );
}
