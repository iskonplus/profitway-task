import { findAllClients } from '../../utils.js';

export const clientsService = {
    getAll: async (_req, res) => {
        try {
            const clients = await findAllClients();
            res.status(200).json(clients)
        } catch  {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    create: async (req, res) => {
        
    },

}