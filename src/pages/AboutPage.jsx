import React from "react";

function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen text-white">
      {/* Header */}
      <header className="p-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400">
          Über Apple
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Unsere Geschichte</h2>
          <p className="text-gray-300 leading-relaxed">
            Apple Inc. ist ein führendes Technologieunternehmen mit Sitz in
            Cupertino, Kalifornien. Die Firma wurde im Jahr 1976 von den
            Gründern Steve Jobs, Steve Wozniak und Ronald Wayne ins Leben
            gerufen. Die Anfänge von Apple waren geprägt von der Entwicklung des
            ersten personalisierten Computers, dem Apple I. Im Laufe der Jahre
            hat sich das Unternehmen zu einem der innovativsten
            Technologieunternehmen weltweit entwickelt und zahlreiche
            bahnbrechende Produkte auf den Markt gebracht.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Unsere Produkte</h2>
          <p className="text-gray-300 leading-relaxed">
            Apple hat im Laufe der Jahre einige der revolutionärsten Produkte
            der Technologiebranche entwickelt. Dazu gehören das iPhone, das
            iPad, der Macintosh-Computer, der iPod und die Apple Watch. Diese
            Produkte sind nicht nur für ihre technische Leistungsfähigkeit
            bekannt, sondern auch für ihr elegantes Design und ihre
            Benutzerfreundlichkeit. Sie haben die Art und Weise, wie wir
            kommunizieren, arbeiten und unterhalten werden, maßgeblich
            verändert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Unsere Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            Bei Apple ist unsere Vision klar: Wir wollen die Welt durch
            innovative Technologie verändern und das Leben der Menschen
            bereichern. Unser Fokus liegt auf höchster Qualität, Nachhaltigkeit
            und Innovation. Wir glauben daran, dass großartige Produkte nicht
            nur funktional sein sollten, sondern auch ästhetisch ansprechend und
            benutzerfreundlich. Unsere Marke steht für Kreativität, Einfachheit
            und Fortschritt, und wir setzen uns leidenschaftlich dafür ein,
            diese Werte in all unseren Produkten zu verkörpern.
          </p>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
