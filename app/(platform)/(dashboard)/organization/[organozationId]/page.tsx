import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

const OrganizationIdPage = (props: Props) => {
  const { userId, orgId } = auth();
  return <div>Organization detail</div>;
};

export default OrganizationIdPage;
