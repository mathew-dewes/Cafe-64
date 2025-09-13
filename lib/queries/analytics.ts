"use server"

import prisma from "../db/prisma";

export async function getStats(){
      const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const thisWeek = new Date(now.getFullYear(), now.getMonth(), diff);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [dailyRevenue, weeklyRevenue, monthlyRevenue, ordersByStatus, avgOrderValue, totalOrders] = await Promise.all([
    prisma.order.aggregate({ _sum: { total_price: true }, where: { created_at: { gte: today }, status: "complete" } }),
    prisma.order.aggregate({ _sum: { total_price: true }, where: { created_at: { gte: thisWeek }, status: "complete" } }),
    prisma.order.aggregate({ _sum: { total_price: true }, where: { created_at: { gte: thisMonth }, status: "complete" } }),
    prisma.order.groupBy({ by: ["status"], _count: { _all: true } }),
    prisma.order.aggregate({ _avg: { total_price: true } }),
    prisma.order.count()
  ]);

  return {
    dailyRevenue: dailyRevenue._sum.total_price ?? 0,
    weeklyRevenue: weeklyRevenue._sum.total_price ?? 0,
    monthlyRevenue: monthlyRevenue._sum.total_price ?? 0,
    averageOrderValue: avgOrderValue._avg.total_price ?? 0,
    openOrders: ordersByStatus.find(o => o.status !== "complete")?._count._all ?? 0,
    completedOrders: ordersByStatus.find(o => o.status === "complete")?._count._all ?? 0,
    canceledOrders: "TBC",
    totalOrders
  };
}

export async function getProductInsights() {
  const [topProductsRaw, lowProductsRaw] = await Promise.all([
    prisma.orderItem.groupBy({
      by: ["product_id"],
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: "desc" } },
      take: 5
    }),
    prisma.orderItem.groupBy({
      by: ["product_id"],
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: "asc" } },
      take: 5
    })
  ]);

  const [topSelling, lowPerforming] = await Promise.all([
    Promise.all(
      topProductsRaw.map(async (p) => {
        const prod = await prisma.product.findUnique({ where: { id: p.product_id } });
        return { name: prod?.name ?? "Unknown", sales: p._sum.quantity ?? 0 };
      })
    ),
    Promise.all(
      lowProductsRaw.map(async (p) => {
        const prod = await prisma.product.findUnique({ where: { id: p.product_id } });
        return { name: prod?.name ?? "Unknown", sales: p._sum.quantity ?? 0 };
      })
    )
  ]);

  return { topSelling, lowPerforming };
}



export async function getCustomerAnalytics() {
  const topCustomersRaw = await prisma.order.groupBy({
    by: ["customer_id"],
    _sum: { total_price: true },
    orderBy: { _sum: { total_price: "desc" } },
    take: 5
  });

  const highestSpending = await Promise.all(
    topCustomersRaw.map(async (c) => {
      const customer = await prisma.customer.findUnique({ where: { id: c.customer_id! } });
      return { name: customer?.name ?? "Anonymous", spend: c._sum.total_price ?? 0 };
    })
  );

  return { highestSpending };
}
