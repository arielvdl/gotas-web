import DatabaseWithRestApi from '@/components/ui/database-with-rest-api';
import { Droplet } from "lucide-react";
import { Button } from "@/components/button";

export function ApiSection() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center space-y-8 sm:space-y-12 px-4">
      <div className="space-y-6 sm:space-y-8 pb-4 sm:pb-6">
        <h3 className="text-sm sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">
          COMO FUNCIONA
        </h3>
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Do social para o seu negócio, sem complicação:
        </h2>
        
        {/* 4 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-6xl mx-auto pt-8 sm:pt-12">
          {/* Passo 1 */}
          <div className="text-center md:text-center space-y-4">
            <div className="flex items-center gap-4 md:flex-col md:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 md:mx-auto bg-white/10 rounded-full flex items-center justify-center md:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-base sm:text-base md:text-xl font-semibold text-white text-left md:text-center">
                Crie sua gota personalizada e divulgue o código.
              </h3>
            </div>
          </div>
          
          {/* Passo 2 */}
          <div className="text-center md:text-center space-y-4">
            <div className="flex items-center gap-4 md:flex-col md:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 md:mx-auto bg-white/10 rounded-full flex items-center justify-center md:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-base sm:text-base md:text-xl font-semibold text-white text-left md:text-center">
                Seus seguidores resgatam a gota em segundos.
              </h3>
            </div>
          </div>
          
          {/* Passo 3 */}
          <div className="text-center md:text-center space-y-4">
            <div className="flex items-center gap-4 md:flex-col md:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 md:mx-auto bg-white/10 rounded-full flex items-center justify-center md:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-base sm:text-base md:text-xl font-semibold text-white text-left md:text-center">
                Você recebe os contatos, conhece o perfil do público e ativa leads com benefícios exclusivos, promoções ou recompensas, quando quiser.
              </h3>
            </div>
          </div>
          
          {/* Passo 4 */}
          <div className="text-center md:text-center space-y-4">
            <div className="flex items-center gap-4 md:flex-col md:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 md:mx-auto bg-white/10 rounded-full flex items-center justify-center md:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-base sm:text-base md:text-xl font-semibold text-white text-left md:text-center">
                Pronto! Sua base cresce, o engajamento aumenta e você tem controle total sobre seus dados e sua comunidade.
              </h3>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center pt-8 sm:pt-12">
          <Button 
                href="https://gotas.social/"
                className="flex items-center gap-2 text-black px-4 sm:px-7 py-4 sm:py-6 h-auto w-auto text-sm sm:text-lg font-bold rounded-[2rem] bg-white shadow-none hover:bg-gray-100 transition-all"
              >
                <Droplet className="size-4 sm:size-5 text-black" />
                <span className="text-black">crie sua gota</span>
              </Button>
        </div>
      </div>

      <div className="flex justify-center pt-2 sm:pt-4">
        <DatabaseWithRestApi 
          title="gotas são leads dos seus seguidores"
          circleText="VOCÊ"
          lightColor="#06b6d4"
          buttonTexts={{
            first: "E-mail",
            second: "WhatsApp"
          }}
        />
      </div>
    </div>
  );
}