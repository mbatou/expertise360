import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backoffice — Expertise 360",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-svh bg-surface text-ink">{children}</div>;
}
