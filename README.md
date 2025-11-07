# profitway-task (Mini CRM)

Stack: React (Vite, TS) + Tailwind (UI), Node.js (Express), JSON storage.

## Dev

- backend: `cd backend && npm run dev`
- frontend: `cd frontend && npm run dev`

## Features

- Clients list & create
- Client details with projects & add project
- Summary (projects count + total PLN)

## Client model

```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "acquiredAt": "YYYY-MM-DD",
  "projects": [
    {
      "id": "uuid",
      "name": "string",
      "status": "open | in progress | done",
      "valuePLN": "number"
    }
  ]
}

```

