import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrganisationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organisation/:id"
      afterSelectOrganizationUrl="/organisation/:id"
    />
  );
}
