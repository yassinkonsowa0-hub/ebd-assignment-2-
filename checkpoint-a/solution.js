// Checkpoint A — your work goes in this file.

import { findOrderById, findAllOrders } from "./orders-db.js";

export async function loadOrders() {
  return await findAllOrders();
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    student: order.student,
    city: order.city,
  }));

  return JSON.stringify(simplifiedOrders);
}