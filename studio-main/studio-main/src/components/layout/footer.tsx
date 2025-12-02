import Link from "next/link";
import Logo from "./logo";


export default function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Pallavi Krishna Apps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
