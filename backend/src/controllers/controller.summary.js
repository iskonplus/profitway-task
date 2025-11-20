import { findAllClients, send, calculateSummary } from "../utils.js";
import { errorMsg } from "../errors/errMsg.js";

export const summaryService = {
    getSummary: async (_req, res) => {

        try {
            const clients = await findAllClients();
            const summary = calculateSummary(clients);
            return send(res, 200, summary);

        } catch {
            return send(res, 500, { message: errorMsg.server.internal });
        }

    }
}
