import { readDB } from './src/db.js';

export const findAllClients = async () => {
    const {clients} = await readDB();
    return clients;
};