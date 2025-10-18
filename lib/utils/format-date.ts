import { format, formatDistanceToNow } from "date-fns"

export function formatDate(date: Date | string, formatStr = "MMM d, yyyy"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return format(dateObj, formatStr)
}

export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return formatDistanceToNow(dateObj, { addSuffix: true })
}
