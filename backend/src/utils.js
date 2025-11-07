import { readDB } from './db.js';
import { randomUUID } from 'node:crypto';

export const findAllClients = async () => {
    const { clients } = await readDB();
    return clients;
};

export const getClient = async (id) => {
    const { clients } = await readDB();
    return clients.find(client => client.id === id);
}

export const createClientModel = async (name, email) => {
    return {
        id: randomUUID(),
        name, email,
        acquiredAt: new Date().toISOString().slice(0, 10),
        projects: [],
    };
}

export const createClientProject = async (name, status, valuePLN) => {
    return {
        id: randomUUID(),
        name,
        status,
        valuePLN
    };
}

export const updateClients = async (client, id) => {
    const db = await readDB();
    return db.clients.map(clientDb => clientDb.id === id ? client : clientDb);
}

export const send = (res, status, payload) => res.status(status).json(payload);
