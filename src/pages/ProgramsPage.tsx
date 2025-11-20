import { useEffect, useRef } from 'react';
import { Clock, Users, Zap, Code, Brain, Star, MessageSquare, Trophy, BookOpen, GitBranch, Briefcase, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-[#0A0F1F] min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 opacity-0 animate-fadeInUp">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="text-xl text-[#C7D4E0] max-w-2xl mx-auto font-light">
            Industry-ready training curated for modern campuses
          </p>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="relative overflow-hidden rounded-3xl border border-[#4C6FFF]/30 bg-gradient-to-br from-[#111729]/90 to-[#1a1f35]/50 backdrop-blur-xl p-12 md:p-16 group hover:-translate-y-2 smooth-transition">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition bg-gradient-to-br from-[#4C6FFF]/5 to-[#00E0FF]/5"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#4C6FFF]/10 to-[#00E0FF]/10 rounded-full border border-[#4C6FFF]/30 mb-6">
                <BookOpen size={16} className="text-[#00E0FF]" />
                <span className="text-sm font-semibold text-[#00E0FF]">Complete Placement Preparation</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Campus Recruitment Training
              </h2>

              <p className="text-xl text-[#C7D4E0] mb-8 max-w-2xl font-light leading-relaxed">
                A structured 4–8 week program covering aptitude, coding, and interview preparation. Complete placement-ready transformation.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-[#4C6FFF]/20 hover:border-[#4C6FFF]/50 smooth-transition">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4C6FFF] to-[#8A6DFF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#C7D4E0]">Duration</div>
                      <div className="text-lg font-bold text-white">4–8 weeks</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-[#4C6FFF]/20 hover:border-[#4C6FFF]/50 smooth-transition">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8A6DFF] to-[#00E0FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-[#C7D4E0]">Mode</div>
                      <div className="text-lg font-bold text-white">On-campus / Hybrid</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Aptitude + Coding + HR Interview',
                    'Resume & LinkedIn Optimization',
                    'Mock Tests & Interview Prep',
                    'Performance Reports',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-[#C7D4E0]">
                      <CheckCircle size={20} className="text-[#00E0FF] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#4C6FFF] to-[#8A6DFF] text-white font-bold rounded-xl hover:scale-105 smooth-transition shadow-lg hover:shadow-[#4C6FFF]/50"
              >
                <span>Schedule CRT Program</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="mb-12">
            <h2 className="text-5xl font-black text-white mb-2">Technical Workshops</h2>
            <p className="text-[#C7D4E0] font-light">Intensive skill-building sessions on industry-relevant technologies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Code,
                title: 'Python Programming',
                duration: '2–3 days',
                description: 'Basics to project work',
                gradient: 'from-[#4C6FFF] to-[#8A6DFF]',
              },
              {
                icon: Zap,
                title: 'Web Development',
                duration: '3–5 days',
                description: 'HTML/CSS/React fundamentals',
                gradient: 'from-[#8A6DFF] to-[#00E0FF]',
              },
              {
                icon: Brain,
                title: 'AI/ML Fundamentals',
                duration: '3–4 days',
                description: 'ML basics & real use cases',
                gradient: 'from-[#00E0FF] to-[#4C6FFF]',
              },
              {
                icon: GitBranch,
                title: 'Git & GitHub',
                duration: '1 day',
                description: 'Version control essentials',
                gradient: 'from-[#4C6FFF] to-[#00E0FF]',
              },
              {
                icon: Briefcase,
                title: 'Resume & LinkedIn',
                duration: '1 day',
                description: 'ATS resume + profile optimization',
                gradient: 'from-[#8A6DFF] to-[#4C6FFF]',
              },
              {
                icon: MessageSquare,
                title: 'Communication Skills',
                duration: '2 days',
                description: 'Interview & presentation prep',
                gradient: 'from-[#00E0FF] to-[#8A6DFF]',
              },
            ].map((workshop, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl p-6 border border-[#4C6FFF]/20 bg-gradient-to-br from-[#111729]/80 to-[#1a1f35]/40 backdrop-blur-md hover:border-[#4C6FFF]/50 smooth-transition hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition bg-gradient-to-br from-[#4C6FFF]/5 to-[#00E0FF]/5"></div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${workshop.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                    <workshop.icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{workshop.title}</h3>
                  <div className="text-sm text-[#00E0FF] font-semibold mb-2">{workshop.duration}</div>
                  <p className="text-sm text-[#C7D4E0] mb-4">{workshop.description}</p>

                  <button className="text-sm font-semibold text-[#00E0FF] hover:text-[#4C6FFF] smooth-transition flex items-center space-x-1">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#4C6FFF]/10 to-[#00E0FF]/10 border border-[#4C6FFF]/30 text-white font-bold rounded-xl hover:border-[#4C6FFF]/50 hover:bg-gradient-to-r hover:from-[#4C6FFF]/20 hover:to-[#00E0FF]/20 smooth-transition"
          >
            <span>Book a Workshop</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="relative overflow-hidden rounded-3xl border border-[#00E0FF]/30 bg-gradient-to-br from-[#111729]/90 to-[#1a1f35]/50 backdrop-blur-xl p-12 md:p-16 group hover:-translate-y-2 smooth-transition">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition bg-gradient-to-br from-[#00E0FF]/5 to-[#4C6FFF]/5"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#00E0FF]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00E0FF]/10 to-[#4C6FFF]/10 rounded-full border border-[#00E0FF]/30 mb-6">
                <Trophy size={16} className="text-[#00E0FF]" />
                <span className="text-sm font-semibold text-[#00E0FF]">Innovation Meets Competition</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                On-Campus Hackathons
              </h2>

              <p className="text-xl text-[#C7D4E0] mb-10 max-w-2xl font-light leading-relaxed">
                Fully managed 24–48 hr hackathons with themes, mentors, judging, and prizes. Transform your campus into an innovation hub.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-10">
                {[
                  { label: 'Themes', desc: 'Curated challenges' },
                  { label: 'Mentors & Judges', desc: 'Industry experts' },
                  { label: 'Prizes & Certificates', desc: 'Top winners rewarded' },
                  { label: 'Marketing & Promotion', desc: 'Full event coverage' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-[#4C6FFF]/20 hover:border-[#4C6FFF]/50 smooth-transition text-center">
                    <div className="text-lg font-bold text-white mb-1">{item.label}</div>
                    <div className="text-sm text-[#C7D4E0]">{item.desc}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00E0FF] to-[#4C6FFF] text-[#0A0F1F] font-bold rounded-xl hover:scale-105 smooth-transition shadow-lg hover:shadow-[#00E0FF]/50"
              >
                <span>Host a Hackathon</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="opacity-0">
          <div className="relative overflow-hidden rounded-3xl border border-[#4C6FFF]/20 bg-gradient-to-br from-[#111729]/90 to-[#1a1f35]/50 backdrop-blur-xl p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4C6FFF]/5 via-transparent to-[#00E0FF]/5"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[#4C6FFF]/10 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">Empower Your Campus?</span>
              </h2>
              <p className="text-[#C7D4E0] text-lg mb-8 max-w-2xl mx-auto font-light">
                Choose one or combine multiple programs to create a custom learning pathway for your students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-[#4C6FFF] to-[#8A6DFF] text-white font-bold rounded-xl hover:scale-105 smooth-transition shadow-lg hover:shadow-[#4C6FFF]/50 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('colleges')}
                  className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl hover:bg-white/10 smooth-transition border border-[#4C6FFF]/30 hover:border-[#4C6FFF]/50"
                >
                  View College Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
