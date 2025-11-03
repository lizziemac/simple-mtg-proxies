export const DEFAULT_DELAY_MS = 300; // 1 second

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;

export const CACHE_TTL = (
  1 // 1 day cache
  * HOURS_PER_DAY
  * MINUTES_PER_HOUR
  * SECONDS_PER_MINUTE
  * MILLISECONDS_PER_SECOND
);

export enum Size {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}