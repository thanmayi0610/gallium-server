

import { betterAuth } from "better-auth";
import { betterAuthSecret, serverUrl, webClientUrl } from "../../utils/environment";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../generated/prisma";

const prismaClient = new PrismaClient();
const betterAuthServerClient = betterAuth({
  baseURL: serverUrl,
  trustedOrigins: [webClientUrl],
  secret: betterAuthSecret,
  database: prismaAdapter(prismaClient, {
    provider: "postgresql",
  }),
  user: {
    modelName: "User",
  },
  session: {
    modelName: "Session",
  },
  account: {
    modelName: "Account",
  },
  verification: {
    modelName: "Verification",
  },
  emailAndPassword: {
    enabled: true,
  },
});

export default betterAuthServerClient;