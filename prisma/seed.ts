// prisma/seed.ts

import { PrismaClient } from "@/app/generated/prisma";


const prisma = new PrismaClient();

async function main() {
  const products = [
    { name: "Short Black", price: 4.5 },
    { name: "Long Black", price: 4.5 },
    { name: "Long Black", price: 5.0 },
    { name: "Flat White", price: 5.0 },
    { name: "Flat White", price: 5.5 },
    { name: "Mocha", price: 5.5 },
    { name: "Mocha", price: 6.0 },
    { name: "Chocolate", price: 5.0 },
    { name: "Chocolate", price: 5.5 },
    { name: "Iced Americano", price: 5.5 },
    { name: "Iced Latte", price: 6.0 },
    { name: "Ice Mocha", price: 6.5 },
    { name: "Iced Chocolate", price: 6.0 },
    { name: "Vietnamese Latte", price: 7.0 },
  ];


  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log("Seed finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
