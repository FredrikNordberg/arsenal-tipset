export default function Fixtures() {
  const fixtures = [
    ["17 aug", "Arsenal", "Wolves", "2–0"],
    ["24 aug", "Aston Villa", "Arsenal", "0–2"],
    ["31 aug", "Arsenal", "Brighton", "1–1"],
    ["15 sep", "Tottenham", "Arsenal", "0–1"],
    ["22 sep", "Man City", "Arsenal", "2–2"],
    ["28 sep", "Leicester", "Arsenal", "2–4"],
    ["5 okt", "Southampton", "Arsenal", "1–3"],
    ["19 okt", "Bournemouth", "Arsenal", "2–0"],
    ["27 okt", "Liverpool", "Arsenal", "2–2"],
    ["2 nov", "Newcastle", "Arsenal", "1–0"],
    ["10 nov", "Chelsea", "Arsenal", "1–1"],
    ["23 nov", "Arsenal", "Nottingham Forest", "3–0"],
    ["30 nov", "West Ham", "Arsenal", "2–5"],
    ["4 dec", "Arsenal", "Man United", "2–0"],
    ["8 dec", "Fulham", "Arsenal", "1–1"],
    ["14 dec", "Everton", "Arsenal", "0–0"],
    ["21 dec", "Arsenal", "Crystal Palace", "5–1"],
    ["27 dec", "Arsenal", "Ipswich", "1–0"],
    ["1 jan", "Brentford", "Arsenal", "1–3"],
    ["4 jan", "Brighton", "Arsenal", "1–1"],
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-red-700">
        📅 Premier League-matcher 2024/2025
      </h1>
      <table className="w-full border-collapse border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2 text-left">Datum</th>
            <th className="border p-2 text-left">Hemmalag</th>
            <th className="border p-2 text-left">Bortalag</th>
            <th className="border p-2 text-left">Resultat</th>
          </tr>
        </thead>
        <tbody>
          {fixtures.map(([date, home, away, result], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
              <td className="border p-2">{date}</td>
              <td className="border p-2">{home}</td>
              <td className="border p-2">{away}</td>
              <td className="border p-2">{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
