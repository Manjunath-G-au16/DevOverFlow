import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = Date.now();
  const createdTime = createdAt.getTime();
  const diffInSeconds = Math.floor((now - createdTime) / 1000);

  const SECOND = 1;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY; // Approximate month length
  const YEAR = 365 * DAY; // Approximate year length

  if (diffInSeconds < MINUTE) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < HOUR) {
    const diffInMinutes = Math.floor(diffInSeconds / MINUTE);
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < DAY) {
    const diffInHours = Math.floor(diffInSeconds / HOUR);
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < WEEK) {
    const diffInDays = Math.floor(diffInSeconds / DAY);
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < MONTH) {
    const diffInWeeks = Math.floor(diffInSeconds / WEEK);
    return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < YEAR) {
    const diffInMonths = Math.floor(diffInSeconds / MONTH);
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  } else {
    const diffInYears = Math.floor(diffInSeconds / YEAR);
    return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
  }
};

export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(1);
    return `${millions}M`;
  } else if (number >= 1000) {
    const thousands = (number / 1000).toFixed(1);
    return `${thousands}K`;
  } else {
    return `${number}`;
  }
};
