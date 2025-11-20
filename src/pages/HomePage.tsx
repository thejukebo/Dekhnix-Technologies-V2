import { useEffect, useRef } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Target, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Download, Code, Brain, Trophy, Sparkles, Rocket, Users2, BarChart3 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
    <div className="bg-[#0A0F1F] min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ParticleBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-5 w-96 h-96 bg-gradient-to-tr from-[#00E0FF]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#8A6DFF]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="opacity-0 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#4C6FFF]/10 to-[#00E0FF]/10 rounded-full border border-[#4C6FFF]/30 mb-8">
              <Sparkles size={16} className="text-[#00E0FF]" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">Welcome to the Future of Education</span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              Transform Your <span className="bg-gradient-to-r from-[#4C6FFF] via-[#8A6DFF] to-[#00E0FF] bg-clip-text text-transparent">Campus Into</span>
              <br />
              <span className="bg-gradient-to-r from-[#00E0FF] to-[#4C6FFF] bg-clip-text text-transparent">A Talent Powerhouse</span>
            </h1>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-200">
            <p className="text-xl md:text-2xl text-[#C7D4E0] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Partner with Dekhnix for industry-ready training, hands-on workshops, and innovation-driven hackathons. Elevate your students' careers.
            </p>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#4C6FFF] to-[#8A6DFF] text-white font-bold rounded-xl text-lg hover:scale-105 smooth-transition shadow-lg hover:shadow-[#4C6FFF]/50 relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight size={20} />
              </span>
            </button>
            <button className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl text-lg hover:bg-white/10 smooth-transition flex items-center space-x-2 border border-[#4C6FFF]/30">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-600">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Trophy, label: 'Elite Colleges', value: '100+' },
                { icon: Users2, label: 'Students Trained', value: '50K+' },
                { icon: Rocket, label: 'Success Rate', value: '95%' },
                { icon: BarChart3, label: 'Placement Boost', value: '40%' },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-[#4C6FFF]/20 bg-gradient-to-br from-[#111729]/80 to-[#1a1f35]/40 backdrop-blur-md hover:border-[#4C6FFF]/50 smooth-transition group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#4C6FFF] to-[#00E0FF] rounded-xl flex items-center justify-center group-hover:scale-110 smooth-transition">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-black bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#C7D4E0] text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float z-10">
          <div className="w-6 h-10 border-2 border-[#00E0FF] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00E0FF] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4">
              What <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">We Do</span>
            </h2>
            <p className="text-[#C7D4E0] text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to bridge the gap between campus and corporate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Campus Recruitment Training',
                description: 'End-to-end CRT programs covering aptitude, coding, interviews, and resume building.',
                color: 'from-[#4C6FFF]',
                gradient: 'to-[#8A6DFF]',
                features: ['Daily sessions', 'Mock tests', 'Interview prep'],
              },
              {
                icon: Code,
                title: 'Hands-On Workshops',
                description: 'Industry-relevant technical workshops on trending technologies and frameworks.',
                color: 'from-[#8A6DFF]',
                gradient: 'to-[#00E0FF]',
                features: ['Hands-on training', 'Project work', 'Certificates'],
              },
              {
                icon: Trophy,
                title: 'On-Campus Hackathons',
                description: 'Fully organized hackathons with themes, mentors, judging, and prizes.',
                color: 'from-[#00E0FF]',
                gradient: 'to-[#4C6FFF]',
                features: ['Full organization', 'Mentors & judges', 'Prizes'],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl p-8 border border-[#4C6FFF]/20 bg-gradient-to-br from-[#111729]/80 to-[#1a1f35]/40 backdrop-blur-md hover:border-[#4C6FFF]/50 smooth-transition hover:-translate-y-2"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition bg-gradient-to-br from-[#4C6FFF]/5 to-[#00E0FF]/5"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#C7D4E0] mb-6 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-[#C7D4E0] text-sm">
                        <CheckCircle size={16} className="text-[#00E0FF]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0 bg-gradient-to-b from-transparent via-[#4C6FFF]/5 to-transparent relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4">
              Why <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">Colleges Choose</span> Us
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: Brain,
                title: 'Custom Curriculum',
                description: 'Programs tailored to your students\' needs and placement goals',
                position: 'left',
              },
              {
                icon: Users,
                title: 'Industry Trainers',
                description: 'Learn from professionals with real-world experience',
                position: 'right',
              },
              {
                icon: Zap,
                title: 'End-to-End Logistics',
                description: 'We handle everything from planning to execution',
                position: 'left',
              },
              {
                icon: TrendingUp,
                title: 'Placement-Ready Outcomes',
                description: 'Proven track record of improving placement statistics',
                position: 'right',
              },
              {
                icon: CheckCircle,
                title: 'Zero Infrastructure Burden',
                description: 'We bring all necessary resources and equipment',
                position: 'left',
              },
              {
                icon: Target,
                title: 'Measurable Results',
                description: 'Detailed reports and performance analytics',
                position: 'right',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-8 ${item.position === 'right' ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1 hidden md:block">
                  {item.position === 'left' && (
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4C6FFF] to-[#00E0FF] rounded-2xl flex items-center justify-center">
                      <item.icon size={40} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="p-8 rounded-2xl border border-[#4C6FFF]/20 bg-gradient-to-br from-[#111729]/80 to-[#1a1f35]/40 backdrop-blur-md hover:border-[#4C6FFF]/50 smooth-transition">
                    <div className="flex md:hidden items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#4C6FFF] to-[#00E0FF] rounded-xl flex items-center justify-center">
                        <item.icon size={28} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#C7D4E0]">{item.description}</p>
                  </div>
                </div>
                <div className="flex-1 md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4">
              How <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">It Works</span>
            </h2>
            <p className="text-[#C7D4E0] text-lg">Simple, seamless, and effective</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Discover', description: 'Explore our programs and find the perfect fit' },
              { step: '02', title: 'Proposal', description: 'We create a customized plan for your college' },
              { step: '03', title: 'Delivery', description: 'Expert trainers deliver engaging sessions' },
              { step: '04', title: 'Reporting', description: 'Receive detailed performance analytics' },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#4C6FFF] to-[#8A6DFF] rounded-full flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#4C6FFF]/50 smooth-transition relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#C7D4E0] text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] opacity-30 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0 bg-gradient-to-b from-transparent via-[#8A6DFF]/5 to-transparent relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">Programs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Campus Recruitment Training',
                duration: '4-8 weeks',
                topics: ['Aptitude', 'Coding', 'Interviews', 'Resume Building'],
                gradient: 'from-[#4C6FFF]',
                to: 'to-[#8A6DFF]',
              },
              {
                title: 'Technical Workshops',
                duration: '1-5 days',
                topics: ['Python', 'Web Dev', 'AI/ML', 'Git/GitHub'],
                gradient: 'from-[#8A6DFF]',
                to: 'to-[#00E0FF]',
              },
              {
                title: 'Hackathons',
                duration: '24-48 hours',
                topics: ['Innovation', 'Team Building', 'Real Problems', 'Prizes'],
                gradient: 'from-[#00E0FF]',
                to: 'to-[#4C6FFF]',
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl p-8 border border-[#4C6FFF]/20 bg-gradient-to-br from-[#111729]/80 to-[#1a1f35]/40 backdrop-blur-md hover:border-[#4C6FFF]/50 smooth-transition hover:-translate-y-2"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 smooth-transition bg-gradient-to-br from-[#4C6FFF]/5 to-[#00E0FF]/5"></div>
                <div className="relative z-10">
                  <div className={`w-12 h-1 bg-gradient-to-r ${program.gradient} ${program.to} rounded-full mb-6`}></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${program.gradient} ${program.to} bg-clip-text text-transparent mb-6`}>{program.duration}</div>
                  <ul className="space-y-3 mb-8">
                    {program.topics.map((topic, i) => (
                      <li key={i} className="flex items-center space-x-2 text-[#C7D4E0]">
                        <CheckCircle size={16} className={`text-[#00E0FF]`} />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate('programs')}
                    className="w-full py-3 bg-gradient-to-r from-[#4C6FFF]/10 to-[#00E0FF]/10 hover:from-[#4C6FFF]/20 hover:to-[#00E0FF]/20 text-white rounded-lg smooth-transition flex items-center justify-center space-x-2 border border-[#4C6FFF]/20 hover:border-[#4C6FFF]/50"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 border border-[#4C6FFF]/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4C6FFF]/10 via-[#8A6DFF]/5 to-[#00E0FF]/10"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#00E0FF]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-[#4C6FFF] to-[#00E0FF] bg-clip-text text-transparent">Campus?</span>
              </h2>
              <p className="text-[#C7D4E0] text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Join 100+ elite colleges that have empowered their students with industry-ready skills and improved placement outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-[#4C6FFF] to-[#8A6DFF] text-white font-bold rounded-xl text-lg hover:scale-105 smooth-transition shadow-lg hover:shadow-[#4C6FFF]/50 flex items-center justify-center space-x-2"
                >
                  <span>Schedule a Discovery Call</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('colleges')}
                  className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl text-lg hover:bg-white/10 smooth-transition border border-[#4C6FFF]/30 hover:border-[#4C6FFF]/50"
                >
                  View Programs for Colleges
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
