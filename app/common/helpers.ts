import React from 'react';
import { ComponentType } from 'react';
import { DEFAULT_DELAY_MS } from './constants';

//https://stackoverflow.com/a/69411742
export const smoothLazy = <T extends ComponentType<any>>(  // eslint-disable-line
  factory: () => Promise<{ default: T }>, minLoadTimeMs: number = DEFAULT_DELAY_MS
): React.LazyExoticComponent<T> => {
  return React.lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, minLoadTimeMs))
    ]).then((
      [moduleExports]) => moduleExports
    )
  );
};