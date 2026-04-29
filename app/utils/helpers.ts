/**
 * Determines if the current session is a mobile session or not.
 * @returns Whether or not the current session is on a mobile client.
 */
export const isMobile = (): boolean => {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};

export const b64encode = (text: string): string => {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const b of bytes) { // avoid using ...spread that might hit callstack size limits
    binary += String.fromCharCode(b);
  }
  return window.btoa(binary);
};

export const isDayOldOrSooner = (dateString: string): boolean => {
  // 1. Convert string to Date object
  const targetDate = new Date(dateString);

  // Validation: Check if the string was a valid date format
  if (isNaN(targetDate.getTime())) {
    throw new Error('Invalid date string provided');
  }

  const now = new Date();

  // 2. Calculate the difference in milliseconds
  const diffInMs = now.getTime() - targetDate.getTime();

  // 3. Define 24 hours in milliseconds
  const twentyFourHoursInMs = 24 * 60 * 60 * 1000;

  // Check if the date is in the past AND within the 24-hour window
  // (Using >= 0 ensures we don't count future dates as "a day old")
  return diffInMs >= 0 && diffInMs <= twentyFourHoursInMs;
};