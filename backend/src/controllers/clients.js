import { createClientModel, findAllClients, send , getClient} from '../utils.js';
import { errorMsg } from '../errors/errMsg.js';
import { readDB, writeDB } from '../db.js'

export const clientsService = {
    getAll: async (_req, res) => {
        try {
            const clients = await findAllClients();
            send(res, 200, clients);
        } catch {
            send(res, 500, errorMsg.server.internal);
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const client = await getClient(id);
            if (!client) return send(res, 404, { message: errorMsg.notFound.client });
            send(res, 200, client);
        } catch {
            send(res, 500, { message: errorMsg.server.internal });
        }
    },

    create: async (req, res) => {
        try {
            const { name, email } = req.body ?? {};
            if (!name || !email) return send(res, 400, { message: errorMsg.invalid.required });

            const db = await readDB();
            const newClient = await createClientModel(name, email);

            await writeDB({ clients: [newClient, ...db.clients] });
            send(res, 201, newClient);

        } catch (error) {
            send(res, 500, { message: errorMsg.server.internal });
        }

    },

}