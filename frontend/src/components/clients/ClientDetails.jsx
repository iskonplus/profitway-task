import AddProjectForm from "../AddProjectForm";
import InfoRow from "../InfoRow";
import ProjectList from "./ProjectList";
export default function ClientDetails({ client, onProjectAdded, onProjectDeleted }) {

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
        Projects details
      </h2>

      {projectsCount > 0 ? (
        <>
          <ProjectList
            projects={projects}
            onProjectDeleted={(projectId) => onProjectDeleted(client.id, projectId)}
          />

          <div className="text-sm space-y-1 flex justify-end mt-4">
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
