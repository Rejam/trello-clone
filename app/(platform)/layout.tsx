import { ClerkProvider } from "@clerk/nextjs";

type Props = {
  children: React.ReactElement;
};
export default function PlatformLayout({ children }: Props) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
