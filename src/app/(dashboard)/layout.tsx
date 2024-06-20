import DashBoardLayout from "@/components/Layout/Dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tripox Dashboard- Home ",
  description:
    " This is ADmin Dashboard and Its create by Tripox . Its all open source Project and its free to use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DashBoardLayout>{children}</DashBoardLayout>
    </html>
  );
}
