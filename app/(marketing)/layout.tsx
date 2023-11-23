type Props = {
  children: React.ReactElement;
};
export default function MarketingLayout({ children }: Props) {
  return (
    <div className="h-full bg-slate-100">
      <main className="pt-40 pb-20">{children}</main>
    </div>
  );
}
