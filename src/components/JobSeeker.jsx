import React, { useState } from 'react';
import { GraduationCap, MapPin, Briefcase, ExternalLink, Code, Terminal, ArrowRight, CheckCircle2, Clock, Trophy } from 'lucide-react';

export default function JobSeeker() {
  const [activeTutor, setActiveTutor] = useState(false);
  const [applied, setApplied] = useState(null);

  const progress = { percentage: 65, hoursLearned: 12, nextMilestone: "Python Mastery Badge" };
  
  const vacancies = [
    { id: 1, title: "Python Developer Intern", company: "Delhi Tech MSME", loc: "Okhla Phase III", tags: ["Python"] },
    { id: 2, title: "Technical Supervisor", company: "Amit Manufacturing", loc: "Bawana", tags: ["Excel"] },
    { id: 3, title: "Data Entry Operator", company: "Rajdhani Exports", loc: "Netaji Subhash Place", tags: ["Typing"] }
  ];
const courses = [
    { title: "Google Data Analytics", provider: "Coursera", link: "https://www.coursera.org/professional-certificates/google-data-analytics", price: "Financial Aid", tag: "Data" },
    { title: "AI Engineer 2026", provider: "Udemy", link: "https://www.udemy.com/topic/artificial-intelligence/", price: "₹499 (Sale)", tag: "Trending" },
    { title: "English for Career", provider: "Coursera", link: "https://www.coursera.org/learn/careerdevelopment", price: "FREE", tag: "Soft Skills" },
    { title: "Tally Prime + GST 2026", provider: "SWAYAM / NPTEL", link: "https://swayam.gov.in/explorer?searchText=tally", price: "FREE", tag: "Accounting" },
    { title: "Excel Skills for Business", provider: "Coursera", link: "https://www.coursera.org/specializations/excel", price: "Financial Aid", tag: "Admin" },
    { title: "ChatGPT & AI Workshop", provider: "Dhruv Rathee Academy", link: "https://dhruvrathee.com", price: "Premium", tag: "AI Mastery" }
  ];
  return (
    <div className="space-y-16 animate-in fade-in zoom-in-95 duration-1000">
      {/* Progress Card */}
      <section className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 bg-[#0D1117] border border-white/5 rounded-[40px] p-8 relative overflow-hidden">
          <h3 className="text-sm font-black text-fuchsia-400 uppercase mb-1">Live Progress</h3>
          <p className="text-2xl font-black text-white italic mb-6">Leveling Up: {progress.nextMilestone}</p>
          <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-fuchsia-600 to-orange-500" style={{ width: `${progress.percentage}%` }}></div>
          </div>
          <Trophy className="text-fuchsia-500/10 absolute right-10 top-10" size={80} />
        </div>
        <div className="bg-[#0D1117] border border-white/5 rounded-[40px] p-8 flex flex-col justify-center">
          <Clock className="text-fuchsia-400 mb-2" size={20} />
          <h4 className="text-4xl font-black text-white italic">{progress.hoursLearned}h</h4>
        </div>
      </section>

      {/* AI Tutor */}
      <section className="bg-gradient-to-br from-[#0D1117] to-[#161B22] rounded-[50px] p-12 border border-white/10 relative overflow-hidden">
        <div className="relative z-10 space-y-6 max-w-2xl">
          <div className="flex items-center gap-2 bg-violet-500/10 w-fit px-4 py-2 rounded-full text-[10px] font-black uppercase text-violet-400 border border-violet-500/20">
            <Terminal size={14}/> Llama 3.1 LLM
          </div>
          <h2 className="text-7xl font-black tracking-tighter leading-none">Bridge the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Skill Gap.</span></h2>
          <button onClick={() => setActiveTutor(!activeTutor)} className="bg-violet-600 px-12 py-5 rounded-2xl font-black text-xs uppercase flex items-center gap-3 active:scale-95">
            {activeTutor ? "Close Module" : "Launch AI Tutor"} <ArrowRight size={20}/>
          </button>
        </div>
        <Code className="absolute -right-20 -bottom-20 opacity-[0.03] rotate-12 text-violet-500" size={500} />
      </section>

      {/* Vacancies */}
      <section className="space-y-10">
        <h3 className="text-4xl font-black tracking-tighter">Live Opportunities</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {vacancies.map(job => (
            <div key={job.id} className="bg-[#0D1117] p-10 rounded-[40px] border border-white/5 hover:border-violet-500/50 transition-all group relative">
              <Briefcase className="text-violet-400 mb-6" size={28}/>
              <h4 className="text-3xl font-black mb-2 group-hover:text-violet-400">{job.title}</h4>
              <p className="text-slate-500 text-xs font-black uppercase mb-8">{job.company}</p>
              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <span className="text-slate-400 text-xs flex items-center gap-1 font-bold italic"><MapPin size={16}/> {job.loc}</span>
                <button onClick={() => setApplied(job.id)} className="text-[10px] font-black text-violet-400 uppercase">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Courses Section */}
<section className="space-y-10">
  <h3 className="text-4xl font-black tracking-tighter">Recommended Skills</h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course, index) => (
      <div key={index} className="bg-[#161B22] p-8 rounded-[30px] border border-white/5 hover:bg-[#1c2128] transition-colors">
        <div className="flex justify-between items-start mb-6">
          <span className="bg-fuchsia-500/10 text-fuchsia-400 text-[10px] font-black px-3 py-1 rounded-full uppercase">
            {course.tag}
          </span>
          <span className="text-slate-500 text-[10px] font-bold italic">{course.price}</span>
        </div>
        <h4 className="text-2xl font-black mb-1">{course.title}</h4>
        <p className="text-slate-400 text-sm mb-6">{course.provider}</p>
        <a 
          href={course.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-black text-white uppercase group"
        >
          View Course <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform"/>
        </a>
      </div>
    ))}
  </div>
</section>
    </div>
  );
}