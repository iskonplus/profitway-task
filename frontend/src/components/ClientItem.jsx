export default function ClientItem({ client }) {
    return (
        <li
            key={client.id}
            className="
        border-b py-4 px-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between
        transition-colors duration-200 cursor-pointer
        hover:bg-gray-100 hover:shadow-sm !mt-0
      "
        >
            <div>
                <p className="text-sm text-gray-500">
                    Company:{' '}
                    <span className="font-semibold text-gray-900">{client.name}</span>
                </p>

                <p className="text-sm text-gray-500 mt-1">
                    Email:{' '}
                    <span className="font-medium text-gray-800">{client.email}</span>
                </p>
            </div>

            <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                Projects:{' '}
                <span className="font-semibold text-gray-900">
                    {client.projects?.length ?? 0}
                </span>
            </p>

        </li>

    );

}