// src/pages/HomePage.jsx
import { ArrowRight, Trophy, Zap, Shield, Target, Download, Monitor, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import snakeLogo from '../assets/snakelogo2.png';
import snakeBlockLogo from '../assets/SnakeBlockLogo.png';
import homeScreen from '../assets/home_screen.jpg';
import mainGameScreen from '../assets/main_game_screen.jpg';
import skinScreen from '../assets/skin_screen.jpg';

const HomePage = () => {
  return (
     <div className="overflow-hidden bg-slate-950 text-white selection:bg-green-500 selection:text-white">
      {/* Dynamic Arcade Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[95vh] flex items-center justify-center pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Bouncing Logo Area */}
          <div className="inline-block animate-bounce mb-8">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-5 shadow-[0_0_40px_rgba(74,222,128,0.4)] border-4 border-green-300/50">
              <img 
                src={snakeLogo}
                alt="Snake icon"
                className="w-20 h-20 drop-shadow-xl"
              />
            </div>
          </div>

          <img 
            src={snakeBlockLogo} 
            alt="Snake Block Breaker"
            className="w-full max-w-lg mx-auto mb-8 drop-shadow-2xl"
          />

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            The ultimate arcade fusion! Control a growing snake while smashing through blocks in this highly addictive classic reimagined.
          </p>

          {/* Platform Download Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center">
            {/* Google Play */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.regensnakevsblock.sbb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 hover:border-green-400 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(74,222,128,0.2)] w-full sm:w-auto justify-center"
            >
              <Smartphone className="w-6 h-6 text-green-400" />
              <div className="text-left leading-tight">
                <div className="text-xs text-slate-400 font-normal">Get it on</div>
                <div className="text-lg">Google Play</div>
              </div>
            </a>

            {/* Web Version */}
            <Link 
              to="https://snakeblockbreaker.netlify.app" 
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 border-2 border-green-400 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(74,222,128,0.4)] active:scale-95 w-full sm:w-auto justify-center"
            >
              <Globe className="w-6 h-6" />
              <div className="text-left leading-tight">
                <div className="text-xs text-green-100 font-normal">Play instantly</div>
                <div className="text-lg">Play in Browser</div>
              </div>
            </Link>

            {/* Windows / Desktop (Downloads from public folder) */}
            <a 
              href="/downloads/Snake Block Breaker.exe" 
              download
              className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 hover:border-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.2)] w-full sm:w-auto justify-center"
            >
              <Monitor className="w-6 h-6 text-blue-400" />
              <div className="text-left leading-tight">
                <div className="text-xs text-slate-400 font-normal">Download for</div>
                <div className="text-lg flex items-center gap-2">Windows <Download className="w-4 h-4" /></div>
              </div>
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">Free to play on all platforms. Desktop installer included.</p>
        </div>
      </section>
      
      {/* Game Features Section */}   
                <section className="relative z-10 py-24 bg-slate-900/50 backdrop-blur-md border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 inline-block mb-4">
              Smash & Grow
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Master the mechanics and climb the leaderboards with these awesome features.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-400/10", title: "Classic Arcade", desc: "Combine snake mechanics with block breaking." },
                { icon: Zap, color: "text-blue-400", bg: "bg-blue-400/10", title: "Crazy Combos", desc: "Collect special items to multiply your score." },
                { icon: Target, color: "text-rose-400", bg: "bg-rose-400/10", title: "50+ Levels", desc: "Navigate through challenging new obstacles." },
                { icon: Shield, color: "text-purple-400", bg: "bg-purple-400/10", title: "Global Ranks", desc: "Compete with players worldwide for #1." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 hover:border-slate-500 rounded-3xl p-6 transition-all hover:-translate-y-2 hover:shadow-xl group">
                  <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-slate-100">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Gameplay concept"
                className="relative rounded-3xl shadow-2xl border-2 border-slate-700/50 transform transition duration-500 group-hover:rotate-2"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 shadow-2xl animate-bounce border-4 border-slate-900">
                <img src="https://cdn-icons-png.flaticon.com/512/871/871553.png" alt="Block breaker" className="w-12 h-12 invert" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Screenshots Gallery */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">See it in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[homeScreen, mainGameScreen, skinScreen].map((img, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 hover:border-green-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={img} 
                  alt={`Gameplay Screenshot ${i+1}`} 
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="relative z-10 py-24 mb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative background elements inside CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-6">Ready to Break Some Blocks?</h2>
            <p className="relative z-10 text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join thousands of players and experience the most addictive snake game today.</p>
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="https://snakeblockbreaker.netlify.app"  
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-slate-950 font-extrabold text-lg py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.3)] w-full sm:w-auto"
              >
                Play Now Free <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;