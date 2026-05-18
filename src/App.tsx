import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Search, ShieldCheck, Zap, 
  ShieldAlert, Network, Cpu, Send 
} from 'lucide-react';

// --- NAVBAR BİLEŞENİ ---
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050608]/85 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-24 flex justify-between items-center">
        
        {/* LOGO BÖLÜMÜ */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative h-12 w-48 flex items-center justify-start overflow-visible">
            <img 
              src="/logo.png" 
              alt="CatexWeb Logo" 
              className="h-full w-auto object-contain scale-[3.2] origin-left transition-transform duration-500 group-hover:scale-[3.5]"
            />
            {/* Logo arkasındaki siber aura */}
            <div className="absolute -inset-10 bg-cyan-400 blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none" />
          </div>
        </motion.div>

        {/* MENÜ BAĞLANTILARI */}
        <div className="hidden md:flex items-center gap-10">
          {['BAŞLANGIÇ', 'HİZMETLER', 'YAKLAŞIMIM'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* GÜVENLİ BAĞLANTI BUTONU */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-500 flex items-center gap-3 group text-white">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:bg-black" />
            GÜVENLİ BAĞLANTI
          </button>
        </motion.div>
      </div>
    </nav>
  );
}

// --- ANA APP BİLEŞENİ ---
export default function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 600);
    }
  };

  return (
    <main className="min-h-screen bg-[#050608] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden pt-24 scroll-smooth">
      <Navbar />

      {/* 1. BÖLÜM: HERO & BENTO GRID */}
      <section id="başlangiç" className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Sol Büyük Kart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center gap-y-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

            {/* Üst Kısım: Başlık ve Detaylar */}
            <div className="relative z-10 space-y-4">
              <span className="label-mono text-cyan-400 text-sm block tracking-[0.32em] uppercase font-bold">MODERN WEB TASARIMCISI & STRATEJİST</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tighter mb-8 shadow-lg shadow-black/20">
                HIZLI, MODERN <br /> VE <span className="text-gradient">ETKİLEYİCİ</span> <br /> WEB SİTELERİ.
              </h1>
              <p className="text-slate-400 max-w-md text-base md:text-lg leading-relaxed font-light">
                İşletmenizi dijital dünyada öne çıkaran, siber disiplinle inşa edilmiş yüksek performanslı çözümler.
              </p>
              
              <div className="flex gap-4 pt-2">
                <button 
                  onClick={handleScrollToContact}
                  className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-all uppercase text-xs tracking-widest shadow-xl shadow-black/10 active:scale-95 duration-200"
                >
                  Başlayalım
                </button>
              </div>
            </div>
            
            {/* Alt Kısım: Terminal Paneli */}
            <div className="relative z-10 w-full bg-black/40 border border-white/5 rounded-xl font-mono text-xs text-slate-400 p-5 shadow-2xl backdrop-blur-md space-y-3 border-l-2 border-l-cyan-500/50">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/30" />
                </div>
                <span className="text-[10px] text-slate-600 tracking-widest font-bold">CATEXWEB_CORE_SECURITY.SH</span>
              </div>
              <div className="space-y-1.5 text-[11px] leading-relaxed">
                <p className="text-cyan-400"><span className="text-slate-600">❯</span> npx catexweb-audit --secure</p>
                <p className="text-emerald-400 font-bold">✔ 0 Vulnerabilities Detected (Security-by-Design)</p>
                <p className="text-slate-500">→ Core Engine: React 19 + TypeScript + Tailwind</p>
                <p className="text-white font-medium animate-pulse flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  ■ Build successful. Digital Armor Status: Fully Armed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sağ Bento Kartları */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. KART: WEB TASARIM & GELİŞTİRME */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.04] transition-all flex flex-col justify-between">
               <div>
                 <span className="label-mono text-xs text-slate-500 block mb-4 uppercase tracking-widest text-white/50">Hizmet Durumu</span>
                 <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                   <h3 className="font-bold text-xl uppercase tracking-tight">Web Tasarım & Geliştirme</h3>
                 </div>
               </div>

               <div className="w-full aspect-[16/10] rounded-xl overflow-hidden my-4 bg-white/5 border border-white/5">
                 <img 
                   src="/web.png" 
                   alt="Web Tasarım" 
                   className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                 />
               </div>

               <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em]">Modern Mimari: Active</p>
            </div>

            {/* 2. KART: ESTETİK TASARIM */}
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:bg-white/[0.04] transition-all duration-500">
              <div>
                <h3 className="font-bold text-xl uppercase mb-2 group-hover:text-cyan-400 transition-colors">Estetik Tasarım</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Kullanıcı deneyimi ve görsel mükemmellik odaklı siber standartlarda arayüzler.</p>
              </div>

              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mt-4 bg-white/5 border border-white/5">
                <img 
                  src="/estetiktasarım.png" 
                  alt="Estetik Tasarım" 
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: ÇALIŞMA METODOLOJİSİ */}
      <ApproachSection />

      {/* 3. BÖLÜM: UZMANLIK HİZMETLERİ */}
      <ExpertiseSection />

      {/* 4. BÖLÜM: İLETİŞİM FORMU */}
      <ContactSection nameInputRef={nameInputRef} />

      <footer className="py-12 text-center text-slate-700 text-[9px] font-mono uppercase tracking-[0.8em] opacity-50">
        © 2026 CATEXWEB // SİBER GÜVENLİK VE MODERN WEB MİMARİSİ
      </footer>
    </main>
  );
}

// --- ALT BİLEŞENLER ---
function ApproachSection() {
  return (
    <section id="yaklaşimim" className="container mx-auto px-6 py-20 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        <div className="lg:col-span-5 flex flex-col">
          <div>
            <span className="label-mono text-slate-500 text-xs tracking-[0.42em] mb-4 block uppercase font-bold text-white/40">ÇALIŞMA METODOLOJİM</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              PROFESYONEL <br /><span className="text-gradient">STANDARTLAR</span>.
            </h2>
          </div>
          
          <motion.div whileHover={{ y: -5 }} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex-1 flex flex-col justify-center">
            <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 shrink-0">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">KALİTELİ ÇÖZÜMLER</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Yüksek performanslı sistemleri, 'Security-by-Design' prensibiyle en gelişmiş dijital zırhlara kavuşturuyoruz.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <MethodCard icon={<Network size={24} />} title="HIZ VE PERFORMANS" desc="Global erişime sahip, ışık hızında açılan siber yapılar." />
          <MethodCard icon={<ShieldCheck size={24} />} title="KALİTE GARANTİSİ" desc="Hatasız kod yapısı ve modern tasarımın milimetrik uyumu." />
          <MethodCard icon={<Cpu size={24} />} title="ESNEK ALTYAPI" desc="Modüler ve geliştirilebilir mimariler." />
        </div>

      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section id="hizmetler" className="container mx-auto px-6 py-20 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="label-mono text-slate-500 text-xs tracking-[0.35em] mb-4 block uppercase font-black opacity-40 text-white">UZMANLIK HİZMETLERİ</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8">YÜKSEK- <br />PERFORMANS <br /><span className="text-gradient">ÇÖZÜMLERİ</span>.</h2>
          <div className="flex gap-4">
            {[Layout, Search, ShieldCheck].map((Icon, i) => (
              <div key={i} className="w-12 h-12 bg-white/[0.02] border border-white/10 rounded-xl flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all cursor-pointer group"><Icon size={20} className="group-hover:scale-110 transition-transform" /></div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <ServiceRow icon={<Layout size={22} />} title="Kullanıcı Odaklı Tasarım" desc="Müşteriye dönüşen, estetik ve işlevsel siber arayüzler." />
          <ServiceRow icon={<Search size={22} />} title="SEO Stratejileri" desc="Teknik optimizasyon ile arama motorlarında zirve." />
          <ServiceRow icon={<ShieldCheck size={22} />} title="Modern Web Geliştirme" desc="En yeni teknolojilerle zırhlandırılmış altyapılar." />
        </div>
      </div>
    </section>
  );
}

// --- İLETİŞİM FORMU (VERİ HATTININ BAĞLANDIĞI NİHAİ BÖLÜM) ---
function ContactSection({ nameInputRef }: any) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    // 🔑 Güvenli Veri Hattı Anahtarı başarıyla tanımlandı
    formData.append("access_key", "8f40230d-ff4d-4527-9be7-902bbd100c49");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.currentTarget.reset(); // Sinyal başarıyla ulaştığında formu temizle
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-24 border-t border-white/5">
      <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-cyan-950/10">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="label-mono text-slate-500 mb-6 block uppercase tracking-[0.5em] text-xs font-black">İletişime Geçin</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">SİSTEME <br /><span className="text-gradient">KATILIN</span>.</h2>
            <p className="text-slate-400 text-lg max-w-sm font-light leading-relaxed">Projelerinizi siber disiplinle inşa etmek için terminalin başındayım.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                ref={nameInputRef} 
                name="name"
                type="text" 
                placeholder="ADINIZ" 
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-sm p-5 text-white outline-none focus:border-cyan-400 transition-colors" 
              />
              <input 
                name="email"
                type="email" 
                placeholder="E-POSTA" 
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-sm p-5 text-white outline-none focus:border-cyan-400 transition-colors" 
              />
            </div>
            <textarea 
              name="message"
              rows={5} 
              placeholder="MESAJINIZ" 
              required
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-sm p-5 text-white outline-none focus:border-cyan-400 transition-colors"
            ></textarea>
            
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full font-black py-5 rounded-2xl transition-all duration-500 uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 group ${
                status === 'success' ? 'bg-emerald-500 text-white' :
                status === 'error' ? 'bg-red-500 text-white' :
                'bg-white text-black hover:bg-cyan-400'
              }`}
            >
              {status === 'idle' && (
                <>SİNYALİ GÖNDER <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" /></>
              )}
              {status === 'submitting' && 'BAĞLANTI KURULUYOR...'}
              {status === 'success' && 'SİNYAL ALINDI ✓'}
              {status === 'error' && 'HATA: SİNYAL KESİLDİ X'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function MethodCard({ icon, title, desc }: any) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-8 group hover:bg-white/[0.04] transition-all flex-1">
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">{icon}</div>
      <div>
        <h4 className="text-xl font-bold uppercase mb-2 tracking-widest">{title}</h4>
        <p className="text-slate-500 text-base font-light">{desc}</p>
      </div>
    </motion.div>
  );
}

function ServiceRow({ icon, title, desc }: any) {
  return (
    <motion.div whileHover={{ x: 10 }} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex items-start gap-8 group hover:bg-white/[0.04] transition-all cursor-default">
      <div className="w-14 h-14 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">{icon}</div>
      <div>
        <h4 className="text-xl font-bold uppercase mb-2 group-hover:text-cyan-400 transition-colors">{title}</h4>
        <p className="text-slate-500 text-base leading-relaxed max-w-md font-light">{desc}</p>
      </div>
    </motion.div>
  );
}
