export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="p-3 rounded bg-red-100 text-red-700 text-sm">{message}</div>
  );
}
