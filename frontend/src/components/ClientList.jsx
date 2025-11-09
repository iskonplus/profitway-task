import ClientItem from "./ClientItem.jsx";

export default function ClientList({ clients, expandedClientId, onToggleClient }) {

    if (clients.length === 0) {
        return <p className="text-gray-500 text-sm">No clients yet.</p>;
    }

    return (
        <ul className="space-y-2">
            {clients.map((client) => (
                <ClientItem key={client.id} client={client}
                    isExpanded={client.id === expandedClientId}
                    onToggle={() => onToggleClient(client.id)} />
            ))}
        </ul>
    );
}
