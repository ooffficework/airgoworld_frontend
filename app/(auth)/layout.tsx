import { ServerDecrypt } from "@/helper/server";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await ServerDecrypt();
    if (response.data !== null){
        redirect('/')
    }
  return (
    <div>
      <div className="">{children}</div>
    </div>
  );
}
