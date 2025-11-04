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
