import { PlusIcon } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 h-14 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center gap-4 px-4 2xl:max-w-screen-xl">
        <Link href="/">
          <Logo />
        </Link>
        <Button
          variant="primary"
          size="sm"
          className="hidden h-auto rounded-sm px-2 py-1.5 md:block"
        >
          Create
        </Button>
        <Button
          variant="primary"
          size="sm"
          aria-label="Create"
          className="grid h-8 w-8 place-items-center rounded-sm md:hidden"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>

        <div className="ml-auto mt-[6px] flex items-center gap-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organisation/:id"
            afterSelectOrganizationUrl="/organisation/:id"
            afterLeaveOrganizationUrl="/select-organisation"
            appearance={{
              elements: {
                // fix root alignment in navbar
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                // size of logo
                organizationPreviewAvatarBox: {
                  background: "transparent",
                  height: "32px",
                  width: "32px",
                },
                // contain logo inside buttons
                organizationPreviewAvatarImage: {
                  objectFit: "contain",
                },
                // hide organisation name on small screens
                organizationPreviewTextContainer: {
                  width: 0,
                  marginLeft: "-2rem",
                  "@media(min-width: 400px)": {
                    width: "unset",
                    marginLeft: "unset",
                  },
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: "32px",
                  width: "32px",
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
}
