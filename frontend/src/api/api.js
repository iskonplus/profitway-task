import { API_BASE } from '../config'

export async function getClients() {
  const res = await fetch(`${API_BASE}/clients`);

  if (!res.ok) {
    throw new Error('Failed to load clients');
  }

  return res.json();
}