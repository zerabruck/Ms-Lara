"use client";
import { TABNAMES } from "./TabBar";
import { createContext, useState, ReactNode } from "react";

export const TabContext = createContext<{
  currentTab: TABNAMES;
  setCurrentTab: (tabName: TABNAMES) => void;
} | null>(null);

interface TabContextProviderProps {
  children: ReactNode;
}

export default function TabContextProvider({
  children,
}: TabContextProviderProps) {
  const [currentTab, setCurrentTab] = useState<TABNAMES>(TABNAMES.HEAD);

  function setTab(tabName: TABNAMES) {
    setCurrentTab(tabName);
  }

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab: setTab }}>
      {children}
    </TabContext.Provider>
  );
}
