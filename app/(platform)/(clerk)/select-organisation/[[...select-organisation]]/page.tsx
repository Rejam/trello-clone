import { OrganizationList, UserButton } from "@clerk/nextjs";

export default function SelectOrganisationPage() {
  return (
    <div className="-mt-7 flex flex-col items-center justify-center gap-7">
      <UserButton afterSignOutUrl="/" />
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/organisation/:id"
        afterSelectOrganizationUrl="/organisation/:id"
      />
    </div>
  );
}
