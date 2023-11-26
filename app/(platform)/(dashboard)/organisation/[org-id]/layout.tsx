import { OrganisationController } from "./_components/organisation-controller";

type Props = {
  children: React.ReactNode;
};
export default function OrganisationIdLayout({ children }: Props) {
  return (
    <>
      <OrganisationController />
      {children}
    </>
  );
}
