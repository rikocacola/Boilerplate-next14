"use client";

import { createStore, Provider } from "jotai";

const AtomProvider = ({ children }: { children: React.ReactNode }) => {
  const myStore = createStore();
  return <Provider store={myStore}>{children}</Provider>;
};

export default AtomProvider;
