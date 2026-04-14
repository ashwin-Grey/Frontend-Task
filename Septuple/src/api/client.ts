/**
 * Base API client for Septuple
 */

const API_BASE_URL = (import.meta as any).env.VITE_API_BASE_URL || 'https://api.septuple.com';

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { params, ...init } = options;
  
  let url = `${API_BASE_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  const token = localStorage.getItem('septuple_token');
  const headers = new Headers(init.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  headers.set('Content-Type', 'application/json');

  const response = await fetch(url, {
    ...init,
    headers,
  });

  if (response.status === 401) {
    localStorage.removeItem('septuple_token');
    window.location.href = '/login';
    throw new Error('Unauthorized');
  }

  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Please try again later.');
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'An unexpected error occurred');
  }

  return response.json();
}
