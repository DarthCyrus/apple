import React from "react";

function ContactPage() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen text-white">
      {/* Header */}
      <header className="p-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400">
          Kontakt
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Unsere Adresse</h2>
          <p className="text-gray-300 leading-relaxed">
            Apple Inc.
            <br />
            1 Apple Park Way
            <br />
            Cupertino, CA 95014
            <br />
            Vereinigte Staaten von Amerika
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kundendienst</h2>
          <p className="text-gray-300 leading-relaxed">
            Unser Kundendienst steht Ihnen rund um die Uhr zur Verfügung. Sie
            können uns jederzeit telefonisch oder per E-Mail erreichen.
          </p>
          <p className="text-gray-300 leading-relaxed mt-2">
            Telefon: +1-800-MY-APPLE
            <br />
            E-Mail: info@apple.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Soziale Medien</h2>
          <p className="text-gray-300 leading-relaxed">
            Bleiben Sie mit uns in Verbindung über unsere sozialen Medien:
          </p>
          <div className="flex mt-2">
            <a
              href="https://www.facebook.com/apple"
              className="text-blue-500 hover:underline mr-4"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/apple"
              className="text-blue-500 hover:underline mr-4"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/apple"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
