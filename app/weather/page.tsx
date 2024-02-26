import Link from "next/link";
import React from "react";

const landingPage = () => {
  return (
    <div className="text-black">
      landing-page
      <Link href="/weather">Weather</Link>
    </div>
  );
};

export default landingPage;
