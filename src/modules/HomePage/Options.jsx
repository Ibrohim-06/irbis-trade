import React from 'react'
import { Scale, Clock, BarChart3, FileText, Truck, Globe, CheckCircle } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Options() {
  AOS.init({
    duration: 1000,  // You can change this value
    once: false,      // Animation happens only once
  });
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className='options-section'>
        <div className='containers !py-[70px]'>
          <h1 className="text-4xl font-bold text-center mb-20 text-white">Наши Услуги</h1>

          {/* Excellence in Service */}
          <div className="flex flex-col max-[1023px]:w-full lg:flex-row w-full max-[1023px]:items-center gap-16 mb-20">
            <div className="min-[1024px]:w-1/2 w-full">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-blue-200 pb-4">
                Превосходство в обслуживании
              </h2>
              <p className="text-white leading-relaxed">
                Наш набор услуг разработан таким образом, чтобы удовлетворить ваши разнообразные потребности. От
                персонализированных решений до профессиональной поддержки, мы стремимся к предоставлению превосходства в
                каждой услуге, которую предлагаем.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:w-full sm:grid-cols-2 gap-8">
              <div data-aos="fade-up"
                data-aos-duration="1000" className="flex flex-col items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                  <Scale className="w-7 h-7 text-[#0E3074]" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Индивидуальные консультации</h3>
                <p className="text-gray-600 text-sm">
                  Пользуйтесь персонализированными консультациями, которые учитывают ваши уникальные потребности,
                  предоставляя стратегические идеи и решения.
                </p>
              </div>
              <div data-aos="fade-up"
                data-aos-duration="1000" className="flex flex-col items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                  <Clock className="w-7 h-7 text-[#0E3074]" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">24/7 поддержка клиентов</h3>
                <p className="text-gray-600 text-sm">
                  Наслаждайтесь спокойствием с нашей круглосуточной поддержкой клиентов, гарантирующей помощь в любое
                  время, день и ночь.
                </p>
              </div>
              <div data-aos="fade-up"
                data-aos-duration="1000" className="flex flex-col items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                  <BarChart3 className="w-7 h-7 text-[#0E3074]" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Эффективное управление</h3>
                <p className="text-gray-600 text-sm">
                  Наши экспертные услуги по управлению проектами обеспечивают эффективное выполнение задач, при котором
                  соблюдаются сроки и обеспечивается высокое качество работы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}

      <div className="max-w-7xl !py-[70px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          {/* Consultation */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center mr-3 sm:mr-4 border border-blue-100">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3074]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                Консультация
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  подборка оптимального код ТН ВЭД
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  помощь в получении заключений от компетентных организаций, при необходимости.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  определение таможенной стоимости, ставок и расчёт всех обязательных платежей.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  информация по возможности получения льгот при таможенной очистке.
                </span>
              </li>
            </ul>
          </div>

          {/* Contract Support */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center mr-3 sm:mr-4 border border-blue-100">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3074]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                Сопровождение внешнеэкономических контрактов в части поставки товаров
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  переговоры с поставщиком, также иностранным покупателем.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  выбор оптимальной логистической схемы INCOTERMS
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  контроль над исполнением сделки, также таможенного оформления данного груза
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  регистрация внешнеторговых контрактов в Единой электронной информационной системе внешнеторговых операций (ЕЭИС ВО)
                </span>
              </li>
            </ul>
          </div>

          {/* Customs Clearance */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center mr-3 sm:mr-4 border border-blue-100">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3074]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                Полный комплекс услуг по таможенной очистке
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  полная таможенная очистка товаров на различных постах по всей стране
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  обеспечение процесса досмотра, отбора проб и образцов товаров на таможенных складах
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  составление инвойсов, упаковочных листов и других документов для груза (при экспорте)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  получение соответствующих сертификатов, также иных разрешительных документов
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  обеспечение транспортировки грузов до таможенных или собственных складов.
                </span>
              </li>
            </ul>
          </div>

          {/* Logistics */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start sm:items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center mr-3 sm:mr-4 border border-blue-100">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E3074]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                Логистические услуги
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E3074] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  организация перевозки груза из Республики Узбекистан в любую точку Мира, а также перевозка в Республику Узбекистан.
                </span>
              </li>
            </ul>
          </div>
        </div>    
      </div>
    </section>
  )
}

