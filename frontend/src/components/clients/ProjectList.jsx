import BtnDelete from "../buttons/BtnDelete";
export default function ProjectList({ projects, onProjectDeleted }) {
  return (
    <ul className="space-y-2 text-sm">
      {projects.map((project) => (
        <li
          key={project.id}
          className="bg-white border rounded-md px-3 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 relative
                    hover:scale-[102%] transition hover:shadow-lg
                    "
        >
          <div>
            <p className="font-medium text-gray-900">{project.name}</p>
            <p className="text-xs text-gray-500">
              Status: <span className="font-medium">{project.status}</span>
            </p>
          </div>

          <p className="text-sm text-gray-800">
            {Number(project.valuePLN) || 0} PLN
          </p>

          <BtnDelete
            onClick={ (e) => {
              e.stopPropagation();
              onProjectDeleted(project.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
