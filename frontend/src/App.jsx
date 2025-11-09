import { useState, useEffect } from "react";
import { getClients, createClient, createProject, getSummary } from "./api/api";
import ClientsList from "./components/clients/ClientList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMsg";
import BtnRight from "./components/buttons/BtnRight";
import Modal from "./components/Modal";
import ClientForm from "./components/clients/ClientForm";
import SummaryPanel from "./components/SummaryPanel";

export default function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedClientId, setExpandedClientId] = useState(null);

  const [summary, setSummary] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryError, setSummaryError] = useState("");

  const title = "Mini CRM";

  const fetchSummary = async () => {
    try {
      setSummaryLoading(true);
      setSummaryError("");
      const data = await getSummary();
      setSummary(data);
    } catch (err) {
      setSummaryError(err.message || "Failed to load summary");
    } finally {
      setSummaryLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (err) {
        setError(err.message || "Failed to load clients");
      } finally {
        setLoading(false);
      }
      await fetchSummary();
    })();
  }, []);

  const handleCreateClient = async (payload) => {
    const created = await createClient(payload);
    setClients((prev) => [created, ...prev]);
    setIsModalOpen(false);
  };

  const handleToggleClient = (id) => {
    setExpandedClientId((current) => (current === id ? null : id));
  };

  const handleProjectAdded = async (clientId, payload) => {
    const createdProject = await createProject(clientId, payload);

    setClients((prev) =>
      prev.map((client) =>
        client.id === clientId
          ? {
              ...client,
              projects: [...(client.projects ?? []), createdProject],
            }
          : client
      )
    );
    await fetchSummary();
  };

  return (
    <main className="max-w-3xl m-auto p-2">
      <h1 className="text-2xl font-bold text-center mb-2 text-[#4B7F60]">
        {title}
      </h1>

      <div className="border-t bg-white shadow-md rounded-lg p-6 w-full space-y-6 m-auto">
        <ErrorMessage message={error} />
        {loading && <Loader />}
        {!loading && (
          <ClientsList
            clients={clients}
            expandedClientId={expandedClientId}
            onToggleClient={handleToggleClient}
            onProjectAdded={handleProjectAdded}
          />
        )}

        <SummaryPanel
          summary={summary}
          loading={summaryLoading}
          error={summaryError}
        />

        <BtnRight onClick={() => setIsModalOpen(true)} />

        {isModalOpen && (
          <Modal title="Add new client" onClose={() => setIsModalOpen(false)}>
            <ClientForm onClientCreated={handleCreateClient} />
          </Modal>
        )}
      </div>
    </main>
  );
}
