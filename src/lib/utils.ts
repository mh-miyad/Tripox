import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-300/30 dark:bg-blue-700/60 dark:text-blue-300 text-blue-800";
    case "green":
      return "bg-green-300/30 dark:bg-green-700/60 dark:text-green-300 text-green-800";
    case "red":
      return "bg-red-300/30 dark:bg-red-700/60 dark:text-red-300 text-red-800";
    default:
      return "bg-blue-300/30 dark:bg-blue-700/60 dark:text-blue-300 text-blue-800";
  }
};
