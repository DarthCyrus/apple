import React from "react";
import PhoneImage from "../assets/phone.png";

function HomePage() {
  // Die URL zur Apple Shop-Seite
  const appleShopUrl = "https://www.apple.com/shop";

  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen text-white flex flex-col">
      {/* Header */}
      <header className="p-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400">
          Apple
        </h1>
        <h2 className="text-lg lg:text-2xl text-gray-300">
          Mehr als nur ein angebissener Apfel
        </h2>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 flex-grow">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:mr-4">
            <p className="text-gray-200 text-base lg:text-xl leading-relaxed mb-6 lg:border-8 lg:border-purple-500 p-5 rounded-xl">
              Apple, die Marke, die unsere Geldbeutel leichter macht und unsere
              Herzen schwerer. Ihre Produkte sind wie der verbotene Apfel im
              Garten Eden - wir wissen, dass wir nicht widerstehen sollten, aber
              wir tun es trotzdem. Und wenn du jemals das Gefühl hattest, dass
              Siri dich besser versteht als deine Familie, dann bist du
              definitiv ein Teil der Apple-Familie. Prost auf das Unternehmen,
              das uns dazu gebracht hat, für ein Telefon mehr zu bezahlen als
              für unseren ersten Gebrauchtwagen!
            </p>
            {/* Call to Action Button mit Link zur Apple Shop-Seite */}
            <a href={appleShopUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Jetzt kaufen
              </button>
            </a>
          </div>

          {/* Image Section */}
          <div className="w-3/4 sm:w-1/2 lg:w-1/2 mt-4 lg:mt-0 rounded-s-3xl shadow-xl">
            <img src={PhoneImage} alt="PhoneImage" className="w-8/12 h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
