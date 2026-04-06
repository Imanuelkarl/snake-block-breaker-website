// src/pages/HomePage.jsx
import { ArrowRight, Trophy, Zap, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import snakeLogo from '../assets/snakeLogo2.png';
import snakeBlockLogo from '../assets/SnakeBlockLogo.png';
import homeScreen from '../assets/home_screen.jpg';
import mainGameScreen from '../assets/main_game_screen.jpg';
import skinScreen from '../assets/skin_screen.jpg';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Gaming concept background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/30 to-gray-900"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block animate-bounce mb-6">
            <div className="bg-green-500/20 rounded-full p-4">
              <img 
                src={snakeLogo}
                alt="Snake icon"
                className="w-16 h-16"
              />
            </div>
          </div>
          <img 
            src={snakeBlockLogo} 
            alt="Snake Block Breaker"
            className="w-1/2 h-32 mx-auto mb-6"
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate arcade fusion! Control a growing snake while breaking blocks in this addictive classic reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
              Play Now Free
            </button>
            <button className="border-2 border-gray-600 hover:border-green-500 text-white font-bold py-3 px-8 rounded-full transition-all">
              Watch Trailer
            </button>
          </div>
        </div>
      </section>
      
      {/* Game Preview Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Game Features</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="game-card flex items-start space-x-4">
                <Trophy className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Classic Arcade Action</h3>
                  <p className="text-gray-400">Combine snake mechanics with block breaking for a unique challenge</p>
                </div>
              </div>
              <div className="game-card flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Power-ups & Combos</h3>
                  <p className="text-gray-400">Collect special items to multiply your score and break multiple blocks</p>
                </div>
              </div>
              <div className="game-card flex items-start space-x-4">
                <Target className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">50+ Challenging Levels</h3>
                  <p className="text-gray-400">Each level introduces new block arrangements and obstacles</p>
                </div>
              </div>
              <div className="game-card flex items-start space-x-4">
                <Shield className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Global Leaderboards</h3>
                  <p className="text-gray-400">Compete with players worldwide for the highest score</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Gameplay concept"
                className="rounded-xl shadow-2xl border border-gray-700"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-lg p-2 shadow-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/871/871553.png" alt="Block breaker" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                homeScreen,
                mainGameScreen,
                skinScreen
            ].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:scale-105 transition-transform">
                <img src={img} alt={`Screenshot ${i+1}`} className="w-full h-128 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Break Some Blocks?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of players experiencing the ultimate arcade fusion!</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all">
            Play Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;