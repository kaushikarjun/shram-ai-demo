import React, { useState } from 'react';
import { Sparkles, MessageSquare, X } from 'lucide-react';
import JobSeeker from './components/JobSeeker';
import MSMEAdmin from './components/MSMEAdmin';

export default function ShramAI() {
  const [view, setView] = useState('seeker');
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 pb-20 font-sans tracking-tight selection:bg-violet-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#05070A]/90 backdrop-blur-2xl border-b border-white/5 px-10 py-6 flex justify-between items-center shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          <div className="bg-violet-600 p-2.5 rounded-2xl shadow-[0_0_25px_rgba(139,92,246,0.5)]">
            <Sparkles className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Shram<span className="text-violet-500">AI</span>
          </h1>
        </div>
        
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-lg">
          <button onClick={() => setView('seeker')} className={`px-8 py-2.5 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${view === 'seeker' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>JOB SEEKER</button>
          <button onClick={() => setView('msme')} className={`px-8 py-2.5 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${view === 'msme' ? 'bg-violet-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}>MSME ADMIN</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {view === 'seeker' ? <JobSeeker /> : <MSMEAdmin />}
      </main>

      {/* Floating AI Portal */}
      <div className="fixed bottom-12 right-12 z-[100]">
        <button onClick={() => setShowChat(!showChat)} className="bg-violet-600 w-24 h-24 rounded-[40px] shadow-[0_0_50px_rgba(139,92,246,0.5)] flex items-center justify-center text-white hover:scale-110 transition-all duration-500">
          {showChat ? <X size={40}/> : <MessageSquare size={40}/>}
        </button>
      </div>

      <footer className="text-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-800 py-16">
        ShramAI • Delhi AI Grind 2026 
      </footer>
    </div>
  );
}