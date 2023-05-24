import Link from "next/link";
import { Switch } from "@/components/Switch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/photos/1">modal</Link>
      現在開発中です
      <Switch />
    </main>
  );
}
