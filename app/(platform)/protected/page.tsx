import { currentUser } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

const ProtectedPage = async (props: Props) => {
  const user = await currentUser();

  return <div>ProtectedPage</div>;
};

export default ProtectedPage;
