
export default function HowToPlay() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-red-700">Regler!</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📥 Steg 1: Skicka in tips</h2>
        <p className="mb-2">
          Ladda ner tipsformuläret, fyll i dina resultat och skicka det till:
          <strong> arsenal.tipset@mail.com</strong> innan deadline.
        </p>
        <a
          href="/Arsenal_Tipslappen_2025.xlsx"
          download
          className="inline-block mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          📄 Ladda ner tipsformulär (Excel)
        </a>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">📊 Steg 2: Så funkar poängen</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>3 poäng för exakt resultat (t.ex. 2–1 → 2–1)</li>
          <li>1 poäng för rätt utfall (vinst/oavgjort/förlust)</li>
          <li>5 poäng om du gissar rätt skyttekung i slutet av säsongen</li>
          <li>Deadline är innan första avspark!</li>
        </ul>
      </section>
    </div>
  );
}