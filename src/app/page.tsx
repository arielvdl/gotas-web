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
        <header className="flex justify-between items-center mb-12 lg:mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="p-3 hover:bg-white/10 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-3 hover:bg-white/10 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5.4M7 13L5.4 3M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              entrar
            </button>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.9] tracking-tight">
                <span className="sm:hidden">
                  TRANSFORME<br />
                  SEGUIDORES EM LEADS,<br />
                  E LEADS EM CLIENTES FIÉIS.
                </span>
                <span className="hidden sm:inline">
                  TRANSFORME SEGUIDORES EM LEADS, E LEADS EM CLIENTES FIÉIS.
                </span>
                <span className="block text-gray-400 mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                  
                </span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400">
                Mais vendas, mais engajamento, mais recorrência: com Gotas, sua marca conecta e ativa sua audiência de verdade. Ofereça benefícios exclusivos, recompensas digitais e experiências únicas em poucos cliques — sem depender de algoritmos, mídias pagas ou barreiras técnicas.
              </p>
            </div>

                         <div className="flex flex-col sm:flex-row gap-6 pt-4">
               <button className="bg-cyan-400 text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105">
                 <div className="text-sm font-medium">- COMO -</div>
                 <div className="text-2xl font-black">FUNCIONA</div>
               </button>
               <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                 <div className="text-sm font-medium">- CRIE -</div>
                 <div className="text-2xl font-black">SUA GOTA</div>
               </button>
             </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="aspect-square w-[512px] lg:w-[614px]">
                <video
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://88ae784e400c50e563482987bb9e892e.cdn.bubble.io/d215/f1734432968430x724472638783376400/home.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="mb-4">
            <h2 className="text-lg lg:text-xl font-medium text-center text-gray-400 tracking-wide">
              DESTAQUES EM:
            </h2>
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
