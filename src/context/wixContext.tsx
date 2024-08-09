"use client";

import { createContext, ReactNode } from "react";
import { createClient, OAuthStrategy, TokenRole } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
export const myWixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: "4f81bf48-5a3b-4e86-ae45-757b88141cfa",
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof myWixClient;
export const wixClientContext = createContext<WixClient>(myWixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <wixClientContext.Provider value={myWixClient}>
      {children}
    </wixClientContext.Provider>
  );
};
