
export default function Imprint() {
  return (
    <main className="flex flex-col min-h-screen px-4 pt-12 pb-32 text-slate-800 font-sans">

      <h2 className="my-16 text-6xl tracking-tighter font-serif italic font-light">
        Impressum
      </h2>

      <div className="pb-8">
        <h6 className="mb-2 font-serif text-2xl font-light italic">
          Adresse
        </h6>
        <p>
          <span className="font-medium">Firma</span><br/>
          Beispielstraße 1,<br/>
          12345 Beispielstadt
        </p>
      </div>

      <div className="pb-16">
        <h6 className="mb-2 font-serif text-2xl font-light italic">
          Kontakt
        </h6>
        <p>
          <span className="font-medium">Email</span><br/>
          kontakt@firma.de<br/>
        </p>
        <p className="mt-2">
          <span className="font-medium">Telefon</span><br/>
          +49 (0) 123 456 789
        </p>
      </div>

      <div className="pb-8">
        <h6 className="mb-2 font-serif text-2xl font-light italic">
          Geschäftsführer
        </h6>
        <p>Vorname Nachname</p>
      </div>

      <div className="pb-8">
        <h6 className="mb-2 font-serif text-2xl font-light italic">
          Umsatzsteuer-Id
        </h6>
        <p>DE 123 456</p>
      </div>

      <div className="pb-8">
        <h6 className="mb-2 font-serif text-2xl font-light italic">
          Handelsregister
        </h6>
        <p className="font-medium">Amtsgericht Stadt</p>
        <p>HR 12345</p>
      </div>
    </main>
  )
}