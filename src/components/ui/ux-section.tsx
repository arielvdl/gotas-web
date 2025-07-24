"use client";

import { useEffect, useRef } from "react";
import { Droplet } from "lucide-react";
import { Button } from "@/components/button";

export function UxSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
      <div className="bg-gray-900/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Facilidade para quem cria. Praticidade para quem resgata.
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
              Nossa experiência é imbatível: Com apenas 3 cliques qualquer pessoa pode resgatar a sua gota e em instantes você passa a ter acesso direto a esse lead. Sem complicação, sem barreiras técnicas. Uma única gota pode atrair milhares de leads para o seu negócio.
            </p>
            <div className="pt-4">
              <Button 
                onClick={() => window.open('https://gotas.social/', '_blank')}
                className="flex items-center gap-2 text-black px-4 sm:px-7 py-4 sm:py-6 h-auto w-auto text-sm sm:text-lg font-bold rounded-[2rem] bg-white shadow-none hover:bg-gray-100 transition-all"
              >
                <Droplet className="size-4 sm:size-5 text-black" />
                <span className="text-black">crie sua gota</span>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-2xl"
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source 
                  src="https://88ae784e400c50e563482987bb9e892e.cdn.bubble.io/d215/f1734453149732x644426498242312000/674fa6622a2d4c5f3a880ccd_6751066445744e4de34bd5ee_Big-waves-%5Bremix%5D-transcode.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}