import ClientDetails from './ClientDetails';

export default function ClientItem({ client, isExpanded, onToggle, onProjectAdded }) {
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
                    <p className="text-sm text-gray-500">
                        Company:{' '}
                        <span className="font-semibold text-gray-900">
                            {client.name}
                        </span>
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                        Email:{' '}
                        <span className="font-medium text-gray-800">
                            {client.email}
                        </span>
                    </p>
                </div>

                <div className="text-right sm:text-left">

                    {client.acquiredAt && (
                        <p className="text-xs text-gray-400">{client.acquiredAt}</p>
                    )}

                    {client.projects.length > 0 ? (
                        <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                            Projects:{' '}
                            <span className="font-semibold text-gray-900">
                                {client.projects.length}
                            </span>
                        </p>
                    ) : (
                        <p className="text-sm text-gray-300 mt-2 sm:mt-0">
                            No projects
                        </p>
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