import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto flex min-h-full max-w-lg flex-col gap-y-4 p-4">
          <header className="rounded-2xl border p-4">
            <nav>
              <ul className="flex justify-center gap-x-4">
                <li>
                  <Link className="text-base" href="/for-sale">
                    For Sale
                  </Link>
                </li>
                <li>
                  <Link className="text-base" href="/to-rent">
                    To Rent
                  </Link>
                </li>
                <li>
                  <Link className="text-base" href="/new-homes">
                    New Homes
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="rounded-2xl border p-4">
            <nav>
              <ul>
                <ul className="flex gap-x-4">
                  <li>
                    <Link className="text-base" href="/">
                      /
                    </Link>
                  </li>
                </ul>
              </ul>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}