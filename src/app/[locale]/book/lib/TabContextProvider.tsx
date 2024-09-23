"use client";

import { createContext, useState } from "react";

export const TabContext = createContext<any>(null);

export default function TabContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeKey, setActiveKey] = useState("1");

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <TabContext.Provider value={{ handleTabChange, activeKey }}>
      {children}
    </TabContext.Provider>
  );
}
