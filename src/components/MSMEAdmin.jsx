import React, { useState } from 'react'; // Added useState import
import { 
  ShieldCheck, Landmark, FileText, Receipt, Calculator, 
  Users, ArrowRight, TrendingUp, Globe, Lock, Zap, 
  Plus, Send, X, CheckCircle2 // <--- Add this
} from 'lucide-react';
export default function MSMEAdmin() {
  // 1. State for the Vacancy Form
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', loc: '', salary: '', tags: '' });

  const handlePostJob = (e) => {
    e.preventDefault();
    console.log("Job Data:", newJob);
    setShowForm(false);
    alert("Job Broadcasted to Delhi Job Seekers!");
  };

  // 2. Data Arrays
  const tools = [
    { 
      title: "GST Automator", 
      desc: "One-tap GSTR-1 & 3B filing with AI error-check.", 
      icon: <FileText className="text-violet-400" />,
      tag: "Live"
    },
    { 
      title: "Online Biller", 
      desc: "Generate professional GST-ready invoices.", 
      icon: <Receipt className="text-fuchsia-400" />,
      tag: "Active"
    },
    { 
      title: "MSME Calculator", 
      desc: "Calculate loan interest & profit margins.", 
      icon: <Calculator className="text-emerald-400" />,
      tag: "New"
    }
  ];

  const expansionTips = [
    {
      title: "Market Expansion",
      tip: "Demand for your product type is rising in Dwarka. Consider a local warehouse.",
      icon: <Globe size={20} className="text-blue-400" />
    },
    {
      title: "Inventory Control",
      tip: "AI predicts a 20% raw material price hike next month. Stock up now.",
      icon: <Lock size={20} className="text-orange-400" />
    }
  ];
  const msmeUpdates = [
  { 
    id: 1, 
    type: "Compliance", 
    title: "45-Day Payment Mandate", 
    desc: "Strict enforcement of Section 15: Buyers must pay MSMEs within 45 days or face 3x RBI interest rates.", 
    status: "Active 2026" 
  },
  { 
    id: 2, 
    type: "Opportunity", 
    title: "₹10,000 Cr SME Growth Fund", 
    desc: "New equity-based fund for high-potential MSMEs to scale without increasing debt burdens.", 
    status: "New" 
  },
  { 
    id: 3, 
    type: "Rule Update", 
    title: "Collateral-Free Limit: ₹20 Lakh", 
    desc: "RBI has proposed doubling the collateral-free loan limit under PMMY to ₹20 lakh from April 1, 2026.", 
    status: "Upcoming" 
  }
];

  // 3. Single Return Statement
  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      
      {/* Header Section */}
      <header className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#0D1117] rounded-[50px] p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 bg-green-500/10 w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-green-400 border border-green-500/20">
              <ShieldCheck size={14}/> Verified Business ID
            </div>
            <h2 className="text-6xl font-black text-white tracking-tighter">785 <span className="text-lg text-slate-700 italic font-medium">CIBIL Rank</span></h2>
            <p className="text-slate-400 font-medium max-w-sm">Verification confirms 100% wage compliance. Your business is eligible for SIDBI fast-track loans.</p>
          </div>
          <Landmark size={300} className="absolute -right-20 -bottom-20 opacity-[0.02] text-white" />
        </div>
        
        <div className="bg-violet-600 rounded-[50px] p-10 flex flex-col justify-center items-start shadow-2xl shadow-violet-600/20">
          <Zap size={48} className="text-yellow-400 fill-yellow-400 mb-8" />
          <h3 className="text-2xl font-black text-white italic">Expansion Hub</h3>
          <p className="text-sm text-violet-100 mt-4 leading-relaxed font-medium">AI predicts high leverage for new government subsidies based on your compliance score.</p>
        </div>
      </header>

      {/* AI Expansion & Control Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#0D1117] p-10 rounded-[50px] border border-white/5">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 italic">
            <TrendingUp className="text-emerald-400" /> Expansion Insights
          </h3>
          <div className="space-y-6">
            {expansionTips.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-violet-500/30 transition-all">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-black text-white text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0D1117] p-10 rounded-[50px] border border-white/5 relative overflow-hidden">
          <h3 className="text-2xl font-black text-white mb-8 italic">Management Control</h3>
          <div className="space-y-4 relative z-10">
            <div className="p-6 bg-white/5 rounded-3xl">
              <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Automated Documentation</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold italic">Audit Readiness</span>
                <span className="text-emerald-400 font-black">98% Secure</span>
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl">
              <p className="text-[10px] font-black text-slate-500 uppercase mb-2">Taxation Monitor</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold italic">Next Filing (GSTR-1)</span>
                <span className="text-violet-400 font-black">7 Days Left</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="space-y-8">
        <h3 className="text-4xl font-black tracking-tighter text-white">Digital Tool Suite</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-[#0D1117] p-8 rounded-[40px] border border-white/5 hover:border-violet-500/50 transition-all group">
              <div className="bg-white/5 p-4 rounded-2xl w-fit mb-6 group-hover:bg-violet-600/20 transition-all">{tool.icon}</div>
              <h4 className="text-2xl font-black text-white mb-2">{tool.title}</h4>
              <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8">{tool.desc}</p>
              <button className="flex items-center justify-between w-full p-4 bg-white/5 rounded-2xl group-hover:bg-violet-600 transition-all text-[10px] font-black uppercase text-white">
                Open Tool <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Post Trigger */}
      <section className="bg-white p-12 rounded-[50px] flex flex-col md:flex-row justify-between items-center shadow-2xl">
        <div className="space-y-2 mb-6 md:mb-0">
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">Source Quality Talent</h3>
          <p className="text-slate-500 text-sm font-bold">Instantly reach seekers who completed ShramAI modules.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="px-10 py-6 bg-slate-900 text-white rounded-[30px] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-violet-600 transition-all shadow-xl flex items-center gap-3"
        >
          <Plus size={18} /> Post Vacancy
        </button>
      </section>
      <section className="space-y-10 border-t border-white/5 pt-16">
        <div className="flex justify-between items-end">
       <div>
        <h3 className="text-sm font-black text-orange-500 uppercase mb-1">MSME Admin Hub</h3>
        <h2 className="text-4xl font-black tracking-tighter">Rules & Opportunities</h2>
       </div>
        <span className="text-slate-500 text-[10px] font-bold uppercase italic">Last Updated: Feb 2026</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
       {msmeUpdates.map((item) => (
       <div key={item.id} className="bg-[#0D1117] p-8 rounded-[30px] border-l-4 border-orange-500/50 hover:bg-white/[0.02] transition-all">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.type}</span>
          <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></div>
        </div>
        <h4 className="text-xl font-black text-white mb-3 italic">{item.title}</h4>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">{item.desc}</p>
        <div className="flex items-center gap-2">
           <CheckCircle2 size={14} className="text-orange-500" />
           <span className="text-[10px] font-black uppercase text-orange-500">{item.status}</span>
        </div>
         </div>
       ))}
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110] flex items-center justify-center p-6">
          <div className="bg-[#0D1117] border border-white/10 w-full max-w-2xl rounded-[50px] p-12 relative animate-in zoom-in duration-300">
            <button onClick={() => setShowForm(false)} className="absolute right-10 top-10 text-slate-500 hover:text-white"><X size={32}/></button>
            <h3 className="text-4xl font-black text-white tracking-tighter mb-8 italic">New Vacancy</h3>
            <form onSubmit={handlePostJob} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Job Title</label>
                  <input required className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mt-2 focus:border-violet-500 outline-none text-white font-bold" placeholder="e.g. Tally Operator" onChange={(e) => setNewJob({...newJob, title: e.target.value})} />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Location</label>
                  <input required className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 mt-2 focus:border-violet-500 outline-none text-white font-bold" placeholder="e.g. Okhla" onChange={(e) => setNewJob({...newJob, loc: e.target.value})} />
                </div>
              </div>
              <button type="submit" className="w-full py-6 bg-violet-600 text-white rounded-[25px] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-violet-500 transition-all flex items-center justify-center gap-3">
                Broadcast Vacancy <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
      
    </div>
  );
}