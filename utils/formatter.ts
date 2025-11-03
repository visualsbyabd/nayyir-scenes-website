export function formatNumber(num: number): string {
  // Check if the number is less than or equal to 1000.
  if (num <= 1000) {
    // If true, return the number itself as a string.
    return num.toString();
  }

  // If the number is greater than 1000, convert to 'k' format.
  // We divide by 1000, round to one decimal place, and append 'k'.
  // toLocaleString is used to ensure one decimal place is always shown
  // if it's a fractional number (e.g., 1.1k instead of 1.123k or 1k).
  const formattedNum = (num / 1000).toLocaleString("en-US", {
    minimumFractionDigits: 0, // Ensure at least 0 decimal places
    maximumFractionDigits: 1, // Limit to 1 decimal place
  });

  return `${formattedNum}k`;
}

export function convertEpochToDateString(msEpoch: number) {
  if (typeof msEpoch !== "number" || isNaN(msEpoch) || msEpoch <= 0) {
    return "Invalid or missing timestamp.";
  }

  // Create a Date object using the milliseconds epoch
  const date = new Date(msEpoch);

  // Use toLocaleString for a user-friendly, localized format
  // 'en-US' is used as a default, but it respects the user's timezone implicitly
  const dateString = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateString;
}
