import DatabaseWithRestApi from '@/components/ui/database-with-rest-api';
import { Droplet } from "lucide-react";
import { Button } from "@/components/button";

export function ApiSection() {
  return (
    <div className="w-full max-w-6xl mx-auto text-center space-y-12 sm:space-y-20 px-4">
      <div className="flex justify-center pb-4 sm:pb-8">
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

      <div className="space-y-6 sm:space-y-8 pt-8 sm:pt-12">
        <h3 className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">
          COMO FUNCIONA
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto px-4">
          Gere vínculos com seus seguidores
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
          Crie incentivos, distribua suas gotas como programa de fidelidade por engajamento, gere motivações através de gamificação e construa uma base sólida de seguidores.
        </p>
        <div className="flex justify-center pt-4">
          <Button className="flex items-center gap-2 text-black px-4 sm:px-7 py-4 sm:py-6 h-auto w-auto text-sm sm:text-lg font-bold rounded-[2rem] bg-white shadow-none hover:bg-gray-100 transition-all">
            <Droplet className="size-4 sm:size-5 text-black" />
            <span className="text-black">crie sua gota</span>
          </Button>
        </div>
      </div>
    </div>
  );
}