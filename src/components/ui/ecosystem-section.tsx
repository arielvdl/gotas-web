'use client';

export function EcosystemSection() {
  return (
    <section className="relative">
      <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20">
        <h3 className="text-base sm:text-base font-medium text-gray-400 tracking-[0.2em] uppercase">
          Ecossistema Gotas
        </h3>
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
          Soluções para quem quer crescer e inovar
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {/* Gotas */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 group">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-cyan-400">
                Gotas
              </h4>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Dê o primeiro passo para transformar seguidores em clientes
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Crie as suas próprias gotas personalizadas e comece a ativar, recompensar e coletar leads em tempo real.
            </p>
            <button 
              onClick={() => window.open('#', '_blank')}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              Criar gota
            </button>
          </div>
        </div>

        {/* GotasPay */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-300 group">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-cyan-400">
                GotasPAY
              </h4>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              Receba em cripto com GotasPay
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Expanda suas vendas para o mundo digital: aceite pagamentos em cripto facilmente, de pessoa para pessoa ou em sua loja online, com taxas baixas e liquidação instantânea.
            </p>
            <button 
              onClick={() => window.open('http://commerce.gotas.com/', '_blank')}
              className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              Criar conta
            </button>
          </div>
        </div>

        {/* Gotas Rewards */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-purple-400/50 transition-all duration-300 group">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-purple-400">
                Gotas REWARDS
              </h4>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              Fidelize com o Gotas Rewards
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Incentive, premie e retenha seu público com um programa de recompensas digitais totalmente personalizável. Sua marca define as regras, os prêmios e os gatilhos — o Gotas faz o resto.
            </p>
            <button 
              onClick={() => window.open('http://rewards.gotas.com/', '_blank')}
              className="bg-purple-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-purple-300 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              Criar campanha
            </button>
          </div>
        </div>

        {/* Compre cripto com PIX */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 hover:border-green-400/50 transition-all duration-300 group">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-green-400">
                CRIPTO
              </h4>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
              Compre cripto com PIX
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              A maneira mais rápida e acessível de entrar no universo digital. No Brasil, o PIX é o método favorito — no Gotas, seu público compra cripto em segundos, direto da carteira para sua experiência.
            </p>
            <button 
              onClick={() => window.open('https://pix.gotas.com/', '_blank')}
              className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-green-300 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}