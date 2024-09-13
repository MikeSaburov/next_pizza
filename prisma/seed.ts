import {hashSync} from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients } from "./constants";


// генерируем даннные
async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "admin test",
                email: "admin@test.ru",
                password: hashSync("admin",10),
                verified: new Date(),
                role: "ADMIN",
            },
            {
                fullName: "user test",
                email: "usern@test.ru",
                password: hashSync("user",10),
                verified: new Date(),
                role: "USER",
            },
        ]
    })
    await prisma.category.createMany({
        data: categories
    })
    await prisma.ingredient.createMany({
       data: ingredients
    }

    )
}



// очищаем даннные
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Pizza" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }

}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})