import { Handshake, Search, FileText, Globe, TrendingUp, DollarSign } from "lucide-react"
import React from 'react'
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import { PATH } from "../hooks/PATH"
import DashboardLayout from "../layout"
export default function PartnershipPage() {
  const navigate = useNavigate()
  return (
    <DashboardLayout>
      <Helmet>
        <title>Партнёрство с IRBIS U.S. — Импорт, экспорт и международное сотрудничество</title>
        <meta name="description" content="Партнёрство с IRBIS U.S.: поиск клиентов и товаров, помощь с экспортно-импортной документацией, таможенное оформление и финансовая поддержка вашего бизнеса." />
        <meta name="keywords" content="партнёрство, экспорт, импорт, поиск клиентов, логистика, финансовая поддержка, внешнеэкономическая деятельность, IRBIS U.S." />
        <meta property="og:title" content="Партнёрство с IRBIS U.S." />
        <meta property="og:description" content="Сотрудничайте с IRBIS U.S. — от поиска товаров и клиентов до полной поддержки экспортно-импортных операций." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/partnership" />
        <meta property="og:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Партнёрство с IRBIS U.S." />
        <meta name="twitter:description" content="Финансовая и логистическая поддержка для импорта и экспорта. Найдём товары и клиентов по всему миру." />
        <meta name="twitter:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
      </Helmet>
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-20 text-gray-800">Партнерство</h1>

          <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mr-5 border border-blue-100">
                <Handshake className="w-7 h-7 text-[#00BFFF]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Компания ЧП "IRBIS U.S." предлагает Вам партнерство в бизнесе
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 border border-blue-100 flex-shrink-0">
                  <Search className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Поиск товаров и клиентов</h3>
                  <p className="text-gray-700">
                    поможем найти любой товар в других странах для импорта, также найти Вам клиентов для вашего товара в
                    других странах мира (экспорт).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 border border-blue-100 flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Документация</h3>
                  <p className="text-gray-700">
                    Поможем с составлением контракта на экспорт/импорт, регистрацию в Единой электронной информационной
                    системе внешнеторговых операций ЕИСВО, инвойсов и упаковочных листов, таможенную очистку, также
                    логистику.
                  </p>
                </div>
              </div>

              <div className="flex items-start md:col-span-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 border border-blue-100 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Финансовая поддержка</h3>
                  <p className="text-gray-700">
                    Также, компания предлагает осуществить в реальность ваш бизнес проект, оказать финансовую помощь для
                    реализации бизнес проекта по операциям импорта и экспорта.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-[#00BFFF] mr-3" />
                  <span className="text-gray-700 font-medium">Международное сотрудничество</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-[#00BFFF] mr-3" />
                  <span className="text-gray-700 font-medium">Развитие вашего бизнеса</span>
                </div>
                <button onClick={() => navigate(PATH.contact)} className="bg-[#00BFFF] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                  Стать партнером
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

