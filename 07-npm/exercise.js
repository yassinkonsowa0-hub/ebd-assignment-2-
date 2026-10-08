// 07-npm — your work goes in this file.

import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 * formatDate("2026-03-15") -> "15/03/2026"
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * The year a date falls in, as a number.
 * yearOf("2026-03-15") -> 2026
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Adds days to a date.
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package YOU chose from the registry.
 */
export const myPackage = "lodash";