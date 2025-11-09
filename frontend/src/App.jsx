import { useState, useEffect } from 'react';
import { getClients, createClient, createProject } from './api/api';
import ClientsList from './components/ClientList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMsg';
import AddClientBtn from './components/AddClientBtn'
import Modal from './components/Modal';
import ClientForm from './components/ClientForm'


export default function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedClientId, setExpandedClientId] = useState(null);
  const title = 'Mini CRM';

  useEffect(() => {
    (async () => {
      try {
        const data = await getClients();
        setClients(data);

      } catch (err) {
        setError(err.message || 'Failed to load clients');
      } finally {
        setLoading(false);
      }
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
  };


  return (

    <main className="max-w-3xl m-auto p-2">
      <h1 className="text-2xl font-bold text-center mb-2 text-[#4B7F60]">{title}</h1>


      <div className="border-t bg-white shadow-md rounded-lg p-6 w-full space-y-6 m-auto">

        <ErrorMessage message={error} />
        {loading && <Loader />}
        {!loading && <ClientsList clients={clients}
          expandedClientId={expandedClientId}
          onToggleClient={handleToggleClient}
          onProjectAdded={handleProjectAdded}
        />}


        <AddClientBtn onClick={() => setIsModalOpen(true)} />

        {isModalOpen && (
          <Modal title="Add new client" onClose={() => setIsModalOpen(false)}>
            <ClientForm onClientCreated={handleCreateClient} />
          </Modal>
        )}

      </div>
    </main>

  );

}


