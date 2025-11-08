import { useState, useEffect } from 'react';
import { getClients } from './api/api';
import ClientsList from './components/ClientList';
import Loader from './components/Loader';


export default function App() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const title = 'Mini CRM';

  useEffect(() => {
    (async () => {
      try {
        const data = await getClients();
        setClients(data);

      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (

    <main className="max-w-6xl m-2">
      <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
      <div className="border-t bg-white shadow-md rounded-lg p-6 max-w-3xl w-full space-y-6 m-auto">

        {loading && <Loader />}
        {!loading && <ClientsList clients={clients} />}

      </div>
    </main>

  );

}


