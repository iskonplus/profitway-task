import ClientDetails from "./ClientDetails";
import InfoRow from "../InfoRow";

export default function ClientItem({
    client,
    isExpanded,
    onToggle,
    onProjectAdded,
}) {
    return (
        <li
            key={client.id}
            className="
        border-b py-4 px-2 transition-colors duration-200 cursor-pointer
        hover:bg-gray-100 hover:shadow-sm !mt-0
      "
            onClick={onToggle}
        >
            <div
                className="
          flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between
        "
            >
                <div>
                    <InfoRow label="Company:" value={client.name} />
                    <InfoRow label="Email:" value={client.email} />
                </div>

                <div className="text-right sm:text-right">
                    {client.acquiredAt && (
                        <p className="text-xs text-gray-400">{client.acquiredAt}</p>
                    )}

                    {client.projects.length > 0 ? (
                        <InfoRow label="Projects:" value={client.projects.length} />
                    ) : (
                        <p className="text-sm text-gray-300 mt-2 sm:mt-0">No projects</p>
                    )}
                </div>
            </div>

            {isExpanded && (
                <div className="mt-3">
                    <ClientDetails client={client} onProjectAdded={onProjectAdded} />
                </div>
            )}
        </li>
    );
}
