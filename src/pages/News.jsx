import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Newspaper, Calendar, ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet'
import DashboardLayout from '../layout'

export default function News() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <DashboardLayout>
      <Helmet>
        <title>Новости IRBIS U.S. — Таможенное оформление и ВЭД в Узбекистане</title>
        <meta name="description" content="Читайте последние новости компании IRBIS U.S. о таможенном оформлении, логистике и внешнеэкономической деятельности в Узбекистане." />
        <meta name="keywords" content="новости IRBIS, ВЭД, таможенное оформление, логистика, экспорт, импорт, Узбекистан, IRBIS U.S." />
        <meta property="og:title" content="Новости IRBIS U.S. — ВЭД и Таможня" />
        <meta property="og:description" content="Актуальные новости в сфере внешнеэкономической деятельности и таможенного оформления от IRBIS U.S." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/news" />
        <meta property="og:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Новости IRBIS U.S." />
        <meta name="twitter:description" content="Последние новости и аналитика в сфере внешнеэкономической деятельности и логистики от IRBIS U.S." />
        <meta name="twitter:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
      </Helmet>
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-20 text-gray-800" data-aos="fade-up">
            Новости
          </h1>

          <div className="grid gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up">
              <div className="flex items-center mb-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>29.11.2024</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Законом не предусмотрено истребование таможенными органами доверенности у водителей - Таможенный комитет
              </h2>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <Newspaper className="w-5 h-5 text-[#00BFFF] mr-2" />
                  <span className="text-gray-600 text-sm">Источник: Kun.uz</span>
                </div>
                <a
                  href="https://kun.uz/ru/news/2024/11/29/zakonom-ne-predusmotreno-istrebovaniye-tamojyennymi-organami-doverennosti-u-voditeley-tamojyennyy-komitet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#00BFFF] hover:text-blue-800 transition-colors"
                >
                  <span className="mr-1">Подробнее</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up">
              <div className="flex items-center mb-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>04.11.2024</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                В Узбекистане снизят таможенные пошлины на импорт ювелирных изделий
              </h2>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <Newspaper className="w-5 h-5 text-[#00BFFF] mr-2" />
                  <span className="text-gray-600 text-sm">Источник: Kun.uz</span>
                </div>
                <a
                  href="https://kun.uz/ru/news/2024/11/04/v-uzbekistane-snizyat-tamojyennyye-poshliny-na-import-yuvelirnyx-izdeliy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#00BFFF] hover:text-blue-800 transition-colors"
                >
                  <span className="mr-1">Подробнее</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-aos="fade-up">
              <div className="flex items-center mb-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>16.09.2024</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Узбекистан подписал соглашение о сотрудничестве в таможенной сфере с США
              </h2>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <Newspaper className="w-5 h-5 text-[#00BFFF] mr-2" />
                  <span className="text-gray-600 text-sm">Источник: Kun.uz</span>
                </div>
                <a
                  href="https://kun.uz/ru/news/2024/09/16/uzbekistan-podpisal-soglasheniye-o-sotrudnichestve-v-tamojyennoy-sfere-s-ssha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#00BFFF] hover:text-blue-800 transition-colors"
                >
                  <span className="mr-1">Подробнее</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <a
              href="https://kun.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00BFFF] hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">Больше новостей на Kun.uz</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
