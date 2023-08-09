import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="container server w-full flex justify-between p-4">
      <h1>Logo</h1>
      <Link href={"write"}>Write</Link>
    </div>
  );
};

export default NavigationBar;
