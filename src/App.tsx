/**
 * KR Borewells - Professional Borewell Services Website
 * Built with React, TypeScript, and Tailwind CSS
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Droplets, 
  Phone, 
  MessageSquare, 
  Home as HomeIcon, 
  Settings, 
  Image as ImageIcon, 
  Contact, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Tractor, 
  Factory, 
  House, 
  Wrench,
  MapPin,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Send,
  CheckCircle2,
  HardHat,
  Award,
  Users,
  Target,
  Zap,
  Shield,
  Play,
  X as CloseIcon,
  Waves,
  Search,
  Sparkles,
  PhoneCall,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Configuration ---
const PHONE_PRIMARY = '9440207002';
const PHONE_SECONDARY = '8008877802';
const PHONE_NUMBER = `91${PHONE_PRIMARY}`;
const WHATSAPP_MESSAGE = encodeURIComponent('Hello KR Borewells, I need borewell service');
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const PHONE_LINK = `tel:${PHONE_PRIMARY}`;
const PHONE_LINK_SECONDARY = `tel:${PHONE_SECONDARY}`;
const EMAIL = 'rpnaidu456@gmail.com';
const ADDRESS = 'KR Borewell, Nellore, Srinagar Colony Extension, AC Nagar, Balaji Nagar, Nellore, Andhra Pradesh 524002';
const GOOGLE_MAPS_LINK = 'https://www.google.com/maps?q=KR+BOREWELL+Nellore+Srinagar+Colony+Extension+AC+Nagar+Balaji+Nagar+Nellore+Andhra+Pradesh+524002';

// --- Image Assets (using uploaded images) ---
const IMAGES = {
  hero: '/images/borewellwork.jpeg',
  work1: '/images/borewellwork1.jpeg',
  work2: '/images/borewell wokrs2.jpeg',
  video: '/images/samplevideo.mp4',
  owner: '/images/owner.png'
};

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-header shadow-lg' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <Droplets className={`w-8 h-8 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-extrabold tracking-tighter font-headline uppercase transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>KR BOREWELLS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['home', 'about', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`font-headline font-bold uppercase tracking-tight transition-colors text-sm ${
                activePage === page 
                  ? (scrolled ? 'text-primary' : 'text-white') 
                  : (scrolled ? 'text-slate-500 hover:text-primary' : 'text-white/70 hover:text-white')
              }`}
            >
              {page}
            </button>
          ))}
          <a 
            href={PHONE_LINK}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-headline font-bold rounded-xl hover:bg-primary-container transition-all text-sm"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <button className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 p-6 flex flex-col gap-4"
          >
            {['home', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setActivePage(page);
                  setIsOpen(false);
                }}
                className={`font-headline font-bold uppercase tracking-tight text-left ${
                  activePage === page ? 'text-primary' : 'text-slate-500'
                }`}
              >
                {page}
              </button>
            ))}
            <a 
              href={PHONE_LINK}
              className="flex items-center gap-2 px-4 py-3 bg-primary text-white font-headline font-bold rounded-xl justify-center mt-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <footer className="bg-slate-900 py-16 px-6 pb-28 md:pb-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="text-primary w-6 h-6" />
            <span className="text-xl font-bold text-white font-headline">KR BOREWELLS</span>
          </div>
          <p className="text-slate-400 font-body text-sm leading-relaxed mb-6">
            KR Borewells is a trusted name in borewell drilling services with years of experience in delivering reliable groundwater solutions.
          </p>
          {/* Address */}
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-slate-400 text-sm font-body leading-relaxed">{ADDRESS}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm uppercase tracking-wider text-white font-headline">Quick Links</span>
            <button onClick={() => setActivePage('home')} className="text-slate-400 hover:text-primary text-sm text-left transition-colors">Home</button>
            <button onClick={() => setActivePage('about')} className="text-slate-400 hover:text-primary text-sm text-left transition-colors">About Us</button>
            <button onClick={() => setActivePage('contact')} className="text-slate-400 hover:text-primary text-sm text-left transition-colors">Contact</button>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm uppercase tracking-wider text-white font-headline">Services</span>
            <span className="text-slate-400 text-sm">Borewell Drilling</span>
            <span className="text-slate-400 text-sm">Pump Installation</span>
            <span className="text-slate-400 text-sm">Water Detection</span>
            <span className="text-slate-400 text-sm">Maintenance</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-sm uppercase tracking-wider text-white font-headline">Contact Us</span>
            <a href={PHONE_LINK} className="text-slate-400 hover:text-primary text-sm transition-colors flex items-center gap-2">
              <Phone size={14} /> {PHONE_PRIMARY}
            </a>
            <a href={PHONE_LINK_SECONDARY} className="text-slate-400 hover:text-primary text-sm transition-colors flex items-center gap-2">
              <Phone size={14} /> {PHONE_SECONDARY}
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25D366] text-sm transition-colors flex items-center gap-2">
              <MessageSquare size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-700 my-8"></div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm font-body">© 2024 KR Borewells. All Rights Reserved.</p>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <a href={PHONE_LINK} className="hover:text-primary transition-colors">{PHONE_PRIMARY}</a>
          <span>|</span>
          <a href={PHONE_LINK_SECONDARY} className="hover:text-primary transition-colors">{PHONE_SECONDARY}</a>
        </div>
      </div>
      <div className="mt-6 text-center">
        <a 
          href="https://uxitech.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-500 hover:text-primary text-sm font-body transition-colors"
        >
          Built by <span className="font-bold">UXITech</span>
        </a>
      </div>
    </div>
  </footer>
);

const BottomNav = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => (
  <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-100 flex justify-around items-center px-2 py-2">
    {[
      { id: 'home', icon: HomeIcon, label: 'Home' },
      { id: 'services', icon: Settings, label: 'Services' },
      { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
      { id: 'contact', icon: Contact, label: 'Contact' }
    ].map((item) => (
      <button
        key={item.id}
        onClick={() => setActivePage(item.id)}
        className={`flex flex-col items-center justify-center transition-all px-3 py-2 rounded-xl ${
          activePage === item.id ? 'text-primary bg-primary/10' : 'text-slate-400'
        }`}
      >
        <item.icon size={20} />
        <span className="text-[10px] font-bold font-headline mt-1">{item.label}</span>
      </button>
    ))}
  </nav>
);

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section with Video/Image Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={IMAGES.hero}
            className="w-full h-full object-cover"
          >
            <source src={IMAGES.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary-container/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6 border border-white/20">
              🏆 25+ Years of Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-[1.1] mb-6">
              Trusted Borewell Services in Your Area
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-body font-light opacity-90 mb-10 leading-relaxed max-w-2xl">
              Fast, Reliable & Experienced Borewell Experts. We deliver life-sustaining water solutions with precision and advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={PHONE_LINK}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-headline font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all active:scale-95"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-headline font-bold rounded-xl hover:bg-[#20bd5a] transition-all active:scale-95"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                WhatsApp Now
              </a>
              <button 
                onClick={() => setActivePage('contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary-container text-on-secondary-container font-headline font-bold rounded-xl hover:bg-[#fddd79] transition-all active:scale-95"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-headline uppercase tracking-widest">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronLeft className="rotate-[-90deg]" size={24} />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-headline font-black mb-1">25+</p>
            <p className="text-xs font-bold text-white/70 uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-headline font-black mb-1">5000+</p>
            <p className="text-xs font-bold text-white/70 uppercase tracking-wider">Projects Done</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-headline font-black mb-1">100%</p>
            <p className="text-xs font-bold text-white/70 uppercase tracking-wider">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-headline font-black mb-1">24/7</p>
            <p className="text-xs font-bold text-white/70 uppercase tracking-wider">Support Available</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.work1}
                alt="KR Borewells Drilling Work" 
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-2xl text-white max-w-[240px] hidden sm:block">
              <p className="text-4xl font-headline font-black mb-2">25+</p>
              <p className="text-sm font-headline font-bold opacity-80 uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">About KR Borewells</span>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-slate-900 tracking-tighter mb-8">Why Choose KR Borewells?</h2>
            <div className="space-y-6 text-slate-600 font-body leading-relaxed text-lg">
              <p>
                KR Borewells has been a trusted name in groundwater solutions since 1999. With over 25 years of experience, we've successfully completed 5000+ projects across residential, agricultural, and industrial sectors.
              </p>
              <p>
                Our team of certified engineers and experienced technicians use state-of-the-art equipment and geological science to ensure optimal water yield for every project.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <span className="font-headline font-bold text-slate-900 text-sm">Certified Experts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <span className="font-headline font-bold text-slate-900 text-sm">Latest Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <span className="font-headline font-bold text-slate-900 text-sm">Quality Assured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <span className="font-headline font-bold text-slate-900 text-sm">5000+ Happy Clients</span>
              </div>
            </div>
            <button 
              onClick={() => setActivePage('about')}
              className="mt-10 px-8 py-4 bg-primary text-white font-headline font-bold rounded-xl hover:bg-primary-container transition-all"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-900 tracking-tighter">Professional Borewell Solutions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 font-body text-lg">Comprehensive groundwater services for all your needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: 'Borewell Drilling', desc: 'Expert drilling services for residential, agricultural & industrial needs with precise depth analysis.', color: 'bg-primary text-white' },
              { icon: Waves, title: 'Submersible Pumps', desc: 'Professional installation & repair of submersible pumps for optimal water flow.', color: 'bg-secondary-container text-on-secondary-container' },
              { icon: Search, title: 'Water Detection', desc: 'Advanced groundwater detection using geological surveys and modern technology.', color: 'bg-slate-800 text-white' },
              { icon: Wrench, title: 'Maintenance', desc: 'Regular cleaning, flushing & maintenance services to maximize borewell efficiency.', color: 'bg-emerald-600 text-white' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${service.color} rounded-3xl p-8 flex flex-col h-full shadow-lg hover:scale-[1.02] transition-transform cursor-pointer`}
                onClick={() => setActivePage('services')}
              >
                <service.icon className="w-12 h-12 mb-6" />
                <h3 className="text-xl font-headline font-extrabold mb-3">{service.title}</h3>
                <p className="opacity-80 font-body text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setActivePage('services')}
              className="px-8 py-4 bg-primary text-white font-headline font-bold rounded-xl hover:bg-primary-container transition-all"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-900 tracking-tighter">See Our Projects</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 font-body text-lg">Real borewell drilling work by our expert team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[IMAGES.hero, IMAGES.work1, IMAGES.work2].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setActivePage('gallery')}
              >
                <img 
                  src={img} 
                  alt={`KR Borewells Project ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-900 tracking-tighter">What Our Clients Say</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 font-body text-lg">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Farm Owner, Karnataka", text: "KR Borewells did an excellent job on our agricultural borewell. They found water at the exact depth they predicted. Highly professional team!" },
              { name: "Priya Sharma", role: "Homeowner, Hyderabad", text: "Very satisfied with their service. The team was punctual, explained everything clearly, and completed the work on time. Best borewell service in the area!" },
              { name: "Mohammed Ansari", role: "Factory Manager, Chennai", text: "We needed a high-capacity borewell for our factory. KR Borewells delivered beyond expectations. Their water detection technology is top-notch." },
              { name: "Lakshmi Devi", role: "Society President, Bangalore", text: "Our apartment complex had water problems for years. KR Borewells solved it in days. The submersible pump they installed works perfectly." },
              { name: "Suresh Reddy", role: "Agriculturist, Andhra Pradesh", text: "I've worked with many borewell companies, but KR Borewells is the best. Their maintenance service has kept our borewells running for 10+ years." }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-primary"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-600 mb-6 font-body leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-headline font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-headline font-bold text-sm text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500 font-body">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.work1} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">About Us</span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6">About KR Borewells</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-body">Trusted Borewell Services in Nellore</p>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-16 md:py-20 bg-surface px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-slate-900 tracking-tighter mb-8">About KR Borewells</h2>
          <p className="text-slate-600 font-body leading-relaxed text-lg md:text-xl">
            KR Borewells is a trusted borewell drilling service provider in Nellore with years of experience in delivering reliable groundwater solutions. We specialize in borewell drilling, pump installation, and maintenance services with a strong commitment to quality and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Owner & Contact Section */}
      <section className="py-16 md:py-20 bg-surface-container-low px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Owner Image */}
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl border-8 border-white ring-4 ring-primary/20">
                  <img 
                    src={IMAGES.owner}
                    alt="KR Borewells Owner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                  <span className="font-headline font-bold text-sm">Founder & Owner</span>
                </div>
              </motion.div>
            </div>

            {/* Contact Card */}
            <div className="flex-1 w-full">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-slate-900">Contact Numbers</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <a 
                    href={PHONE_LINK}
                    className="flex items-center gap-3 bg-slate-50 hover:bg-primary hover:text-white rounded-xl p-4 transition-all group border border-slate-200"
                  >
                    <PhoneCall className="w-5 h-5 text-primary group-hover:text-white" />
                    <span className="font-headline font-bold text-lg text-slate-900 group-hover:text-white">{PHONE_PRIMARY}</span>
                  </a>
                  <a 
                    href={PHONE_LINK_SECONDARY}
                    className="flex items-center gap-3 bg-slate-50 hover:bg-primary hover:text-white rounded-xl p-4 transition-all group border border-slate-200"
                  >
                    <PhoneCall className="w-5 h-5 text-primary group-hover:text-white" />
                    <span className="font-headline font-bold text-lg text-slate-900 group-hover:text-white">{PHONE_SECONDARY}</span>
                  </a>
                </div>

                {/* Email */}
                <a 
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 bg-slate-50 hover:bg-primary hover:text-white rounded-xl p-4 transition-all group border border-slate-200 mb-6"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                  <span className="font-headline font-bold text-slate-900 group-hover:text-white">{EMAIL}</span>
                </a>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <a 
                    href={PHONE_LINK}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white rounded-xl p-4 transition-all font-headline font-bold"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl p-4 transition-all font-headline font-bold"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>

                {/* Location Button */}
                <a 
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl p-4 transition-all w-full"
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-headline font-bold">View Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-slate-900 tracking-tighter">Why Choose KR Borewells?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Experienced Team', desc: 'Years of experience in borewell drilling with proven track record.' },
              { icon: Zap, title: 'Modern Equipment', desc: 'State-of-the-art drilling rigs and detection equipment.' },
              { icon: Shield, title: 'Quality Service', desc: 'Committed to delivering high-quality services.' },
              { icon: Clock, title: 'Timely Delivery', desc: 'Projects completed within promised timeline.' },
              { icon: Users, title: 'Customer Support', desc: 'Transparent communication and ongoing support.' },
              { icon: Target, title: 'Accurate Detection', desc: 'High accuracy in water detection and yield prediction.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-headline font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-black tracking-tighter mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-white/80 mb-8 font-body">Contact us today for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={PHONE_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-headline font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: {PHONE_PRIMARY}
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-headline font-bold rounded-xl hover:bg-[#20bd5a] transition-all"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Services Page
const ServicesPage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const services = [
    {
      icon: Droplets,
      title: 'Borewell Drilling',
      desc: 'Professional borewell drilling services for all types of terrain. We handle residential (4.5" - 6.5"), agricultural (6" - 8"), and industrial (8" - 12") drilling with precision.',
      features: ['Depth up to 1500 feet', 'All terrain capability', 'Water yield guarantee', 'Professional equipment'],
      color: 'bg-primary'
    },
    {
      icon: Waves,
      title: 'Submersible Pump Installation',
      desc: 'Expert installation of submersible pumps with proper sizing based on water yield and depth. We work with all major brands and provide after-installation support.',
      features: ['All major brands', 'Proper pump sizing', 'Cable & pipe work', 'Testing & commissioning'],
      color: 'bg-emerald-600'
    },
    {
      icon: Search,
      title: 'Water Detection Services',
      desc: 'Advanced groundwater detection using geological surveys, resistivity testing, and modern equipment. We identify the best drilling location for maximum water yield.',
      features: ['Geological survey', 'Resistivity testing', 'Yield prediction', 'Site assessment'],
      color: 'bg-slate-800'
    },
    {
      icon: Wrench,
      title: 'Borewell Cleaning & Maintenance',
      desc: 'Restore your borewell\'s efficiency with our professional cleaning and maintenance services. We offer high-pressure flushing, de-silting, and pump servicing.',
      features: ['High-pressure flushing', 'De-silting service', 'Pump maintenance', 'Yield restoration'],
      color: 'bg-amber-600'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.hero} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6">Professional Borewell Solutions</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-body">Comprehensive groundwater services tailored to your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className={`w-full md:w-1/2 ${service.color} rounded-3xl p-12 text-white`}>
                  <service.icon className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl font-headline font-extrabold mb-4">{service.title}</h3>
                  <p className="text-white/80 font-body leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white/80" />
                        <span className="font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-headline font-bold text-slate-900">Why Choose Our {service.title}?</h3>
                  <p className="text-slate-600 font-body leading-relaxed">
                    With 25+ years of experience, we bring unmatched expertise to every project. Our team uses advanced equipment and follows industry best practices to deliver results that exceed expectations.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href={PHONE_LINK}
                      className="inline-flex items-center px-6 py-3 bg-primary text-white font-headline font-bold rounded-xl hover:bg-primary-container transition-all"
                    >
                      <Phone className="mr-2 w-4 h-4" />
                      Call Now
                    </a>
                    <a 
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-headline font-bold rounded-xl hover:bg-[#20bd5a] transition-all"
                    >
                      <MessageSquare className="mr-2 w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Service Areas</span>
          <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-900 tracking-tighter mb-6">We Serve Across India</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-body">From residential complexes to agricultural farms and industrial plants, we provide services across multiple states.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Karnataka', 'Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Maharashtra', 'Kerala', 'Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Bihar', 'Odisha'].map((state, idx) => (
              <div key={idx} className="bg-white px-4 py-3 rounded-xl shadow-sm font-headline font-bold text-slate-700 text-sm">
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-black tracking-tighter mb-6">Need a Borewell Service?</h2>
          <p className="text-xl text-white/80 mb-10 font-body">Get a free quote within 24 hours. No obligations.</p>
          <button 
            onClick={() => setActivePage('contact')}
            className="px-10 py-5 bg-white text-primary font-headline font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all text-lg"
          >
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

// Gallery Page
const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    { src: IMAGES.hero, title: 'Borewell Drilling in Progress' },
    { src: IMAGES.work1, title: 'On-Site Equipment Setup' },
    { src: IMAGES.work2, title: 'Completed Project' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.work2} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">Gallery</span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6">Our Work in Action</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-body">See real borewell drilling projects by our expert team</p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Photos</span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-900 tracking-tighter">Project Photos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ImageIcon className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-headline font-bold text-slate-900">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Videos</span>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-900 tracking-tighter">Watch Us Work</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setShowVideo(true)}
            >
              <video 
                src={IMAGES.video}
                className="w-full h-[400px] md:h-[500px] object-cover"
                muted
                loop
                playsInline
                poster={IMAGES.hero}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white w-12 h-12 ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-headline font-bold">Borewell Drilling Process</h3>
                <p className="text-white/80 font-body">Watch our team in action</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-black tracking-tighter mb-6">Want Similar Results?</h2>
          <p className="text-xl text-white/80 mb-10 font-body">Contact us today to start your borewell project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={PHONE_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-headline font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-headline font-bold rounded-xl hover:bg-[#20bd5a] transition-all"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors"
              onClick={() => setShowVideo(false)}
            >
              <CloseIcon size={32} />
            </button>
            <video 
              src={IMAGES.video}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Borewell Drilling',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hello KR Borewells,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.work1} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-headline font-bold uppercase tracking-wider mb-6">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6">Get in Touch</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-body">Ready to secure your water future? Contact us today!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <span className="text-primary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Contact Information</span>
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-slate-900 tracking-tighter mb-6">Let's Discuss Your Project</h2>
                <p className="text-lg text-slate-600 font-body leading-relaxed">
                  Whether you need a new borewell, pump installation, or maintenance service, our team is ready to help. Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-headline font-bold rounded-xl shadow-lg hover:bg-primary-container transition-all flex-1"
                >
                  <Phone size={22} />
                  <span>Call Now</span>
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-headline font-bold rounded-xl hover:bg-[#20bd5a] transition-all flex-1"
                >
                  <MessageSquare size={22} />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-slate-900 text-lg mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href={PHONE_LINK} className="text-slate-600 hover:text-primary transition-colors font-body text-lg block">{PHONE_PRIMARY}</a>
                      <a href={PHONE_LINK_SECONDARY} className="text-slate-600 hover:text-primary transition-colors font-body text-lg block">{PHONE_SECONDARY}</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-slate-900 text-lg mb-1">Our Address</h3>
                    <p className="text-slate-600 font-body">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-slate-900 text-lg mb-1">Working Hours</h3>
                    <p className="text-slate-600 font-body">Mon - Sat: 7:00 AM - 8:00 PM<br />Sunday: Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
                <h2 className="text-2xl font-headline font-extrabold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 font-body mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-headline">Your Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-headline">Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-headline">Service Required</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body appearance-none cursor-pointer"
                    >
                      <option>Borewell Drilling</option>
                      <option>Submersible Pump Installation</option>
                      <option>Water Detection</option>
                      <option>Borewell Cleaning & Maintenance</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 font-headline">Your Message</label>
                    <textarea 
                      rows={4} 
                      placeholder="Tell us about your project requirements..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-headline font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-[0.98]"
                  >
                    Send via WhatsApp
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-headline font-black mb-2">25+</p>
            <p className="text-sm font-bold text-white/70 uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-headline font-black mb-2">5000+</p>
            <p className="text-sm font-bold text-white/70 uppercase tracking-wider">Projects Done</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-headline font-black mb-2">100%</p>
            <p className="text-sm font-bold text-white/70 uppercase tracking-wider">Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-headline font-black mb-2">24/7</p>
            <p className="text-sm font-bold text-white/70 uppercase tracking-wider">Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="pt-16">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'contact' && <ContactPage />}
        {(activePage === 'services' || activePage === 'gallery') && (
          <div className="py-40 text-center">
            <h1 className="text-4xl font-headline font-black text-slate-900 mb-4 uppercase">
              {activePage} Page
            </h1>
            <p className="text-slate-500 font-body">This section is coming soon. Please check the Home or Contact pages.</p>
            <button 
              onClick={() => setActivePage('home')}
              className="mt-8 px-6 py-3 bg-primary text-white font-headline font-bold rounded-xl"
            >
              Back to Home
            </button>
          </div>
        )}
      </main>

      <Footer setActivePage={setActivePage} />
      <BottomNav activePage={activePage} setActivePage={setActivePage} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[60] flex flex-col gap-3">
        {/* Call Button */}
        <a 
          href={PHONE_LINK}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
        {/* WhatsApp Button */}
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.757-4.103c1.554.921 3.111 1.408 4.757 1.409 5.424 0 9.839-4.417 9.841-9.842 0-2.628-1.022-5.1-2.879-6.957-1.856-1.857-4.329-2.879-6.958-2.879-5.424 0-9.839 4.417-9.841 9.842 0 1.83.504 3.614 1.455 5.188l-1.012 3.693 3.784-.993zm11.396-7.391c-.083-.139-.306-.222-.64-.389-.333-.167-1.972-.973-2.278-1.084-.306-.111-.528-.167-.75.167-.222.334-.861 1.084-1.055 1.306-.194.222-.389.25-.722.083-.333-.167-1.408-.519-2.682-1.656-1.001-.894-1.677-2.008-1.872-2.342-.194-.334-.021-.514.146-.68.149-.149.333-.389.5-.583.167-.194.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.472-.271-.649-.546-.56-.75-.57-.193-.01-.416-.01-.639-.01s-.583.083-.889.417c-.306.333-1.167 1.139-1.167 2.778 0 1.639 1.194 3.222 1.361 3.444.167.222 2.347 3.583 5.681 5.027 2.778 1.203 3.344.964 3.955.908.611-.056 1.972-.806 2.25-1.583.278-.778.278-1.445.194-1.583z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
