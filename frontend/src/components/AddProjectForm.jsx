import { useState } from 'react';
import BtnLeft from './buttons/BtnLeft';

export default function AddProjectForm({ onProjectAdded }) {
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('open');
  const [valuePLN, setValuePLN] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!projectName || !status || !valuePLN) {
      setError('All fields are required');
      return;
    }

    const valueNumber = Number(valuePLN);
    if (Number.isNaN(valueNumber) || valueNumber < 0) {
      setError('Value must be a positive number');
      return;
    }

    await onProjectAdded({
      name: projectName,
      status,
      valuePLN: valueNumber,
    });

    setProjectName('');
    setStatus('open');
    setValuePLN('');
    setShowForm(false);
  };

  return (
      <div className="mt-3">

          <BtnLeft onClick={() => setShowForm((prev) => !prev)}>{showForm ? 'Cancel' : 'Add project'}</BtnLeft>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-3 space-y-2 text-sm bg-white border rounded p-3"
        >
          {error && (
            <p className="text-xs text-red-600">{error}</p>
          )}

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Project name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="open">open</option>
              <option value="in progress">in progress</option>
              <option value="done">done</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Value (PLN)
            </label>
            <input
              type="number"
              value={valuePLN}
              onChange={(e) => setValuePLN(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
            <BtnLeft>Save project</BtnLeft>
        </form>
      )}
    </div>
  );
}