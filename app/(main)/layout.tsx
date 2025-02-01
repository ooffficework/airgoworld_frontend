import { TopNav } from "@/components/Admin/General/TopNav";
import Footer from "@/components/Shared/Footer";
import { ServerDecrypt } from "@/helper/server";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await ServerDecrypt();

  return (
    <div>
      <TopNav response={response} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
