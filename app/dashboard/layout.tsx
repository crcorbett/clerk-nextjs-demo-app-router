import { auth, currentUser } from "@clerk/nextjs/server";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const { userId } = auth().protect();
  const user = await currentUser();
  console.log(user);
  return <>{children}</>;
};
export default Layout;
