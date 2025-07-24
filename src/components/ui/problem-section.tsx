export function ProblemSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h3 className="text-base sm:text-base font-medium text-cyan-400 uppercase tracking-wider">
          O PROBLEMA
        </h3>
      </div>
      
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
          Pontos tradicionais já não engajam
        </h2>
        <p className="text-sm sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          As marcas enfrentam os mesmos problemas: Dependência das redes sociais, alto investimento em mídia paga, CAC alto, seguidores que não se relacionam com a sua marca e programas de fidelidade ineficientes. Chega de depender de algoritmos e plataformas: agora, a audiência é sua.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="group flex items-center gap-4 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-white/30 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed group-hover:text-cyan-400 transition-colors duration-300">
                Você constrói sua base, não o algoritmo das redes
              </p>
            </div>
            
            <div className="group flex items-center gap-4 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-white/30 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed group-hover:text-cyan-400 transition-colors duration-300">
                Benefícios reais, experiências exclusivas
              </p>
            </div>
            
            <div className="group flex items-center gap-4 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-white/30 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed group-hover:text-cyan-400 transition-colors duration-300">
                Personalização via IA — sua campanha, sua marca, do seu jeito
              </p>
            </div>
            
            <div className="group flex items-center gap-4 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-white/30 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed group-hover:text-cyan-400 transition-colors duration-300">
                Transferível, vendável, com valor real para o usuário
              </p>
            </div>
            
            <div className="sm:col-span-2 group flex items-center gap-4 hover:scale-105 transition-all duration-300 justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-white/30 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed group-hover:text-cyan-400 transition-colors duration-300">
                Zero barreiras técnicas — fácil para todos
              </p>
            </div>
      </div>
    </div>
  );
}