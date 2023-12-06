import { PrismaClient } from "@prisma/client";

let _db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}

_db = global.__db;

export { _db };
