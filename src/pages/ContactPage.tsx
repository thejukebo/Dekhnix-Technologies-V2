import { useEffect, useRef } from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
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

  const handleWhatsApp = () => {
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi! I want to know more about Dekhnix programs for my college.', '_blank');
  };

  return (
    <div className="bg-[#0B0C10] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-fadeInUp">
          <h1 className="text-6xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's bring industry-ready training to your campus. Contact us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div ref={addToRefs} className="glass-morphism p-8 rounded-2xl text-center hover-lift opacity-0">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-4">Quick response guaranteed</p>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-2 bg-[#25D366] text-white rounded-lg hover:scale-105 smooth-transition"
            >
              Chat Now
            </button>
          </div>

          <div ref={addToRefs} className="glass-morphism p-8 rounded-2xl text-center hover-lift opacity-0 delay-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm mb-4">Mon-Sat, 9 AM - 6 PM</p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 smooth-transition inline-block"
            >
              +91 XXXXX XXXXX
            </a>
          </div>

          <div ref={addToRefs} className="glass-morphism p-8 rounded-2xl text-center hover-lift opacity-0 delay-200">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-4">We'll respond within 24 hours</p>
            <a
              href="mailto:hello@dekhnix.tech"
              className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 smooth-transition inline-block"
            >
              hello@dekhnix.tech
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={addToRefs} className="space-y-8 opacity-0">
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#30F0FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400 text-sm">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#30F0FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">hello@dekhnix.tech</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#30F0FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-8 rounded-2xl border border-[#30F0FF]/20">
              <h3 className="text-xl font-bold text-white mb-4">Download Brochure</h3>
              <p className="text-gray-400 text-sm mb-6">
                Get detailed information about all our programs, pricing, and success stories.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-lg hover:scale-105 smooth-transition">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
