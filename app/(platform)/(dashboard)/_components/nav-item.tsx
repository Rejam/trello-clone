"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Organisation } from "@/types/organisation";
import {
  ActivityIcon,
  CreditCardIcon,
  LayoutIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  isActive: boolean;
  isExpanded: boolean;
  organisation: Organisation;
  onExpand: (id: string) => void;
};

function getRoutes(id: string) {
  return [
    {
      label: "Boards",
      icon: LayoutIcon,
      href: `/organisation/${id}`,
    },
    {
      label: "Activity",
      icon: ActivityIcon,
      href: `/organisation/${id}/activity`,
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      href: `/organisation/${id}/settings`,
    },
    {
      label: "Billing",
      icon: CreditCardIcon,
      href: `/organisation/${id}/billing`,
    },
  ];
}
export const NavItem = ({
  organisation,
  onExpand,
  isActive,
  isExpanded,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <AccordionItem value={organisation.id}>
      <AccordionTrigger
        onClick={() => onExpand(organisation.id)}
        className={cn(
          "flex items-center gap-x-2 rounded-md p-1.5 text-start text-neutral-700 no-underline transition-colors hover:bg-neutral-500/10 hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700",
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="relative h-7 w-7">
            <Image
              width="28"
              height="28"
              src={organisation.imageUrl}
              alt="organisation"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="text-sm font-medium">{organisation.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {getRoutes(organisation.id).map((route) => {
          return (
            <Button
              key={route.href}
              size="sm"
              className={cn(
                "mb-1 w-full justify-start pl-10 font-normal",
                pathname === route.href && "bg-sky-500/10 text-sky-700",
              )}
              variant="ghost"
              asChild
            >
              <Link href={route.href}>
                {<route.icon className="mr-2 h-4 w-4" />} {route.label}
              </Link>
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
