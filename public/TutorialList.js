import React, { useState } from 'react';
import estoriomTutorials from '../data/tutorials'; 

const TutorialList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", ...new Set(estoriomTutorials.map(t => t.category))];

  
  const filteredTutorials = estoriomTutorials.filter(tuto => {
    (selectedCategory === "Tous" || tuto.category === selectedCategory) &&
    tuto.title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Centre d'Aide Estoriom</h1>
          <p className="text-gray-600">Trouvez toutes les réponses à vos questions d'utilisation</p>
        </header>

       
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Rechercher un tutoriel (ex: POS, Stock...)"
            className="flex-1 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="p-3 rounded-lg border border-gray-300 bg-white shadow-sm"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tuto) => (
            <div key={tuto.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {tuto.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">
                  {tuto.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Aperçu des étapes :</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {tuto.steps.slice(0, 3).map((step, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-4 h-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-2 text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                    {tuto.steps.length > 3 && <li>... et {tuto.steps.length - 3} autres étapes.</li>}
                  </ul>
                </div>

                <a
                  href={`/tutoriels/${tuto.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Voir le tutoriel interactif
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Aucun tutoriel ne correspond à votre recherche.
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialList;