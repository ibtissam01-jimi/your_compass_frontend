import React, { useState } from 'react';
import Sidebar from '../admin/menuAdmin';
import Dashboard from '../admin/Dashboard';
import TableSubmission from '../admin/Submissions';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="ml-64 mt-20 p-6 w-full bg-[#f4f1ec] min-h-screen">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'submission' && <TableSubmission />} {/* Affiche la page de soumission ici */}
        {/* Ajoutez d'autres pages ici selon vos besoins */}
      </main>
    </div>
  );
}

export default App;
