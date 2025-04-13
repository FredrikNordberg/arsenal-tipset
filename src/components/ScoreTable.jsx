import { useEffect, useState } from "react";

export default function ScoreTable() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Kunde inte ladda spelardata:", err));
  }, []);

  const filteredAndSorted = players
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.points - a.points);

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return index + 1;
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-red-700">📊 Poängställning</h2>

      <input
        type="text"
        placeholder="🔍 Sök deltagare..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left w-12">#</th>
            <th className="border p-2 text-left">Namn</th>
            <th className="border p-2 text-left">Poäng</th>
            <th className="border p-2 text-left">Skyttekung</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSorted.map((p, i) => (
            <tr
              key={i}
              className={
                i === 0
                  ? "bg-yellow-100 font-bold"
                  : i % 2 === 0
                  ? "bg-gray-50"
                  : "bg-white"
              }
            >
              <td className="border p-2">{getMedal(i)}</td>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.points}</td>
              <td className="border p-2">{p.topScorerGuess}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


