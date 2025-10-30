import i18n, { API } from 'app/utils/localize';

export interface ApiOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

export async function api<T>(baseUrl: string, endpoint: string, options: ApiOptions = {}): Promise<T> {
  const url = new URL(`${baseUrl}${endpoint}`);

  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) =>
      url.searchParams.append(key, String(value))
    );
  }

  const response = await fetch(
    url.toString(),
    {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      ...options,
    }
  );

  if (!response.ok) {
    throw new Error(`${i18n.t(API.ERRORS.GENERIC)} ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}
