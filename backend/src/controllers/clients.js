import { createClient, findAllClients, send } from '../utils.js';
import { errorMsg } from '../errors/errMsg.js';

export const clientsService = {
    getAll: async (_req, res) => {
        try {
            const clients = await findAllClients();
            send(res, 200, clients);
        } catch {
            send(res, 500, errorMsg.server.internal);
        }
    },

    create: async (req, res) => {
        try {
            const { name, email } = req.body ?? {};
            if (!name || !email) return send(res, 400, { message: errorMsg.invalid.required });

            const db = await readDB();
            const newClient = await createClient(name, email);

            await writeDB({ clients: [newClient, ...db.clients] });
            send(res, 201, newClient);

        } catch {
            send(res, 500, errorMsg.server.internal);
        }

    },

}