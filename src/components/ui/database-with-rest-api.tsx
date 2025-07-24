"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  circleText,
  buttonTexts,
  title,
  lightColor,
}: DatabaseWithRestApiProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[420px] w-full max-w-[600px] flex-col items-center scale-[1.32]",
        className
      )}
    >
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 260 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 39 45 v 20 q 0 5 5 5 h 59 q 5 0 5 5 v 15" />
          <path d="M 99 45 v 15 q 0 5 5 5 h 13 q 5 0 5 5 v 15" />
          <path d="M 159 45 v 15 q 0 5 -5 5 h -14 q -5 0 -5 5 v 15" />
          <path d="M 219 45 v 20 q 0 5 -5 5 h -60 q -5 0 -5 5 v 15" />
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="15"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          <g>
            <rect
              fill="#18181B"
              x="14"
              y="-5"
              width="50"
              height="50"
              rx="8"
            ></rect>
            <foreignObject x="14" y="-5" width="50" height="50">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/social/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </div>
            </foreignObject>
          </g>
          <g>
            <rect
              fill="#18181B"
              x="74"
              y="-5"
              width="50"
              height="50"
              rx="8"
            ></rect>
            <foreignObject x="74" y="-5" width="50" height="50">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/social/youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </div>
            </foreignObject>
          </g>
          <g>
            <rect
              fill="#18181B"
              x="134"
              y="-5"
              width="50"
              height="50"
              rx="8"
            ></rect>
            <foreignObject x="134" y="-5" width="50" height="50">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/social/tiktok.svg"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </div>
            </foreignObject>
          </g>
          <g>
            <rect
              fill="#18181B"
              x="194"
              y="-5"
              width="50"
              height="50"
              rx="8"
            ></rect>
            <foreignObject x="194" y="-5" width="50" height="50">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/social/discord.svg"
                  alt="Discord"
                  width={24}
                  height={24}
                />
              </div>
            </foreignObject>
          </g>
        </g>
        <defs>
          <mask id="db-mask-1">
            <path
              d="M 39 45 v 20 q 0 5 5 5 h 59 q 5 0 5 5 v 15"
              strokeWidth="0.8"
              stroke="white"
            />
          </mask>
          <mask id="db-mask-2">
            <path
              d="M 99 45 v 15 q 0 5 5 5 h 13 q 5 0 5 5 v 15"
              strokeWidth="0.8"
              stroke="white"
            />
          </mask>
          <mask id="db-mask-3">
            <path
              d="M 159 45 v 15 q 0 5 -5 5 h -14 q -5 0 -5 5 v 15"
              strokeWidth="0.8"
              stroke="white"
            />
          </mask>
          <mask id="db-mask-4">
            <path
              d="M 219 45 v 20 q 0 5 -5 5 h -60 q -5 0 -5 5 v 15"
              strokeWidth="0.8"
              stroke="white"
            />
          </mask>
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#00A6F5"} stopOpacity="0.8" />
            <stop offset="50%" stopColor={lightColor || "#00A6F5"} stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3" />
          <span className="ml-2 text-[10px]">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-[#141516] font-semibold text-xs">
          {circleText ? circleText : "CREATOR"}
        </div>
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 ">
            <Mail className="size-4" />
            <span>{buttonTexts?.first || "Email"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-[#101112] px-3 text-xs sm:flex border items-center gap-2">
            <MessageCircle className="size-4" />
            <span>{buttonTexts?.second || "WhatsApp"}</span>
          </div>
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatabaseWithRestApi;

 