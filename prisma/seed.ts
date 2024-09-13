import {bc} from "bcryptjs"
import { prisma } from "./prisma-client";


// генерируем даннные
async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "admin",
                email: "admin@test.ru",
                password: hashSync("admin",10),
                verified: new Date(),
                role: "ADMIN",
            },
            {
                fullName: "user",
                email: "usern@test.ru",
                password: hashSync("user",10),
                verified: new Date(),
                role: "USER",
            },
        ]
    })
}

// очищаем даннные
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }

}