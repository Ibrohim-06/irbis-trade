import React, { useEffect } from 'react'
import { Scale, Clock, BarChart3, FileText, Truck, Globe, CheckCircle } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import DashboardLayout from '../layout';

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <DashboardLayout>
      <Helmet>
        <title>Наши услуги — IRBIS U.S. | Таможенное оформление и логистика в Узбекистане</title>
        <meta name="description" content="Профессиональные услуги от IRBIS U.S.: таможенное оформление, внешнеэкономические консультации, логистика, 24/7 поддержка. Доставка и сопровождение контрактов по Узбекистану и миру." />
        <meta name="keywords" content="таможенное оформление, внешнеэкономическая деятельность, логистика, доставка грузов, ЕЭИС ВО, ТН ВЭД, Узбекистан, IRBIS U.S." />
        <meta property="og:title" content="Наши услуги — IRBIS U.S." />
        <meta property="og:description" content="Таможенное оформление, логистика, внешнеэкономические консультации и 24/7 поддержка от экспертов IRBIS U.S." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/our-services" />
        <meta property="og:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Наши услуги — IRBIS U.S." />
        <meta name="twitter:description" content="Комплексные услуги по таможенной очистке, логистике и сопровождению внешнеэкономической деятельности." />
        <meta name="twitter:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
      </Helmet>

      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-gray-800">
            Наши Услуги
          </h1>

          {/* Excellence in Service */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-12 md:mb-20">
            <div className="md:w-1/2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 border-b border-blue-200 pb-3 sm:pb-4">
                Превосходство в обслуживании
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Наш набор услуг разработан таким образом, чтобы удовлетворить ваши разнообразные потребности. 
                От персонализированных решений до профессиональной поддержки, мы стремимся к предоставлению 
                превосходства в каждой услуге, которую предлагаем.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { icon: Scale, title: "Индивидуальные консультации", text: "Пользуйтесь персонализированными консультациями, которые учитывают ваши уникальные потребности, предоставляя стратегические идеи и решения." },
                { icon: Clock, title: "24/7 поддержка клиентов", text: "Наслаждайтесь спокойствием с нашей круглосуточной поддержкой клиентов, гарантирующей помощь в любое время, день и ночь." },
                { icon: BarChart3, title: "Эффективное управление", text: "Наши экспертные услуги по управлению проектами обеспечивают эффективное выполнение задач, при котором соблюдаются сроки и обеспечивается высокое качество работы." }
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className="flex flex-col items-start bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0E3074]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-12 md:mb-16">
            {/* Service Card */}
            {[
              {
                icon: FileText,
                title: "Консультация",
                points: [
                  "подборка оптимального код ТН ВЭД",
                  "помощь в получении заключений от компетентных организаций, при необходимости.",
                  "определение таможенной стоимости, ставок и расчёт всех обязательных платежей.",
                  "информация по возможности получения льгот при таможенной очистке."
                ]
              },
              {
                icon: Globe,
                title: "Сопровождение внешнеэкономических контрактов в части поставки товаров",
                points: [
                  "переговоры с поставщиком, также иностранным покупателем.",
                  "выбор оптимальной логистической схемы INCOTERMS",
                  "контроль над исполнением сделки, также таможенного оформления данного груза",
                  "регистрация внешнеторговых контрактов в Единой электронной информационной системе внешнеторговых операций (ЕЭИС ВО)"
                ]
              },
              {
                icon: FileText,
                title: "Полный комплекс услуг по таможенной очистке",
                points: [
                  "полная таможенная очистка товаров на различных постах по всей стране",
                  "обеспечение процесса досмотра, отбора проб и образцов товаров на таможенных складах с присутствием инспектора и сертификационных органов.",
                  "составление инвойсов, упаковочных листов и других документов для груза (при экспорте)",
                  "получение соответствующих сертификатов, также иных разрешительных документов для товаров",
                  "обеспечение транспортировки ваших грузов до таможенных или собственных складов."
                ]
              },
              {
                icon: Truck,
                title: "Логистические услуги",
                points: [
                  "организация перевозки груза из Республики Узбекистан в любую точку Мира, а также перевозка из любых точке в Республику Узбекистан."
                ]
              }
            ].map((service, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center mr-3 sm:mr-4 border border-blue-100">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3074]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-2 sm:line-clamp-none">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}