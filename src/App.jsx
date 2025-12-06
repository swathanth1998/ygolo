import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Activity, 
  Database, 
  ShieldCheck, 
  Stethoscope, 
  Microscope, 
  Layout, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Zap,
  Layers,
  Globe,
  FlaskConical,
  Building2,
  Users,
  Heart,
  ArrowLeft,
  Quote,
  BarChart3,
  PieChart,
  FileText,
  Search,
  Check,
  Linkedin,
  Network,
  ChevronDown
} from 'lucide-react';

// --- Brand Colors ---
// Primary Teal: #004D66
// Accent Orange: #F47920
// Backgrounds: Clean White / Soft Gray

// --- LOGO COMPONENT ---
const OncologicLogo = ({ onClick }) => (
  <div onClick={onClick} className="cursor-pointer group">
    <svg viewBox="0 0 200 50" className="h-10 w-auto" aria-label="Oncologic Logo">
      <g fill="#004D66" style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 'bold' }}>
        <text x="0" y="38" fontSize="42" letterSpacing="-1.5">oncologic</text>
      </g>
      <rect x="174" y="6" width="10" height="10" fill="#F47920" className="group-hover:animate-pulse" />
    </svg>
  </div>
);

// --- REUSABLE BUTTON ---
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#004D66] text-white hover:bg-[#00384d] focus:ring-[#004D66] shadow-lg shadow-[#004D66]/20",
    secondary: "bg-white text-[#004D66] border border-slate-200 hover:bg-slate-50 focus:ring-slate-200 shadow-sm",
    accent: "bg-[#F47920] text-white hover:bg-[#d66515] focus:ring-[#F47920] shadow-lg shadow-[#F47920]/20",
    ghost: "text-[#004D66] hover:bg-slate-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- FEATURE CARD (Home Page) ---
const FeatureCard = ({ icon: Icon, title, description, colorClass }) => (
  <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className={`absolute top-0 right-0 p-32 opacity-5 rounded-full blur-3xl transition-transform group-hover:scale-150 ${colorClass}`} />
    <div className="relative z-10">
      <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-6 ${colorClass.replace('bg-', 'bg-opacity-10 text-')}`}>
        <Icon size={28} className={colorClass.replace('bg-', 'text-')} />
      </div>
      <h3 className="text-xl font-bold text-[#004D66] mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

// --- BENTO GRID ITEM ---
const BentoGridItem = ({ title, subtitle, content, className = "", theme = "light", icon: Icon }) => {
  const isDark = theme === "dark";
  return (
    <div className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
      isDark ? 'bg-[#004D66] text-white' : 'bg-slate-50 text-[#004D66]'
    } ${className}`}>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
           <h4 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-[#F47920]' : 'text-[#F47920]'}`}>
            {subtitle}
          </h4>
          {Icon && <Icon className={`h-6 w-6 ${isDark ? 'text-white/50' : 'text-[#004D66]/30'}`} />}
        </div>
        <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
      </div>
      <div className={`relative z-10 mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {content}
      </div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-2xl bg-[#F47920]"></div>
    </div>
  );
};

// --- DEMO MODAL ---
const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-full"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-bold text-[#004D66] mb-2">See Oncologic</h2>
        <p className="text-slate-600 mb-8 text-lg font-light leading-relaxed">Yes! I'd like to see a 30-minute overview of the Oncologic platform.</p>
        
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will be in touch shortly."); onClose(); }}>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">This Demo Is For*</label>
            <div className="relative">
              <select required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004D66] focus:border-transparent outline-none text-slate-600 appearance-none bg-white">
                <option value="">Select...</option>
                <option value="Oncologist">Oncologist</option>
                <option value="Lab">Lab</option>
                <option value="Practice">Practice</option>
                <option value="Payer">Payer</option>
                <option value="Pharma">Pharma</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight className="rotate-90" size={16}/>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">First Name*</label>
            <input required type="text" placeholder="Your first name" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004D66] focus:border-transparent outline-none placeholder:text-slate-400" />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Last Name*</label>
            <input required type="text" placeholder="Your last name" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004D66] focus:border-transparent outline-none placeholder:text-slate-400" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Company*</label>
            <input required type="text" placeholder="Your company" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004D66] focus:border-transparent outline-none placeholder:text-slate-400" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Email*</label>
            <input required type="email" placeholder="Your email" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004D66] focus:border-transparent outline-none placeholder:text-slate-400" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1.5">Your State*</label>
            <input required type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004D66] focus:border-transparent outline-none" />
          </div>

          <button type="submit" className="bg-[#F47920] text-white font-bold text-xl py-3.5 px-6 rounded-lg w-full hover:bg-[#d66515] transition-all shadow-lg hover:shadow-xl active:scale-[0.98] mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// --- NAVBAR ---
const Navbar = ({ onNavigate, onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <OncologicLogo onClick={() => onNavigate('home')} />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-600 hover:text-[#004D66] transition-colors">Home</button>
            
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => onNavigate('solutions')} 
                className="text-sm font-medium text-slate-600 hover:text-[#004D66] transition-colors flex items-center gap-1 py-4"
              >
                Solutions <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-2">
                  <button onClick={() => onNavigate('oncologist')} className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004D66] rounded-lg transition-colors group/item">
                    <Users size={18} className="text-[#F47920] group-hover/item:scale-110 transition-transform" />
                    For Oncologists
                  </button>
                  <button onClick={() => onNavigate('labs')} className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004D66] rounded-lg transition-colors group/item">
                    <Microscope size={18} className="text-[#F47920] group-hover/item:scale-110 transition-transform" />
                    For Labs
                  </button>
                  <button onClick={() => onNavigate('practices')} className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004D66] rounded-lg transition-colors group/item">
                    <Building2 size={18} className="text-[#F47920] group-hover/item:scale-110 transition-transform" />
                    For Practices
                  </button>
                  <button onClick={() => onNavigate('payers')} className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#004D66] rounded-lg transition-colors group/item">
                    <ShieldCheck size={18} className="text-[#F47920] group-hover/item:scale-110 transition-transform" />
                    For Payers
                  </button>
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('about')} className="text-sm font-medium text-slate-600 hover:text-[#004D66] transition-colors">About</button>
            <button onClick={() => onNavigate('leadership')} className="text-sm font-medium text-slate-600 hover:text-[#004D66] transition-colors">Leadership</button>
            <Button onClick={onOpenDemo} variant="primary" className="py-2.5 px-5 text-sm rounded-lg">
              Book a Demo
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-4 flex flex-col space-y-4">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-base font-medium text-slate-800 text-left">Home</button>
          <button onClick={() => { onNavigate('solutions'); setIsOpen(false); }} className="text-base font-medium text-slate-800 text-left">Solutions</button>
          <div className="pl-4 space-y-2 border-l-2 border-slate-100">
             <button onClick={() => { onNavigate('oncologist'); setIsOpen(false); }} className="block text-sm text-slate-600">For Oncologists</button>
             <button onClick={() => { onNavigate('labs'); setIsOpen(false); }} className="block text-sm text-slate-600">For Labs</button>
             <button onClick={() => { onNavigate('practices'); setIsOpen(false); }} className="block text-sm text-slate-600">For Practices</button>
             <button onClick={() => { onNavigate('payers'); setIsOpen(false); }} className="block text-sm text-slate-600">For Payers</button>
          </div>
          <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="text-base font-medium text-slate-800 text-left">About</button>
          <button onClick={() => { onNavigate('leadership'); setIsOpen(false); }} className="text-base font-medium text-slate-800 text-left">Leadership</button>
          <Button onClick={() => { onOpenDemo(); setIsOpen(false); }} variant="primary" className="w-full justify-center">Book a Demo</Button>
        </div>
      )}
    </nav>
  );
};

// --- SIMULATORS (Dashboard Mockups) ---
const ResultsSimulator = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#004D66]/20 to-[#F47920]/20 blur-3xl rounded-full" />
    <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-4 text-xs text-slate-500 font-medium">Oncologic Platform</div>
      </div>
      <div className="p-6 bg-slate-50">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
            <div>
              <h3 className="text-[#004D66] font-bold text-lg">Actionable results summary</h3>
              <p className="text-xs text-slate-500 mt-1">Testing performed by Foundation Medicine &gt;</p>
            </div>
            <div className="flex gap-2 text-xs font-medium text-slate-600">
              <span>RESULTS</span>
              <span>THERAPIES</span>
              <span>TRIALS</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-700 text-sm">Therapy associations</span>
                <span className="text-[10px] bg-orange-100 text-[#F47920] px-2 py-0.5 rounded-full font-bold">Select</span>
              </div>
              <div className="p-4 bg-white space-y-3">
                 <div className="text-sm font-semibold text-slate-800">Atezolizumab</div>
                 <div className="text-sm font-semibold text-slate-800">Cemiplimab</div>
                 <div className="text-sm font-semibold text-slate-800">Nivolumab + Ipilimumab</div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
                <span className="font-bold text-slate-700 text-sm">Biomarker Results</span>
                <span className="text-[10px] bg-white border border-slate-300 px-2 py-0.5 rounded shadow-sm text-slate-600">View</span>
              </div>
              <div className="p-4 bg-white text-xs space-y-2 text-slate-600">
                <div className="flex justify-between"><span>PD-L1 Positive</span> <span>TPS: 80%</span></div>
                <div className="flex justify-between"><span>MSI-High</span> <span>Detected</span></div>
                <div className="flex justify-between text-[#004D66] font-semibold"><span>EGFR</span> <span>Exon 20</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardSimulator = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-tr from-[#004D66]/20 to-[#F47920]/20 blur-3xl rounded-full" />
    <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <span className="font-bold text-sm tracking-wide">oncologic | Lab Order Summary</span>
        </div>
        <div className="text-xs bg-[#F47920] px-2 py-1 rounded text-white font-bold">Total Orders: 439</div>
      </div>
      
      <div className="p-4 bg-slate-50 grid grid-cols-2 gap-4">
        {/* Physician Orders Chart */}
        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 col-span-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-[#004D66]">Physician Orders</h4>
            <BarChart3 size={14} className="text-slate-400"/>
          </div>
          <div className="space-y-2">
            {[100, 85, 70, 60, 45].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                 <div className="w-16 h-2 bg-slate-100 rounded"></div>
                 <div className="flex-1 h-2 bg-slate-100 rounded overflow-hidden">
                    <div style={{width: `${w}%`}} className="h-full bg-[#004D66]"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Summary Chart */}
        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 col-span-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-[#004D66]">Lab Summary</h4>
            <BarChart3 size={14} className="text-slate-400"/>
          </div>
          <div className="space-y-2">
             {[90, 60, 40, 30, 20].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                 <div className="w-16 h-2 bg-slate-100 rounded"></div>
                 <div className="flex-1 h-2 bg-slate-100 rounded overflow-hidden">
                    <div style={{width: `${w}%`}} className="h-full bg-slate-400"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test Selection Rank */}
        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 col-span-1">
          <div className="flex items-center justify-between mb-2">
             <h4 className="text-xs font-bold text-[#004D66]">Test Selection Rank</h4>
             <PieChart size={14} className="text-slate-400"/>
          </div>
          <div className="flex items-center justify-center h-24">
             <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-[#F47920] border-r-[#004D66] border-b-[#004D66] border-l-[#004D66]"></div>
          </div>
        </div>

        {/* Product Count */}
        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200 col-span-1 overflow-hidden">
           <div className="flex items-center justify-between mb-2">
             <h4 className="text-xs font-bold text-[#004D66]">Product Count</h4>
             <FileText size={14} className="text-slate-400"/>
           </div>
           <div className="space-y-1 text-[10px] text-slate-500">
              <div className="flex justify-between border-b border-slate-100 pb-1"><span>Tempus xT</span> <span>240</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-1"><span>PD-L1 22C3</span> <span>165</span></div>
              <div className="flex justify-between border-b border-slate-100 pb-1"><span>FoundationOne</span> <span>143</span></div>
              <div className="flex justify-between"><span>Guardant360</span> <span>98</span></div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const EvidenceSimulator = () => (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#004D66]/20 to-[#F47920]/20 blur-3xl rounded-full" />
      <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
        <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="text-xs text-slate-500 font-medium">Oncologic Evidence Engine</div>
        </div>
        <div className="p-6 bg-slate-50">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-4">
                <h4 className="text-[#F47920] text-xs font-bold uppercase mb-2">FDA Approved Drugs Associated with Molecular Results</h4>
                <h3 className="text-[#004D66] text-lg font-bold mb-4">Evidence in Lung Adenocarcinoma</h3>
                
                <div className="bg-slate-700 text-white text-[10px] uppercase font-bold px-3 py-2 rounded-t flex justify-between">
                    <span>Advanced/Metastatic-No Prior Therapy</span>
                </div>
                <div className="border-x border-b border-slate-200 rounded-b p-4 space-y-4">
                    <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                        <div className="space-y-1">
                            <span className="text-sm font-bold text-slate-800 block">Alectinib</span>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <ArrowRight size={10} /> <span>BRAF (V600E)</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">NCCN</span>
                            <span className="px-2 py-0.5 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">FDA</span>
                            <span className="px-2 py-0.5 bg-[#F47920] text-white rounded text-[10px] font-bold">FastPath &gt;</span>
                        </div>
                    </div>
                    
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <span className="text-sm font-bold text-slate-800 block">Vemurafenib</span>
                             <div className="flex items-center gap-2 text-xs text-slate-500">
                                <ArrowRight size={10} /> <span>BRAF (V600E)</span>
                            </div>
                        </div>
                         <div className="flex gap-2">
                            <span className="px-2 py-0.5 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">NCCN</span>
                            <span className="px-2 py-0.5 border border-slate-200 rounded text-[10px] text-slate-500 font-medium">FDA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
)

// --- REUSABLE SECTIONS ---

const ScreenshotSection = ({ onNavigate }) => {
  const items = [
    {
      title: "For Oncologists",
      text: "Which patients to test, which panels to order, and which labs to use.",
      icon: Users,
      id: 'oncologist'
    },
    {
      title: "For Labs",
      text: "How to drive volume and enhance reimbursement.",
      icon: Microscope,
      id: 'labs'
    },
    {
      title: "For Practices",
      text: "How to standardize value-based precision medicine across the practice.",
      icon: Building2,
      id: 'practices'
    },
    {
      title: "For Payers",
      text: "Which tests and treatments are evidence-supported and should be reimbursed.",
      icon: ShieldCheck,
      id: 'payers'
    }
  ];

  return (
    <div className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-slate-800 text-center mb-16 tracking-tight">
          Learn more about what <span className="font-bold text-[#004D66]">Oncologic</span> knows:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {items.map((item, index) => {
            return (
              <div 
                key={index} 
                onClick={() => onNavigate(item.id)}
                className={`flex items-start gap-6 group rounded-2xl p-4 -m-4 transition-all duration-300 cursor-pointer hover:bg-white hover:shadow-md`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-[#F47920] flex items-center justify-center bg-white group-hover:bg-[#F47920] transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-[#F47920] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F47920] mb-2 flex items-center gap-2">
                    {item.title}
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- PAGE COMPONENTS ---

const AboutPage = ({ onNavigate, onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-1.5 mb-2">
                <Heart size={14} className="text-[#F47920] fill-[#F47920]" />
                <span className="text-xs font-bold tracking-wide text-slate-500 uppercase">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004D66]">
                Improving outcomes for cancer patients.
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Oncologic Health is a company dedicated to improving outcomes for cancer patients. Almost everyone at Oncologic Health has a story about a loved one or friend who has been touched by cancer. Our mission is to address the challenges that result from rapid changes in the science, technology, and business of next-generation cancer care. To us, that means putting patients first.
                </p>
                <p>
                  We believe our technology platform, Oncologic, is a win-win solution for doctors, labs, and payers that need real-time, evidence-based information and full transparency to make patient-based decisions faster. Everyone wants the best care for cancer patients. By providing access to the latest clinical evidence and facilitating network-wide collaboration, Oncologic makes it possible.
                </p>
              </div>
            </div>
            {/* Decorative Side Visual */}
            <div className="hidden md:block w-1/3">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-[#004D66] to-[#007EA7] opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <ScreenshotSection onNavigate={onNavigate} />

      <section className="py-16 bg-white border-t border-slate-100 text-center">
        <h3 className="text-2xl font-bold text-[#004D66] mb-6">Ready to simplify precision oncology?</h3>
        <Button onClick={onOpenDemo} variant="accent">Schedule a Demo</Button>
      </section>
    </div>
  );
};

const SolutionsPage = ({ onNavigate, onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const solutions = [
    { title: "Decision Support", desc: "Real-time, evidence-based guidance at the point of care.", icon: Stethoscope },
    { title: "Utilization Management", desc: "Automated prior authorization and policy alignment.", icon: ShieldCheck },
    { title: "Lab Connectivity", desc: "Seamless integration between EMRs and reference labs.", icon: Network },
    { title: "Clinical Trials", desc: "Instant matching of patients to relevant trials.", icon: FlaskConical }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#F47920]/10 text-[#F47920] text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
            Platform Solutions
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#004D66] mb-6">
            Everything you need for precision oncology.
          </h1>
          <p className="text-xl text-slate-600">
            A unified suite of tools designed to connect the entire care ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl flex gap-6 items-start hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[#004D66]">
                <sol.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#004D66]">{sol.title}</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100 text-center">
        <h3 className="text-2xl font-bold text-[#004D66] mb-6">Explore our solutions in action</h3>
        <Button onClick={onOpenDemo} variant="accent">Request a Demo</Button>
      </section>
    </div>
  );
};

const LeadershipPage = ({ onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const leaders = [
    { name: "Dr. C. U. Well", title: "Strategic Advisor", bio: "World-renowned specialist in making patients feel better just by walking into the room.", icon: Stethoscope },
    { name: "Prof. Gene Splicer", title: "Chief Product Officer", bio: "Leading expert in mixing things up and seeing what happens in the lab.", icon: FlaskConical },
    { name: "Hugh Jnr", title: "Chief Technology Officer", bio: "Built his first supercomputer out of toaster parts and spare cables.", icon: Database },
    { name: "Anita Doctor", title: "VP of Clinical Operations", bio: "Ensures every operation runs smoothly, or else she calls your mother.", icon: Activity }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-[#F47920]/10 text-[#F47920] text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
            Our Team
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#004D66] mb-6">
            Led by experts in oncology, technology, and policy.
          </h1>
          <p className="text-xl text-slate-600">
            Our leadership team combines decades of experience to solve the most complex challenges in precision medicine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl flex gap-6 items-start hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[#004D66]">
                <leader.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#004D66]">{leader.name}</h3>
                <p className="text--[#F47920] font-medium text-sm mb-3 uppercase tracking-wide">{leader.title}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{leader.bio}</p>
                <div className="mt-4 flex gap-3">
                  <Linkedin size={18} className="text-slate-400 hover:text-[#0077b5] cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-100 text-center">
        <h3 className="text-2xl font-bold text-[#004D66] mb-6">Join our mission</h3>
        <Button onClick={onOpenDemo} variant="accent">Contact Us</Button>
      </section>
    </div>
  );
};

const OncologistPage = ({ onBack, onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const features = [
    { title: "Collaborative", text: "Resolves the complexities of molecular testing by enabling oncologists, labs, and payors to make better decisions faster based on the latest clinical evidence." },
    { title: "Patient-centered", text: "A comprehensive single-order management platform that presents the latest evidence specific to a patient's disease and clinical stage while streamlining prior-authorization and eliminating treatment delays and anxiety for patients." },
    { title: "Continuously Updated", text: "Decision-making processes are aligned with today's most current published clinical evidence, curated daily by PhD's who perform continuous, meticulous content analysis." },
    { title: "Actionable", text: "Delivers easily interpreted, actionable reports informed by individual molecular test results and a rich, unbiased, continuously updated knowledgebase." },
    { title: "Easy-to-use", text: "A user-friendly interface that becomes a part of everyday workflow, enabling real-time decision support, order entry, treatment selection and reimbursement assurance." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button onClick={onBack} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#004D66] transition-colors"><ArrowLeft size={16} className="mr-2" /> Back to About</button>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-3 py-1 bg-[#F47920]/10 text-[#F47920] text-sm font-bold rounded-full mb-6 uppercase tracking-wider">Decision Support for Oncologists</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#004D66] leading-tight mb-8">How can you know when and how to best use molecular testing for your patients?</h1>
            <h2 className="text-3xl font-bold text-[#F47920] mb-8">Oncologic knows.</h2>
            <div className="prose prose-lg text-slate-600">
              <p>Oncologic is the first, single technology platform to enable real-time, evidence-based decision support, treatment selection and reimbursement assurance to oncologists, ensuring patients have the best chance to beat cancer.</p>
            </div>
          </div>
          <ResultsSimulator />
        </div>
      </section>
      <section className="bg-[#004D66] py-20 text-white mb-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote size={48} className="text-[#F47920] mx-auto mb-8 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6">"For the first time, we have a fully-automated method for ordering a precision medicine test that is integrated back into our EMR and to the physician. This electronic transfer was really the 'easy button'."</blockquote>
          <cite className="text-[#F47920] font-bold not-italic tracking-wide text-sm">— NATIONAL ONCOLOGY NETWORK CUSTOMER</cite>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16"><h2 className="text-3xl font-bold text-[#004D66]">Oncologic for oncologists is:</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6"><CheckCircle2 className="text-[#F47920]" size={24} /></div>
              <h3 className="text-xl font-bold text-[#004D66] mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white border-t border-slate-100 text-center">
        <h3 className="text-2xl font-bold text-[#004D66] mb-6">Ready to simplify precision oncology?</h3>
        <Button onClick={onOpenDemo} variant="accent">Schedule a Demo</Button>
      </section>
    </div>
  );
};

const LabsPage = ({ onBack, onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const features = [
    { title: "Standardized", text: "Provides oncology teams with evidence-based guidance on what to order and for which patients, and then maps the recommended tests to biomarker panels to minimize order mistakes." },
    { title: "Patient-centered", text: "Ensures patients get the most appropriate tests through the proper molecular testing pathway at the right time in their treatment journey. Oncologic also helps drive clinical trial accruals." },
    { title: "Centralized", text: "Automates the test ordering process through an institution's central lab, ensuring that all oncologists in the practice are utilizing internal expertise and capabilities." },
    { title: "Transparent", text: "Provides unmatched transparency between payers and labs to streamline and optimize prior authorization and reimbursement programs." },
    { title: "Collaborative", text: "Some of the nation's leading cancer centers and community oncologists have endorsed Oncologic's innovative approach to ensuring the scalable, appropriate use of precision medicine for cancer." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button onClick={onBack} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#004D66] transition-colors"><ArrowLeft size={16} className="mr-2" /> Back to About</button>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-3 py-1 bg-[#F47920]/10 text-[#F47920] text-sm font-bold rounded-full mb-6 uppercase tracking-wider">Molecular Test Management</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#004D66] leading-tight mb-8">How can labs extend their value at the point of care, deliver a better experience and align with payer preferences?</h1>
            <h2 className="text-3xl font-bold text-[#F47920] mb-8">Oncologic knows.</h2>
            <div className="prose prose-lg text-slate-600">
              <p>Oncologic is the first, evidence-based technology platform that gives lab managers and pathologists closer connectivity with ordering physicians and payers to reduce friction, optimize the flow of molecular testing, improve order accuracy and create a value-driven lab.</p>
            </div>
          </div>
          <ResultsSimulator />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16"><h2 className="text-3xl font-bold text-[#004D66]">Oncologic for Pathologists is:</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6"><CheckCircle2 className="text-[#F47920]" size={24} /></div>
              <h3 className="text-xl font-bold text-[#004D66] mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white border-t border-slate-100 text-center">
        <h3 className="text-2xl font-bold text-[#004D66] mb-6">Ready to simplify precision oncology?</h3>
        <Button onClick={onOpenDemo} variant="accent">Schedule a Demo</Button>
      </section>
    </div>
  );
};

const PracticesPage = ({ onBack, onOpenDemo }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { title: "Comprehensive", text: "Provides cancer centers a technology framework that leverages the most up-to-date clinical evidence while supporting their own best practices." },
    { title: "Value-based", text: "Provides necessary standardization and process-tracking, allowing practices to demonstrate their compliance with sound, evidence-based applications of precision medicine—a competitive advantage in the world of value-based care." },
    { title: "Collaborative", text: "Assures that each molecular test ordered meets clinical, evidence-supported standards and factors payor reimbursement policies into lab order workflow, obviating the need for traditional prior-authorization." },
    { title: "Cost-effective", text: "Enables Practice Managers to eliminate prior authorization and insurance appeals while tracking data, analyzing the practice, and evaluating business operations to generate more revenue." },
    { title: "Patient-centered", text: "Allows practices to standardize the precision medicine decision and lab order process across all oncologists and labs, lowering the risk of missing a patient who may benefit from molecular testing, targeted therapies or clinical trials." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button onClick={onBack} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#004D66] transition-colors"><ArrowLeft size={16} className="mr-2" /> Back to About</button>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-[#F47920]/10 text-[#F47920] text-sm font-bold rounded-full mb-6 uppercase tracking-wider">Optimize Your Precision Oncology Program</div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#004D66] leading-tight mb-8">How can you administer, manage and confidently demonstrate quality precision medicine in your practice?</h1>
            <h2 className="text-3xl font-bold text-[#F47920] mb-8">Oncologic knows.</h2>
            <div className="prose prose-lg text-slate-600">
              <p>Oncologic is the first, single technology platform to enable the delivery of value-based care in precision medicine through real-time decision support. Through greater accountability, transparency and alignment in the decision-making process, Oncologic gives patients the best chance to beat cancer.</p>
            </div>
          </div>
          <DashboardSimulator />
        </div>
      </section>
      <section className="bg-[#004D66] py-20 text-white mb-24">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-[#F47920] font-bold tracking-widest uppercase mb-12 text-center text-sm">What Users Are Saying:</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <blockquote className="text-xl font-light leading-relaxed mb-6">"Oncologic is such an important asset to our clinic. It makes working in a busy clinic so efficient and my job 100% easier since we are ordering every day."</blockquote>
              <cite className="text-[#F47920] font-bold not-italic text-xs block mt-4">— COMMUNITY ONCOLOGY PRACTICE NURSE</cite>
            </div>
            <div>
              <blockquote className="text-xl font-light leading-relaxed mb-6">"Oncologic allows us to make sure we're ordering the appropriate tests in an appropriate manner and also explore other options for patients from a convenient interface."</blockquote>
              <cite className="text-[#F47920] font-bold not-italic text-xs block mt-4">— COMMUNITY ONCOLOGY PRACTICE MEDICAL ASSISTANT</cite>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#004D66] mb-12">Oncologic for Oncology Practices is:</h2>
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><CheckCircle2 className="text-[#F47920]" size={24} /></div>
                  <div><h3 className="text-xl font-bold text-[#004D66] mb-2">{feature.title}</h3><p className="text-slate-600 leading-relaxed">{feature.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 sticky top-24">
              <h3 className="text-xl font-bold text-[#004D66] mb-2">The Precision Medicine Advancement Program™</h3>
              <p className="text-xs font-bold text-[#F47920] mb-6 uppercase tracking-wider">Powered by Oncologic</p>
              <p className="text-slate-700 font-medium mb-8">Designed to help your practice evolve precision oncology best practices quickly and cost effectively.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-t border-slate-100 text-center">
        <h3 className="text-2xl font-bold text-[#004D66] mb-6">Ready to simplify precision oncology?</h3>
        <Button onClick={onOpenDemo} variant="accent">Schedule a Demo</Button>
      </section>
    </div>
  );
};

const PayersPage = ({ onBack, onOpenDemo }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    
    const features = [
        { title: "Evidence-based", text: "Assures that each molecular test ordered through Oncologic meets clinical, evidence-supported standards, so payers can streamline and optimize their prior authorization and reimbursement arrangements." },
        { title: "Transparent", text: "Gives payers a real-time window into the precision medicine decision-making process, enabling a review-by-exception process that avoids unnecessary administrative reviews. Oncologic streamlines workflow for practices and expedites the delivery of appropriate, quality care for patients when time matters most." },
        { title: "Patient-centered", text: "Ensures patients get the most appropriate tests from preferred labs at the right time in their treatment journey." },
        { title: "Collaborative", text: "Some of the nation's leading cancer centers and community oncologists, along with national and regional molecular testing labs, have endorsed Oncologic's innovative approach to ensuring the scalable, appropriate use of precision medicine for cancer." }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <button onClick={onBack} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#004D66] transition-colors"><ArrowLeft size={16} className="mr-2" /> Back to About</button>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-[#F47920]/10 text-[#F47920] text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
                            Precision Care Management for Payers
                        </div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#004D66] leading-tight mb-8">
                            How can you confidently approve molecular tests and targeted treatments while also minimizing burdensome prior authorization processes?
                        </h1>
                        <h2 className="text-3xl font-bold text-[#F47920] mb-8">
                            Oncologic knows.
                        </h2>
                        <div className="prose prose-lg text-slate-600">
                            <p>
                                Oncologic aligns the interests of providers, labs, and payers to deliver better care for patients while managing the costs of precision medicine through transparency and real-time automation.
                            </p>
                            <p>
                                Oncologic's FastPath button signals therapies with the highest-level clinical evidence and payer integration to ensure patients get the most appropriate treatment option when time matters most.
                            </p>
                        </div>
                    </div>
                    <EvidenceSimulator />
                </div>
            </section>

             <section className="bg-[#004D66] py-20 text-white mb-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Quote size={48} className="text-[#F47920] mx-auto mb-8 opacity-50" />
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
                        "For a majority of payers, cost is the most important factor influencing biomarker coverage, followed closely by clinical validity and utility."
                    </blockquote>
                    <cite className="text-[#F47920] font-bold not-italic tracking-wide text-sm">
                        — The Precision Oncology Annual Trend Report, 2016
                    </cite>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="text-center mb-16"><h2 className="text-3xl font-bold text-[#004D66]">Oncologic for Payers is:</h2></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6"><CheckCircle2 className="text-[#F47920]" size={24} /></div>
                            <h3 className="text-xl font-bold text-[#004D66] mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>

             <section className="py-16 bg-white border-t border-slate-100 text-center">
                <h3 className="text-2xl font-bold text-[#004D66] mb-6">Ready to simplify precision oncology?</h3>
                <Button onClick={onOpenDemo} variant="accent">Schedule a Demo</Button>
            </section>
        </div>
    )
}

// --- MAIN APP COMPONENT ---
export default function App() {
  const [view, setView] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (page) => {
    setView(page);
    window.scrollTo(0, 0);
  };

  const handleOpenDemo = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#F47920] selection:text-white">
      <Navbar onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
      
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {view === 'oncologist' ? (
        <OncologistPage onBack={() => handleNavigate('about')} onOpenDemo={handleOpenDemo} />
      ) : view === 'labs' ? (
        <LabsPage onBack={() => handleNavigate('about')} onOpenDemo={handleOpenDemo} />
      ) : view === 'practices' ? (
        <PracticesPage onBack={() => handleNavigate('about')} onOpenDemo={handleOpenDemo} />
      ) : view === 'payers' ? (
        <PayersPage onBack={() => handleNavigate('about')} onOpenDemo={handleOpenDemo} />
      ) : view === 'about' ? (
        <AboutPage onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
      ) : view === 'solutions' ? (
        <SolutionsPage onNavigate={handleNavigate} onOpenDemo={handleOpenDemo} />
      ) : view === 'leadership' ? (
        <LeadershipPage onOpenDemo={handleOpenDemo} />
      ) : (
        /* --- HOME PAGE VIEW --- */
        <>
          {/* --- HERO SECTION --- */}
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-slate-50 to-white" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#004D66] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" />
            <div className="absolute top-40 right-40 w-96 h-96 bg-[#F47920] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5">
                    <span className="flex h-2 w-2 rounded-full bg-[#F47920]"></span>
                    <span className="text-sm font-medium text-slate-600">The Future of Precision Oncology</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#004D66] leading-[1.1]">
                    Precision Medicine. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47920] to-[#f9a05f]">
                      Simplified.
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                    Oncologic is the first, interoperable, decision-support platform used by oncologists, labs, and payers that informs testing and treatment and facilitates real-time alignment in precision medicine.
                  </p>
                  
                  <p className="text-base text-slate-500 max-w-lg leading-relaxed -mt-4">
                    We streamline clinical workflow and prior authorization, enabling value-based care while quickly giving patients the most appropriate, evidence-supported options when time matters most.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button onClick={handleOpenDemo} variant="primary" className="group">
                      Get Started 
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button onClick={handleOpenDemo} variant="secondary">
                      View the Platform
                    </Button>
                  </div>
                </div>

                {/* Abstract Tech Visual */}
                <div className="relative hidden lg:block">
                  <div className="relative rounded-3xl bg-slate-900 p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 border border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#004D66] to-slate-900 rounded-3xl opacity-50" />
                    {/* Simulated UI Interface */}
                    <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700/50 h-[500px] flex flex-col gap-4 overflow-hidden">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-xs text-slate-400 font-mono">patient_analysis_v2.json</div>
                      </div>
                      
                      {/* Floating Cards inside UI */}
                      <div className="bg-slate-700/30 p-4 rounded-xl backdrop-blur-sm border border-slate-600/50">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-[#F47920]/20 rounded-lg">
                            <Activity className="text-[#F47920] h-5 w-5" />
                          </div>
                          <span className="text-white font-medium">Biomarker Detected</span>
                        </div>
                        <div className="h-2 bg-slate-600 rounded-full w-full overflow-hidden">
                          <div className="h-full bg-[#F47920] w-3/4 animate-pulse" />
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-2">
                          <span>EGFR Mutation</span>
                          <span>High Confidence</span>
                        </div>
                      </div>

                      <div className="bg-slate-700/30 p-4 rounded-xl backdrop-blur-sm border border-slate-600/50">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-emerald-500/20 rounded-lg">
                            <CheckCircle2 className="text-emerald-500 h-5 w-5" />
                          </div>
                          <span className="text-white font-medium">Therapy Matched</span>
                        </div>
                        <p className="text-xs text-slate-400">Osimertinib recommended based on NCCN Guidelines® v3.2024</p>
                      </div>
                      
                      <div className="mt-auto p-4 bg-gradient-to-r from-[#004D66] to-[#006080] rounded-xl text-white">
                        <p className="text-sm font-semibold">Prior Authorization</p>
                        <p className="text-2xl font-bold mt-1">Approved</p>
                        <p className="text-xs opacity-75 mt-1">Time elapsed: 12 seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- VALUE PROP / PROBLEM STATEMENT --- */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-[#004D66] sm:text-4xl mb-4">
                  The Precision Medicine Challenge
                </h2>
                <p className="text-lg text-slate-600">
                  The speed of innovation in oncology is outpacing the healthcare system's ability to adapt. Oncologic bridges the gap.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={Layers}
                  title="Complex Testing"
                  description="With thousands of molecular tests available, selecting the right one is overwhelming for providers and costly for payers."
                  colorClass="bg-blue-500"
                />
                <FeatureCard 
                  icon={ShieldCheck}
                  title="Policy Friction"
                  description="Outdated prior authorization processes delay life-saving care and create administrative burdens for everyone involved."
                  colorClass="bg-[#F47920]"
                />
                <FeatureCard 
                  icon={Database}
                  title="Fragmented Data"
                  description="Critical patient data is siloed across EMRs, labs, and payer systems, making evidence-based decisions nearly impossible."
                  colorClass="bg-purple-500"
                />
              </div>
            </div>
          </section>

          {/* --- BENTO GRID SOLUTION --- */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#004D66] sm:text-4xl">
                  Unified Ecosystem.
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                  Connecting every stakeholder to drive better outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                
                {/* Cancer Centers (Large - Spans 2 cols) */}
                <BentoGridItem 
                  className="md:col-span-2"
                  theme="dark"
                  subtitle="For Cancer Centers"
                  title="Standardize Value-Based Care"
                  icon={Building2}
                  content={
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-slate-200">
                        How to standardize value-based precision medicine across the practice by knowing which patients to test, which panels to order, and which labs to use.
                      </p>
                      <div className="mt-6 pt-6 border-t border-slate-700/50 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">Patient Selection</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">Panel Ordering</span>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">Lab Routing</span>
                      </div>
                    </div>
                  }
                />

                {/* Labs (Standard) */}
                <BentoGridItem 
                  className="md:col-span-1 bg-white shadow-sm border border-slate-100"
                  subtitle="For Testing Labs"
                  title="Drive Value & Reimbursement"
                  icon={Microscope}
                  content={
                    <div className="flex flex-col h-full justify-between">
                      <p className="text-slate-600">
                        How to drive value and enhance reimbursement by ensuring every test ordered is appropriate and authorized.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="p-1.5 bg-[#004D66] rounded text-white"><Zap size={14}/></div>
                        <span className="text-xs font-bold text-[#004D66]">Revenue Integrity</span>
                      </div>
                    </div>
                  }
                />

                {/* Payers (Standard) */}
                <BentoGridItem 
                  className="md:col-span-1 bg-white shadow-sm border border-slate-100"
                  subtitle="For Health Plans"
                  title="Evidence-Based Coverage"
                  icon={ShieldCheck}
                  content={
                    <div className="flex flex-col h-full justify-between">
                      <p className="text-slate-600">
                        Which tests and treatments are evidence-supported and should be reimbursed, automating appropriate approvals.
                      </p>
                      <div className="mt-4">
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#F47920] h-full w-4/5"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 mt-1 text-right">Coverage Alignment</p>
                      </div>
                    </div>
                  }
                />

                {/* Pharma (Large - Spans 2 cols) */}
                <BentoGridItem 
                  className="md:col-span-2"
                  theme="dark" 
                  subtitle="For Pharma"
                  title="Connect to Precision Therapies"
                  icon={FlaskConical}
                  content={
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="flex-1">
                        <p className="text-lg leading-relaxed text-slate-200">
                          How to connect more cancer patients to new precision therapies and clinical trials at the moment of diagnosis.
                        </p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm min-w-[200px]">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-2 w-2 rounded-full bg-[#F47920] animate-pulse"></div>
                          <span className="text-xs font-mono text-slate-300">Trial Match Found</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                          <div className="h-1.5 bg-white/20 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </section>

          {/* --- STATS / PROOF --- */}
          <section className="py-20 bg-[#004D66] text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#F47920] mb-2">10k+</div>
                  <div className="text-sm md:text-base text-slate-300">Oncologists Supported</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#F47920] mb-2">50M</div>
                  <div className="text-sm md:text-base text-slate-300">Covered Lives</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#F47920] mb-2">&lt;24h</div>
                  <div className="text-sm md:text-base text-slate-300">Turnaround Time</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#F47920] mb-2">100%</div>
                  <div className="text-sm md:text-base text-slate-300">Evidence Aligned</div>
                </div>
              </div>
            </div>
          </section>

          {/* --- CTA SECTION --- */}
          <section className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#004D66] mb-6">
                See Oncologic in a brief demo
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                Join the network that is making precision medicine accessible, affordable, and actionable for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleOpenDemo} variant="accent" className="px-10 py-4 text-lg font-bold rounded-full">
                  Request Demo
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <OncologicLogo onClick={() => handleNavigate('home')} />
              <p className="mt-4 text-sm text-slate-500">
                Precision Oncology for All.<br/>
                Making molecular testing and treatment accessible and actionable.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#004D66] mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">Decision Support</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">Utilization Management</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">Lab Connectivity</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">Data Insights</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#004D66] mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><button onClick={() => handleNavigate('about')} className="hover:text-[#F47920]">About Us</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">Careers</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">News & Press</button></li>
                <li><button onClick={() => handleNavigate('home')} className="hover:text-[#F47920]">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#004D66] mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Globe size={16} /> info@oncologic.com
                </li>
                <li>1-800-ONCOLOGIC</li>
                <li>Doctor Phillips, FL</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2024 Oncologic Health. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => handleNavigate('home')} className="hover:text-[#004D66]">Privacy Policy</button>
              <button onClick={() => handleNavigate('home')} className="hover:text-[#004D66]">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}