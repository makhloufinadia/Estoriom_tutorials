import React, { useState } from 'react';
import Layout from './components/Layout';
import estoriomTutorials from './data/tutorials';

function App() {
  
  const [activeTuto, setActiveTuto] = useState(estoriomTutorials[0]);

  return (
    <Layout 
      menuItems={estoriomTutorials} 
      currentTitle={activeTuto.title}
      onSelectTuto={(tuto) => setActiveTuto(tuto)}
    >
     
      <div className="w-full h-[calc(100vh-250px)] min-h-[600px] bg-white">
        <iframe 
          key={activeTuto.id} 
          src={`/tutoriels/${activeTuto.file}`}
          className="w-full h-full border-none"
          title={activeTuto.title}
        />
      </div>
    </Layout>
  );
}

export default App;