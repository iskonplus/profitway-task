import ClientItem from "./ClientItem.jsx";

export default function ClientList({ clients }) {
    
    return (
        <ul className="space-y-2">
            {clients.map((client) => (
                <ClientItem key={client.id} client={client} />
            ))}
        </ul>
    );
}
