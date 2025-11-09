import AddProjectForm from '../AddProjectForm';
import InfoRow from '../InfoRow';
export default function ClientDetails({ client, onProjectAdded }) {
    if (!client) return null;

    const projects = client.projects ?? [];
    const projectsCount = projects.length;
    const totalPLN = projects.reduce(
        (sum, p) => sum + (Number(p.valuePLN) || 0),
        0
    );

    return (
        <section className="border rounded-lg p-4 bg-slate-50">
            <h2 className="text-base font-semibold mb-3 text-gray-800">
                Client details
            </h2>

            {projectsCount > 0 ? (
                <>
                    <ul className="space-y-2 text-sm">
                        {projects.map((project) => (
                            <li
                                key={project.id}
                                className="bg-white border rounded-md px-3 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                            >
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {project.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Status:{' '}
                                        <span className="font-medium">
                                            {project.status}
                                        </span>
                                    </p>
                                </div>

                                <p className="text-sm text-gray-800">
                                    {Number(project.valuePLN) || 0} PLN
                                </p>
                            </li>
                        ))}

                    </ul>

                    <div className="text-sm space-y-1 mt-3 flex justify-end mt-4">
                    <InfoRow label="Projects total (PLN):" value={totalPLN} />
                    </div>
                </>

            ) : (
                <p className="text-xs text-gray-500">
                    This client has no projects yet.
                </p>
            )}

            <div onClick={(e) => e.stopPropagation()}>
             <AddProjectForm onProjectAdded={onProjectAdded} />
            </div>

        </section>
    );
}