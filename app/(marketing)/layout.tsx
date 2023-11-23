import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

type Props = {
  children: React.ReactElement;
};
export default function MarketingLayout({ children }: Props) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pb-20 pt-40">{children}</main>
      <Footer />
    </div>
  );
}
