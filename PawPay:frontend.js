import React, { useState, useEffect } from 'react';
import { PawPrint, Wallet, ChevronRight, Heart, CheckCircle2, ExternalLink, Share2, Info, ArrowLeft, ShieldCheck } from 'lucide-react';

// --- MOCK DATA ---
const CAMPAIGNS = [
  {
    id: 1,
    title: "Luna - Cirugía de urgencia",
    shelter: "Refugio Santa Rosa",
    goal: 500,
    raised: 350,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
    description: "Luna fue rescatada cerca de los Arcos en Querétaro con una fractura severa tras ser atropellada. Necesita una cirugía ortopédica urgente para volver a caminar sin dolor. Tu donación en USDC va directamente a la clínica veterinaria asociada, garantizando total transparencia en el uso de los fondos. Ayúdanos a darle una segunda oportunidad.",
    location: "Querétaro, Qro."
  },
  {
    id: 2,
    title: "Max y sus cachorros - Alimento",
    shelter: "Patitas Felices Qro",
    goal: 300,
    raised: 120,
    image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=800",
    description: "Maximiliana (Max) fue encontrada en Juriquilla protegiendo a sus 5 cachorros bajo la lluvia. Necesitamos asegurar su alimentación con croquetas de alta calidad para cachorros y madre lactante durante los próximos 2 meses antes de darlos en adopción.",
    location: "Juriquilla, Qro."
  },
  {
    id: 3,
    title: "Construcción de Tejados",
    shelter: "Adopta un Amigo",
    goal: 1000,
    raised: 850,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
    description: "La temporada de lluvias se acerca y la zona de cuarentena no tiene techo. Con esta campaña compraremos láminas y material de construcción. Los recibos de la ferretería serán subidos a IPFS y vinculados a la wallet del refugio para auditoría pública.",
    location: "El Marqués, Qro."
  }
];

export default function PawPayApp() {
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home', 'details', 'success'
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [isDonating, setIsDonating] = useState(false);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleDonate = () => {
    setIsDonating(true);
    // Simulate blockchain transaction delay
    setTimeout(() => {
      setIsDonating(false);
      setCurrentScreen('success');
    }, 2000);
  };

  const navigateHome = () => {
    setCurrentScreen('home');
    setSelectedCampaign(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-slate-800 selection:bg-emerald-200">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#F9F8F6]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button onClick={navigateHome} className="flex items-center gap-3 group">
            <div className="bg-emerald-100 p-2.5 rounded-2xl group-hover:bg-emerald-200 transition-colors">
              <PawPrint className="w-6 h-6 text-emerald-700" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">PawPay</span>
          </button>

          {/* Web3 Connect Wallet Button - Solana Gradient Accent */}
          <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Wallet className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Connect Wallet</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-6 py-12 min-h-[calc(100vh-160px)]">
        
        {/* =========================================
            SCREEN 1: LANDING & DISCOVERY
            ========================================= */}
        {currentScreen === 'home' && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-[2.5rem] bg-emerald-900 text-white shadow-xl">
              {/* Abstract blurred background simulating Querétaro landscape / Arcos colors */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                 <img 
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1600" 
                    alt="Rescued dog" 
                    className="w-full h-full object-cover object-center"
                 />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-900/90 to-transparent"></div>
              
              <div className="relative z-10 p-12 md:p-20 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 mb-6 text-emerald-100 text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  <span>Apoyando a 12 refugios en Querétaro</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Transforma Vidas con <span className="text-emerald-300">Transparencia Radical</span>
                </h1>
                <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-xl leading-relaxed font-light">
                  Donaciones directas, auditables y estables en Solana. Asegura que tu ayuda llegue a quienes no tienen voz.
                </p>
                <button 
                  onClick={() => document.getElementById('campaigns').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-lg flex items-center gap-2"
                >
                  Explorar Campañas <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </section>

            {/* Campaign Grid */}
            <section id="campaigns" className="space-y-8">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Campañas Urgentes</h2>
                  <p className="text-slate-500">Apoya a refugios verificados en la región.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CAMPAIGNS.map((campaign) => {
                  const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100);
                  
                  return (
                    <div 
                      key={campaign.id} 
                      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group cursor-pointer flex flex-col"
                      onClick={() => {
                        setSelectedCampaign(campaign);
                        setCurrentScreen('details');
                      }}
                    >
                      {/* Card Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={campaign.image} 
                          alt={campaign.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm">
                          {campaign.shelter}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">{campaign.title}</h3>
                        
                        <div className="mt-auto space-y-4">
                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                              <span className="text-emerald-600">${campaign.raised} USDC</span>
                              <span className="text-slate-400">de ${campaign.goal} USDC</span>
                            </div>
                            <div className="h-2.5 w-full bg-stone-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Action Button */}
                          <button className="w-full py-3.5 rounded-2xl bg-stone-50 text-slate-700 font-semibold group-hover:bg-emerald-600 group-hover:text-white transition-colors flex justify-center items-center gap-2">
                            Ver Detalles <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* =========================================
            SCREEN 2: CAMPAIGN DETAILS
            ========================================= */}
        {currentScreen === 'details' && selectedCampaign && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={navigateHome}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" /> Volver a campañas
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Story & Media */}
              <div className="lg:col-span-7 space-y-8">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-md">
                  <img 
                    src={selectedCampaign.image} 
                    alt={selectedCampaign.title} 
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-slate-800 shadow-lg flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Refugio Verificado
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-stone-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                      {selectedCampaign.shelter.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{selectedCampaign.shelter}</h3>
                      <p className="text-slate-500 text-sm">{selectedCampaign.location}</p>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-6">{selectedCampaign.title}</h1>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">
                    {selectedCampaign.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Action Panel */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 bg-white rounded-[2.5rem] p-8 shadow-xl shadow-stone-200/50 border border-stone-100">
                  
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-slate-900">${selectedCampaign.raised}</span>
                      <span className="text-lg text-slate-500 font-medium">USDC recaudados</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">de la meta de ${selectedCampaign.goal} USDC</p>
                    
                    <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${Math.min((selectedCampaign.raised / selectedCampaign.goal) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Amount Selector */}
                  <div className="space-y-4 mb-8">
                    <label className="block text-sm font-semibold text-slate-700">Selecciona tu donación</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[5, 10, 25, 50].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={`py-4 rounded-2xl font-bold text-lg transition-all ${
                            selectedAmount === amount 
                              ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-500' 
                              : 'bg-stone-50 text-slate-600 border-2 border-transparent hover:bg-stone-100'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Web3 Notice */}
                  <div className="bg-blue-50/50 rounded-2xl p-4 mb-8 flex gap-3 items-start border border-blue-100">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800 leading-relaxed">
                      Las donaciones se procesan on-chain en <span className="font-semibold">USDC</span> para estabilidad y auditabilidad instantánea.
                    </p>
                  </div>

                  {/* Donate Button */}
                  <button 
                    onClick={handleDonate}
                    disabled={isDonating}
                    className={`w-full py-5 rounded-2xl font-bold text-xl text-white transition-all shadow-lg flex justify-center items-center gap-3
                      ${isDonating 
                        ? 'bg-emerald-400 cursor-wait' 
                        : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-200 hover:-translate-y-0.5'
                      }`}
                  >
                    {isDonating ? (
                      <span className="animate-pulse">Procesando en Solana...</span>
                    ) : (
                      <>Donar {selectedAmount} USDC</>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* =========================================
            SCREEN 3: SUCCESS & cNFT REWARD
            ========================================= */}
        {currentScreen === 'success' && selectedCampaign && (
          <div className="max-w-2xl mx-auto text-center py-12 animate-in zoom-in-95 duration-500">
            
            {/* Header Success */}
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 rounded-full p-4 animate-bounce">
                <CheckCircle2 className="w-16 h-16 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              ¡Gracias, Héroe de PawPay!
            </h1>
            <p className="text-lg text-slate-600 mb-12">
              Tu donación de <strong className="text-slate-900">{selectedAmount} USDC</strong> ha sido procesada y enviada directamente a {selectedCampaign.shelter}.
            </p>

            {/* The "Wow" Factor: cNFT Representation (Web3 Gradient Accent) */}
            <div className="relative mx-auto w-full max-w-[340px] aspect-[3/4] rounded-[2rem] p-1 bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 shadow-2xl shadow-indigo-200/50 group overflow-hidden mb-12 transform hover:scale-105 transition-transform duration-500">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              
              {/* Inner Card */}
              <div className="relative bg-slate-900 h-full rounded-[1.8rem] p-6 flex flex-col overflow-hidden">
                {/* Background image tint */}
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                  style={{ backgroundImage: `url(${selectedCampaign.image})` }}
                ></div>
                
                <div className="relative z-10 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-auto">
                    <PawPrint className="w-8 h-8 text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full">
                      Impact Receipt
                    </span>
                  </div>
                  
                  <div className="mt-auto text-left space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white leading-tight mb-1">{selectedCampaign.title}</h4>
                      <p className="text-cyan-400 text-sm font-medium">{selectedCampaign.shelter}</p>
                    </div>
                    
                    {/* Metadata */}
                    <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10 space-y-2 font-mono text-xs text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Monto:</span>
                        <span className="text-white">{selectedAmount} USDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Wallet:</span>
                        <span className="text-white">8xDf...9aQ2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Ubicación:</span>
                        <span className="text-white truncate max-w-[100px] text-right">Querétaro</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 text-center uppercase tracking-wider mt-2">
                      Emitido mediante State Compression
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-4 rounded-2xl bg-white border border-stone-200 text-slate-700 font-semibold hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <ExternalLink className="w-5 h-5" /> Ver en Solana Explorer
              </button>
              <button className="px-6 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-md">
                <Share2 className="w-5 h-5" /> Compartir Impacto
              </button>
            </div>
            
            <button 
              onClick={navigateHome}
              className="mt-12 text-slate-500 hover:text-slate-900 font-medium underline underline-offset-4"
            >
              Volver al inicio
            </button>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-stone-200 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-900">
            <PawPrint className="w-5 h-5 text-emerald-600" />
            <span className="font-bold">PawPay</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-emerald-600 transition-colors">Sobre Nosotros</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Refugios en Querétaro</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Ver Contratos (Explorer)</a>
          </div>
          <p className="text-xs text-slate-400">
            Construido con <Heart className="w-3 h-3 inline text-red-400 mx-0.5" /> sobre Solana.
          </p>
        </div>
      </footer>

    </div>
  );
}