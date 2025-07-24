export function ProblemSection() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 px-4">
      <div className="text-center space-y-6 sm:space-y-8">
           <h3 className="text-sm sm:text-base font-medium text-cyan-400 uppercase tracking-wider">
              O PROBLEMA
            </h3>
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Pontos tradicionais já não engajam. Gotas faz diferente:
            </h2>
           <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
             As marcas enfrentam os mesmos problemas: Dependência das redes sociais, alto investimento em mídia paga, CAC alto, seguidores que não se relacionam com a sua marca e programas de fidelidade ineficientes. Chega de depender de algoritmos e plataformas: agora, a audiência é sua.
           </p>
        
        {/* Bloco Comparativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto pt-8 sm:pt-12">
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
                Você constrói sua base, não o algoritmo das redes
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
                Benefícios reais, experiências exclusivas
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
                Personalização via IA — sua campanha, sua marca, do seu jeito
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
                Transferível, vendável, com valor real para o usuário
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base leading-relaxed">
                Zero barreiras técnicas — fácil para todos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}