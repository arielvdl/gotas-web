'use client'

import { useState } from 'react'
import { ComparisonTable } from '@/components/ui/comparison-table'

interface FaqItem {
  question: string
  answer: string | React.ReactNode
}

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqItems: FaqItem[] = [
    {
      question: "Preciso entender de blockchain para usar o Gotas?",
      answer: "De jeito nenhum! O Gotas foi feito para ser simples: você cria, seu público resgata — sem termos técnicos, sem complexidade."
    },
    {
      question: "Como posso usar as gotas?",
      answer: "Para campanhas, premiações, ações com influenciadores, lançamentos de produto, ativações em eventos e muito mais."
    },
    {
      question: "Consigo saber quem resgatou minha gota?",
      answer: "Sim! Cada gota resgatada vira um lead qualificado, com informações e permissão para ativação direta — por onde você quiser."
    },
    {
      question: "Quais as principais diferenças entre o Gotas e os pontos e programas tradicionais?",
      answer: (
        <div className="w-full">
          <ComparisonTable />
        </div>
      )
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto text-center space-y-12 sm:space-y-16 px-4">
      <div className="space-y-6 sm:space-y-8">
        <h3 className="text-sm sm:text-base font-medium text-cyan-400 uppercase tracking-wider">
          AINDA TEM DÚVIDAS?
        </h3>
        
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900 transition-colors duration-200"
              >
                <h4 className="text-lg sm:text-xl font-bold text-white pr-4">
                  {item.question}
                </h4>
                <svg
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="pt-4">
                    {typeof item.answer === 'string' ? (
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}