"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Organisation } from "@/types/organisation";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { NavItem } from "./nav-item";

type Props = {
  storageKey: "tc-sidebar-state" | "tc-sidebar-mobile-state";
};
export const Sidebar = ({ storageKey }: Props) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {},
  );
  const { organization: activeOrg, isLoaded: isLoadedOrg } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  const toggleExpanded = (id: string) => {
    setExpanded((cur) => ({
      ...cur,
      [id]: !cur[id],
    }));
  };

  const expandedAccordions = Object.entries(expanded).reduce(
    getIdsWithValueTrue,
    [],
  );

  const isLoading =
    !isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading;

  if (isLoading) return <Skeleton className="h-96 w-full" />;
  return (
    <>
      <div className="mb-1 flex items-center text-xs font-medium">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          className="ml-auto"
          variant="ghost"
        >
          <Link href="/select-organisation">
            <PlusIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={expandedAccordions}
        className="space-y-2"
      >
        {userMemberships.data?.map(({ organization }) => {
          return (
            <NavItem
              key={organization.id}
              isActive={organization.id == activeOrg?.id}
              isExpanded={expanded[organization.id]}
              organisation={organization as Organisation}
              onExpand={() => toggleExpanded(organization.id)}
            />
          );
        })}
      </Accordion>
    </>
  );
};

function getIdsWithValueTrue(
  acc: string[],
  [key, value]: [key: string, value: boolean],
) {
  if (value) return [...acc, key];
  return acc;
}
