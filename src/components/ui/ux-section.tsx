"use client";

import { useEffect, useRef } from "react";

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
    <div className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="bg-gray-900/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              3 cliques e<br />
              pronto.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
              Nossa experiência é imbatível: qualquer pessoa pode resgatar suas GOTAS. Não precisa de experiência em Web3; o onboarding é simples e rápido.
            </p>
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