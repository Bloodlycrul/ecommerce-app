import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const getCookie = cookies();
    refreshToken = JSON.parse(getCookie.get("refreshToken")?.value || "{}");
  } catch (error) {
    console.error(error);
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: "4f81bf48-5a3b-4e86-ae45-757b88141cfa",
      tokens: {
        refreshToken,
        accessToken: {
          value: "",
          expiresAt: 0,
        },
      },
    }),
  });

  return wixClient;
};
