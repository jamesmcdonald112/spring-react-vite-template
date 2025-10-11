import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://localhost:8080/api/ping")
      .then((res) => res.text())
      .then(setMessage)
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-gray-800 bg-gray-50">
      <h1 className="mb-4 text-3xl font-bold">React + Vite + Tailwind Template</h1>
      <p>{message}</p>
    </main>
  );
}
