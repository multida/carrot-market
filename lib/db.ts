import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

db.user.create({
  data: {
    username: "fdfs",
    phone: "12312412",
  },
});
export default db;
