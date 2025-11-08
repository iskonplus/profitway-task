import { useState, useEffect } from 'react';
import { getClients } from './api/api';


export default function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        console.log('finally');
      }
    })();
  }, []);

  console.log(clients);


}


