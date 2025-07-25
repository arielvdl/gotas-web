'use client'

import { ProgressiveBlurSlider } from '@/components/ui/progressive-blur-slider'
import { ProblemSection } from '@/components/ui/problem-section'
import { ApiSection } from '@/components/ui/api-section'
import { UxSection } from '@/components/ui/ux-section'
import { EcosystemSection } from '@/components/ui/ecosystem-section'
import { FaqSection } from '@/components/ui/faq-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 lg:py-8">
        <header className="flex justify-between items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-2">
            <img src="/logos/logo_gotas_v2_clean.svg" alt="Gotas - Plataforma de Recompensas Digitais que transforma seguidores em clientes" className="h-8 sm:h-10 w-auto" />
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="https://gotas.com" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              entrar
            </a>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                </div>
                <span>PROTOCOL</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider">Como transformar seguidores em clientes?</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight">
                  <span className="sm:hidden">
                    TRANSFORME<br />
                    SEGUIDORES EM LEADS,<br />
                    E LEADS EM CLIENTES FIÉIS.
                  </span>
                  <span className="hidden sm:inline">
                    TRANSFORME SEGUIDORES EM LEADS, E LEADS EM CLIENTES FIÉIS.
                  </span>
                </h1>
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-white">
                  Resposta direta: Com tokens de recompensa digitais que criam conexões reais entre sua marca e audiência.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                  Mais vendas, mais engajamento, mais recorrência: com Gotas, sua marca conecta e ativa sua audiência de verdade. Ofereça benefícios exclusivos, recompensas digitais e experiências únicas em poucos cliques — sem depender de algoritmos, mídias pagas ou barreiras técnicas.
                </p>
              </div>
            </div>

                         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
               <button 
                 onClick={() => {
                   const destaquesSection = document.getElementById('destaques');
                   if (destaquesSection) {
                     destaquesSection.scrollIntoView({ behavior: 'smooth' });
                   }
                 }}
                 className="bg-cyan-400 text-black px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
               >
                 <div className="text-xs sm:text-sm font-medium">- COMO -</div>
                 <div className="text-lg sm:text-2xl font-black">FUNCIONA</div>
               </button>
               <a href="https://gotas.com" className="bg-white text-black px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 text-center block w-full sm:w-auto">
                 <div className="text-xs sm:text-sm font-medium">- CRIE -</div>
                 <div className="text-lg sm:text-2xl font-black">SUA GOTA</div>
               </a>
             </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[512px] lg:max-w-[614px]">
              <div className="aspect-square w-full">
                <video
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://88ae784e400c50e563482987bb9e892e.cdn.bubble.io/d215/f1734432968430x724472638783376400/home.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-white/10"></div>
            </div>
          </div>
        </div>

        <div id="destaques" className="mt-16 lg:mt-20">
          <div className="mb-4">
            <h2 className="text-lg lg:text-xl font-medium text-center text-gray-400 tracking-wide">
              Onde o Gotas já foi destaque?
            </h2>
            <p className="text-center text-gray-500 mt-2">Principais veículos que cobriram nossa plataforma de recompensas digitais</p>
          </div>
          <ProgressiveBlurSlider />
        </div>

        <div className="mt-32 lg:mt-40">
          <ApiSection />
        </div>

        <div className="mt-32 lg:mt-40">
          <UxSection />
        </div>

        <div className="mt-32 lg:mt-40">
          <ProblemSection />
        </div>

        <div className="mt-32 lg:mt-40">
          <EcosystemSection />
        </div>

        <div className="mt-32 lg:mt-40">
          <FaqSection />
        </div>
      </div>
    </div>
  )
}
