import React, { useState, useEffect } from 'react';
import { Shield, MapPin, UserX, Star, Lock, ChevronRight } from 'lucide-react';

const LINKS = [
  "https://dj83t.bemobtrcks.com/go/81d45cf6-5ba2-407a-b8a8-7e4ad39c23f1?ad_id={{ad.id}}&adset_id={{adset.id}}&campaign_id={{campaign.id}}&ad_name={{ad.name}}&adset_name={{adset.name}}&campaign_name={{campaign.name}}
",
  "https://dj83t.bemobtrcks.com/go/81d45cf6-5ba2-407a-b8a8-7e4ad39c23f1?ad_id={{ad.id}}&adset_id={{adset.id}}&campaign_id={{campaign.id}}&ad_name={{ad.name}}&adset_name={{adset.name}}&campaign_name={{campaign.name}}
"
];

const getRandomLink = () => LINKS[Math.floor(Math.random() * LINKS.length)];

const OfferLink = ({ children, className, ...props }: any) => {
  const [href, setHref] = useState('#');

  useEffect(() => {
    setHref(getRandomLink());
  }, []);

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-[#ff0055] selection:text-white pb-24 md:pb-0">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-white">
            VELVET<span className="text-[#ff0055]">CLUB</span>
          </div>
          <OfferLink className="px-6 py-2 rounded-full border-2 border-[#00ffcc] text-[#00ffcc] font-bold text-sm hover:bg-[#00ffcc] hover:text-black transition-colors">
            LOGIN
          </OfferLink>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-screen text-center px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 text-red-500 px-4 py-1.5 rounded-md font-bold text-xs tracking-widest uppercase mb-8">
            <Lock size={14} /> Warning: 18+ Content
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 drop-shadow-2xl">
            MEET LOCAL SINGLES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] to-blue-500" style={{ WebkitTextStroke: '1px rgba(0,255,204,0.3)' }}>
              TONIGHT
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
            Don't spend another night alone. Join the most exclusive private dating community in your area. <strong className="text-white font-semibold">100% Discrete.</strong>
          </p>
          
          <OfferLink className="rgb-btn px-8 py-4 md:px-12 md:py-5 rounded-full text-white font-black text-lg md:text-xl tracking-wider uppercase flex items-center gap-3">
            GET FREE ACCESS NOW <ChevronRight size={24} />
          </OfferLink>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-[#0a0a0a] py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-4 md:pt-0">
            <h3 className="text-4xl md:text-5xl font-black text-[#00ffcc] mb-2">12,405</h3>
            <p className="text-gray-500 font-semibold tracking-widest uppercase text-sm">Online Now</p>
          </div>
          <div className="pt-8 md:pt-0">
            <h3 className="text-4xl md:text-5xl font-black text-[#00ffcc] mb-2">4,800+</h3>
            <p className="text-gray-500 font-semibold tracking-widest uppercase text-sm">New Photos Today</p>
          </div>
          <div className="pt-8 md:pt-0">
            <h3 className="text-4xl md:text-5xl font-black text-[#00ffcc] mb-2">98%</h3>
            <p className="text-gray-500 font-semibold tracking-widest uppercase text-sm">Response Rate</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#050505] relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Why Choose Us?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#ff0055] to-[#ff9900] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Secure & Private", desc: "Your privacy is our priority. Advanced encryption keeps your chats and photos safe." },
              { icon: MapPin, title: "Nearby Matches", desc: "Our GPS matching system finds active users within 5 miles of your location." },
              { icon: UserX, title: "No Fakes", desc: "Every profile is manually verified. Say goodbye to bots and hello to real people." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-[#ff0055]/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-[#ff0055]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff0055]/20 transition-colors">
                  <feature.icon className="text-[#ff0055]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Active Members</h2>
            <p className="text-[#ff0055] font-medium text-lg">Tap photo to unlock & view profile</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ].map((img, idx) => (
              <OfferLink key={idx} className="relative group aspect-[4/5] overflow-hidden rounded-xl border-2 border-white/10 hover:border-[#00ffcc] transition-colors block">
                <img 
                  src={img} 
                  alt="Member" 
                  className="w-full h-full object-cover blur-md group-hover:blur-sm transition-all duration-500 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-black/80 backdrop-blur-sm border border-[#ff0055] text-[#ff0055] px-6 py-2 rounded-full font-bold tracking-widest text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(255,0,85,0.5)]">
                    <Lock size={16} /> UNLOCK
                  </div>
                </div>
              </OfferLink>
            ))}
          </div>

          <div className="text-center mt-16">
            <OfferLink className="inline-block border-2 border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-black">
              VIEW ALL PROFILES
            </OfferLink>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-[#111] relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">How It Works</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { num: "01", title: "Create Free Account", desc: "It takes less than 60 seconds to join. No credit card needed." },
              { num: "02", title: "Browse & Match", desc: "Use our advanced filters to find exactly who you are looking for." },
              { num: "03", title: "Chat & Meet", desc: "Start a conversation and arrange a meetup instantly." }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#050505] p-6 md:p-8 rounded-2xl flex items-center gap-6 md:gap-10 border-l-4 border-[#00ffcc] shadow-lg">
                <span className="text-5xl md:text-7xl font-black text-white/5">{step.num}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#080808] relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { text: "I found someone within 10 minutes of signing up. This site is legit!", author: "Mike, 24" },
              { text: "Finally a place with real people. Highly recommended.", author: "Sarah, 22" }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl border-l-4 border-[#ff0055]">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-lg italic mb-4">"{review.text}"</p>
                <p className="text-white font-bold">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-3xl font-black tracking-tighter text-white mb-8">
            VELVET<span className="text-[#ff0055]">CLUB</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <OfferLink className="text-gray-500 hover:text-white transition-colors font-medium">Home</OfferLink>
            <OfferLink className="text-gray-500 hover:text-white transition-colors font-medium">Terms of Use</OfferLink>
            <OfferLink className="text-gray-500 hover:text-white transition-colors font-medium">Privacy Policy</OfferLink>
            <OfferLink className="text-gray-500 hover:text-white transition-colors font-medium">Contact</OfferLink>
          </div>
          
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            This site contains user-generated content and is intended for adults 18 years of age or older. 
            By entering this site you certify that you are 18 years or older.
          </p>
          
          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Velvet Club Dating. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky Button */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <OfferLink className="rgb-btn w-full block text-center py-4 rounded-xl text-white font-black tracking-widest uppercase shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          JOIN FREE NOW
        </OfferLink>
      </div>
    </div>
  );
}
