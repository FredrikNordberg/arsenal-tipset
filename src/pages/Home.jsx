export default function Home() {
  return (
    <div className="bg-white p-6 rounded shadow space-y-10">
      {/* Omgång 1 */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-2">🗓️ Match 1 – Arsenal 2–0 Wolves</h2>
        <p className="mb-2">
          Säsongen sparkade igång på bästa möjliga sätt med en trygg 2–0-seger mot Wolves. Arsenal dominerade bollinnehavet (67%) och både Saka och Martinelli nätade varsitt mål. Raya höll nollan och såg ut som en vägg.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>9 personer tippade vinst till Arsenal</li>
          <li>Endast 2 tippade exakt 2–0 👏</li>
          <li>Jonte och Maja tog hem 3 poäng var</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h3 className="font-semibold mb-2">🏆 Topp 3 efter omgång 1:</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Jonte – 3 poäng</li>
            <li>Maja – 3 poäng</li>
            <li>Ali – 2 poäng</li>
          </ol>
        </div>
      </section>

      {/* Omgång 2 */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-2">🗓️ Match 2 – Aston Villa 0–2 Arsenal</h2>
        <p className="mb-2">
          Arsenal visade klass även på bortaplan. En tidig nick av Saliba (!) och en klinisk straff av Ødegaard säkrade tre nya poäng. Försvaret höll tätt igen – två matcher, två nollor.
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-1">
          <li>12 av 20 tippade seger</li>
          <li>4 pers satte exakt resultat (0–2) – strongt!</li>
          <li>Micke klättrade från 14:e till 6:e plats efter maxpoäng</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded mt-4">
          <h3 className="font-semibold mb-2">🏆 Topp 3 efter omgång 2:</h3>
          <ol className="list-decimal ml-6 space-y-1">
            <li>Maja – 6 poäng</li>
            <li>Jonte – 5 poäng</li>
            <li>Micke – 3 poäng</li>
          </ol>
        </div>
      </section>
    </div>
  );
}

