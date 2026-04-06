// src/pages/AboutPage.jsx
import { Award, Users, Calendar, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="game-card">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          About the Company
        </h1>
        
        <div className="flex justify-center mb-8">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Game studio office"
            className="rounded-xl shadow-lg border border-gray-700 w-full max-w-2xl"
          />
        </div>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-400" /> Our Story
            </h2>
            <p>Founded in 2022, Dareal Games is an indie game studio passionate about creating nostalgic arcade experiences with modern twists. Snake Block Breaker represents our love for classic gameplay mechanics reimagined for today's players.</p>
            <p className="mt-2">What started as a weekend project between two friends has grown into a full-fledged game loved by thousands worldwide. We believe in simple, addictive gameplay that respects your time while providing endless fun.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" /> Our Mission
            </h2>
            <p>To create games that bring joy without complexity. We focus on tight controls, satisfying progression, and fair monetization. No pay-to-win mechanics—just pure skill-based entertainment.</p>
          </section>
          
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-bold">100k+ Players</h3>
              <p className="text-sm text-gray-400">And growing daily</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-bold">Est. 2022</h3>
              <p className="text-sm text-gray-400">Three years of game development</p>
            </div>
          </div>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-white">Contact Us</h2>
            <p>📧 <a href="mailto:hello@pixelpulsegames.com" className="text-green-400 hover:underline">hello@pixelpulsegames.com</a></p>
            <p>🐦 Twitter: <a href="#" className="text-green-400 hover:underline">@PixelPulseGames</a></p>
            <p>💬 Discord: <a href="#" className="text-green-400 hover:underline">discord.gg/snakeblockbreaker</a></p>
            <p className="mt-4 text-gray-400">📍 Virtual Studio — Remote team from 6 countries</p>
          </section>
          
          <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
            <p className="text-center text-green-300 text-sm">
              ⚡ "Making games that make you smile, one block at a time." ⚡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;