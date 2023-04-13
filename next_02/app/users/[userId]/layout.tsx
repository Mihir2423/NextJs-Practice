import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex  flex-col  justify-between p-5">
        <h2 className="font-bold text-2xl">
          <Link href="/users">Go Back</Link>
        </h2>
      </nav>
      {children}
    </>
  );
}
