import React, { useState } from 'react';

const Layout = ({ children, menuItems, currentTitle, onSelectTuto }) => {
  const [search, setSearch] = useState("");

  const filteredItems = menuItems.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-80 bg-white border-r border-gray-200 sticky top-0 h-screen overflow-y-auto p-6 hidden lg:block">
        <div className="mb-6 px-2">
          <h2 className="text-2xl font-black text-indigo-600 tracking-tight">Estoriom Docs</h2>
        </div>

        <div className="mb-6 px-2">
          <input 
            type="text"
            placeholder="Rechercher un tuto..."
            className="w-full px-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <nav className="space-y-1">
          {filteredItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onSelectTuto(item)}
              className={`block w-full text-left px-4 py-3 text-sm rounded-xl transition-all ${
                currentTitle === item.title 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 font-semibold' 
                : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.title}
            </button>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-xs text-gray-400 px-4">Aucun résultat trouvé...</p>
          )}
        </nav>
      </aside>

      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 text-left">
            <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2">Tutoriel Interactif</p>
            <h1 className="text-5xl font-black text-gray-900 tracking-tight">{currentTitle}</h1>
          </header>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;