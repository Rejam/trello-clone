import { Logo } from "@/components/logo";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 h-14 w-full border-b bg-white px-4 shadow-sm">
      <div className="mx-auto flex h-full max-w-4xl items-center justify-between gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex w-fit items-center justify-end gap-4">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get TC Free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
