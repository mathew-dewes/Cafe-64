"use server"

import prisma from "../db/prisma";

export async function getRevenueStats(){
      const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const thisWeek = new Date(now.getFullYear(), now.getMonth(), diff);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const [dailyRevenue, weeklyRevenue, monthlyRevenue, ordersByStatus, avgOrderValue, totalOrders] = await Promise.all([
    prisma.order.aggregate({ _sum: { total_price: true }, where: { created_at: { gte: today }, status: "COMPLETE" } }),
    prisma.order.aggregate({ _sum: { total_price: true }, where: { created_at: { gte: thisWeek }, status: "COMPLETE" } }),
    prisma.order.aggregate({ _sum: { total_price: true }, where: { created_at: { gte: thisMonth }, status: "COMPLETE" } }),
    prisma.order.groupBy({ by: ["status"], _count: { _all: true } }),
    prisma.order.aggregate({ _avg: { total_price: true } }),
    prisma.order.count()
  ]);

  return {
    dailyRevenue: dailyRevenue._sum.total_price ?? 0,
    weeklyRevenue: weeklyRevenue._sum.total_price ?? 0,
    monthlyRevenue: monthlyRevenue._sum.total_price ?? 0,
    averageOrderValue: avgOrderValue._avg.total_price ?? 0,
    openOrders: ordersByStatus.find(o => o.status !== "COMPLETE")?._count._all ?? 0,
    completedOrders: ordersByStatus.find(o => o.status === "COMPLETE")?._count._all ?? 0,
    canceledOrders: "TBC",
    totalOrders
  };
}