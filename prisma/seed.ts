import { create } from 'zustand';
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
                password: "user",
                role: "USER",
            },
        ]
    })
}

// очищаем даннные
async function down() {

}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }

}