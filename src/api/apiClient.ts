export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    throw Error(`${response.statusText} (${response.status})`);
  }

  return response.json();
};
