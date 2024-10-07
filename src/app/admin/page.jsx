import { getServerSession } from "next-auth";
import React from "react";
import { authoptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginBox from "../../components/LoginBox/LoginBox";

async function Page() {
  const session = await getServerSession(authoptions);

  if (session) redirect("/admin/dashboard");

  return <LoginBox />;
}

export default Page;
