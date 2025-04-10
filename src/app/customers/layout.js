// components/LayoutWrapper.jsx
"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function LayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <DefaultLayout>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
        {loading ? <Loader /> : children}
      </div>
    </DefaultLayout>
  );
}
