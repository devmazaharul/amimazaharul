import { site_data } from "@/lib/site_data";
import React from "react";

export default function Footer() {
  const { footer } = site_data;
  return (
    <div>
      <p>{footer}</p>
    </div>
  );
}
