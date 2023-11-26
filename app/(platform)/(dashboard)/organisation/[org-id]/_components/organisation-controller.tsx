"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const OrganisationController = () => {
  const { setActive } = useOrganizationList();
  const params = useParams<{ "org-id": string }>();
  const orgId = params["org-id"];

  useEffect(() => {
    if (!setActive) return;
    if (!orgId || typeof orgId !== "string") return;
    // try to set organisation to the id found in URL
    setActive({ organization: orgId });
  }, [setActive, orgId]);

  return null;
};
