import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-slate-100 px-4 py-2">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex w-fit flex-col items-center justify-end gap-x-4 gap-y-2 sm:flex-row ">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </footer>
  );
};
