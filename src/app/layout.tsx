import type { Metadata } from "next";
import "./globals.css"; // Import global styles if needed

export const metadata: Metadata = {
  title: "JobHuntly", // No description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
