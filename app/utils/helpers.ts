/**
 * Determines if the current session is a mobile session or not.
 * @returns Whether or not the current session is on a mobile client.
 */
export const isMobile = (): boolean => {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};