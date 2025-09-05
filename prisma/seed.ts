// prisma/seed.ts

import { PrismaClient } from "@/app/generated/prisma";


const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      name: "Flat White",
      description: "Espresso with velvety steamed milk, a Kiwi favorite.",
      price: 4.5,
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and a thick milk foam topping.",
      price: 4.0,
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk and a light foam layer.",
      price: 4.2,
    },
    {
      name: "Long Black",
      description: "Hot water poured over espresso, strong and bold.",
      price: 3.8,
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate syrup and steamed milk.",
      price: 4.8,
    },
    {
      name: "Chai Latte",
      description: "Spiced tea blend with steamed milk, non-coffee option.",
      price: 4.5,
    },
    {
      name: "Hot Chocolate",
      description: "Rich chocolate drink with steamed milk, often topped with cream.",
      price: 4.0,
    },
    {
      name: "Espresso",
      description: "Strong single shot of espresso, pure coffee flavor.",
      price: 3.5,
    },
    {
      name: "Flat Mocha",
      description: "Flat white style coffee with chocolate, creamy and smooth.",
      price: 4.9,
    },
    {
      name: "Iced Coffee",
      description: "Chilled coffee with milk and optional sweetener.",
      price: 4.5,
    },
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
