// prisma/seed.ts

import { PrismaClient } from "@/app/generated/prisma";


const prisma = new PrismaClient();

async function main() {
const products = [
  { name: "Short Black", price: 4.5, description: "A rich, strong espresso served without milk." },
  { name: "Long Black", price: 4.5, description: "Hot water poured over a double shot of espresso for a bold, smooth coffee." },
  { name: "Long Black", price: 5.0, description: "A larger serve of long black with extra intensity." },
  { name: "Flat White", price: 5.0, description: "A smooth espresso topped with velvety steamed milk." },
  { name: "Flat White", price: 5.5, description: "A stronger flat white with an extra shot of espresso." },
  { name: "Mocha", price: 5.5, description: "A delicious blend of espresso, chocolate, and steamed milk." },
  { name: "Mocha", price: 6.0, description: "A large mocha with extra chocolatey richness." },
  { name: "Chocolate", price: 5.0, description: "Classic hot chocolate made with steamed milk and cocoa." },
  { name: "Chocolate", price: 5.5, description: "A larger serve of hot chocolate for extra comfort." },
  { name: "Iced Americano", price: 5.5, description: "Chilled espresso over ice with cold water, refreshing and bold." },
  { name: "Iced Latte", price: 6.0, description: "Espresso poured over ice and milk for a smooth, cold coffee." },
  { name: "Ice Mocha", price: 6.5, description: "Iced coffee blended with chocolate and milk, cool and sweet." },
  { name: "Iced Chocolate", price: 6.0, description: "A refreshing chocolate drink over ice with milk." },
  { name: "Vietnamese Latte", price: 7.0, description: "A sweet and strong coffee made with condensed milk and espresso." },
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
