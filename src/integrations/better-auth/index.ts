import { betterAuth } from "better-auth";
import { betterAuthSecret, serveUrl, webClientUrl } from "../../utils/environment";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
export const betterAuthServerClient =betterAuth({
    baseURL : serveUrl,
    trustedOrigins: [webClientUrl],
    secret: betterAuthSecret,
    database:prismaAdapter( PrismaClient, {
        provider: "postgresql",
    }),
    user:{
        modelName :"User",
    },
    session:{
        modelName :"Session",
    },
    account:{
        modelName :"Account",
    },
    verification:{
        modelName: "Verification",
    },
})
export default betterAuthServerClient;



