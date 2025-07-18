import { Spinner } from "@heroui/react";
import React, { Suspense } from "react";

export default function TransactionLayout({ children }) {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
}
