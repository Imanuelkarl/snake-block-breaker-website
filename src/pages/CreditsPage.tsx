// src/pages/CreditsPage.jsx
const CreditsPage = () => {
  const credits = {
    development: [
      { name: "Alex Chen", role: "Lead Developer", contribution: "Game engine & core mechanics" },
      { name: "Maria Rodriguez", role: "Game Designer", contribution: "Level design & gameplay balance" },
      { name: "James Wilson", role: "Frontend Developer", contribution: "Website & UI/UX implementation" }
    ],
    art: [
      { name: "Sophia Lee", role: "Pixel Artist", contribution: "Snake & block character designs" },
      { name: "Marcus Brown", role: "UI Artist", contribution: "Menus, icons & interface graphics" }
    ],
    audio: [
      { name: "Oliver Smith", role: "Composer", contribution: "Original soundtrack & sound effects" }
    ],
    testing: [
      { name: "Beta Squad", role: "Playtesters", contribution: "Bug hunting & feedback" }
    ],
    special: [
      { name: "Our Community", role: "Supporters", contribution: "Feedback & encouragement" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="game-card">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Credits & Licenses
        </h1>
        
        <div className="mb-8">
          <p className="text-gray-300">Snake Block Breaker is proudly presented by the talented individuals below. Thank you for making this game possible!</p>
        </div>
        
        {Object.entries(credits).map(([category, people]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 capitalize text-white border-b border-gray-700 pb-2">
              {category}
            </h2>
            <div className="grid gap-4">
              {people.map((person, idx) => (
                <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="font-bold text-green-400">{person.name}</h3>
                  <p className="text-sm text-gray-400">{person.role}</p>
                  <p className="text-sm text-gray-500 mt-1">{person.contribution}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-3 text-white">Open Source Licenses</h2>
          <p className="text-sm text-gray-400 mb-2">This project uses the following open-source software:</p>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            <li>React - MIT License</li>
            <li>Tailwind CSS - MIT License</li>
            <li>React Router DOM - MIT License</li>
            <li>Lucide Icons - ISC License</li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">Game assets & music © 2025 Snake Block Breaker Team. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;