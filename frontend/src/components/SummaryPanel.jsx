import InfoRow from "./InfoRow";
import Loader from "./Loader";

export default function SummaryPanel({ summary, loading, error }) {
  if (loading) return <Loader />;

  if (error) {
    return <div className="!mt-4 text-sm text-red-600">{error}</div>;
  }

  if (!summary) return null;

  const { totalProjects, totalPLN } = summary;

  return (
    <section className="!mt-0 border rounded-bl-lg rounded-br-lg border-t-0 p-3 bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
      <div className="flex gap-2 text-sm justify-end">
        <InfoRow label="Total projects:" value={totalProjects} />
        <InfoRow label="Overall total (PLN):" value={totalPLN} />
      </div>
    </section>
  );
}
