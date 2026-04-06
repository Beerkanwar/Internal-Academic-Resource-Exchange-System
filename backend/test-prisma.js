const { PrismaClient } = require('@prisma/client');
try {
  const prisma = new PrismaClient();
  console.log("Prisma instantiated!");
} catch (err) {
  console.error(err);
}
