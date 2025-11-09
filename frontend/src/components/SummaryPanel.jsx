export default function SummaryPanel({ summary, loading, error }) {
    if (loading) {
        return (
            <div className="mt-4 text-sm text-gray-500">
                Loading summary...
            </div>
        );
    }

    if (error) {
        return (
            <div className="!mt-4 text-sm text-red-600">
                {error}
            </div>
        );
    }

    if (!summary) return null; 

    const { totalProjects, totalPLN } = summary;

    return (
        <section className="!mt-0 border rounded-bl-lg rounded-br-lg border-t-0 p-3 bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">

            <div className="flex gap-2 text-sm justify-end">

                <div className="flex justify-center items-center">
                    <span className="text-sm text-gray-500 mr-1">
                        Total projects
                    </span>
                    <span className="font-semibold text-gray-900">
                        {totalProjects}
                    </span>
                </div>

                <div className="flex justify-center items-center">
                    <span className="text-sm text-gray-500 mr-1">
                        Total value (PLN)
                    </span>
                    <span className="font-semibold text-gray-900">
                        {totalPLN}
                    </span>
                </div>

            </div>
        </section>
    );
}