import { API_BASE } from '../config'

export async function getClients() {
    
  const res = await fetch(`${API_BASE}/clients`);

  if (!res.ok) {
    throw new Error('Failed to load clients');
  }

  return res.json();
}

export async function createClient(payload) {

  const res = await fetch(`${API_BASE}/clients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to create client');
  }

  return res.json();
}

export async function createProject(clientId, payload) {

  const res = await fetch(`${API_BASE}/clients/${clientId}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to create project');
  }

  return res.json();
}