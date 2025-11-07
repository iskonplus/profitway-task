import { readDB } from './db.js';
import { randomUUID } from 'node:crypto';

export const findAllClients = async () => {
    const { clients } = await readDB();
    return clients;
};

export const createClient = async (name, email) => {
    return {
        id: randomUUID(),
        name, email,
        acquiredAt: new Date().toISOString().slice(0, 10),
        projects: [],
    };
}

export const send = (res, status, payload) => res.status(status).json(payload);
