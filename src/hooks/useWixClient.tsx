"use client";
import { wixClientContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  const wixClient = useContext(wixClientContext);
  return wixClient;
};
