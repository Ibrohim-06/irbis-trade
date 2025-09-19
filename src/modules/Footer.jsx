import React from 'react'
import { MapPin, Phone, ExternalLink, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">ЧП "IRBIS U.S."</h3>
            <p className="text-gray-300 text-sm mb-4">
              Профессиональные услуги в сфере таможенного оформления и внешнеэкономической деятельности
            </p>
            <div className="flex space-x-3 mt-6">
              <a 
                href="https://www.instagram.com/irbis_us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/105728056/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Контактная информация</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <MapPin className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Ташкентская область, Зангиатинский район, таможенный пост Аркбулак, офис 206
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <a href="tel:+998934057755" className="text-gray-300 hover:text-white transition-colors">
                  +998 93 405 77 55
                </a>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                <a href="tel:+998975417755" className="text-gray-300 hover:text-white transition-colors">
                  +998 97 541 77 55
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Наше расположение</h3>
            <div className="h-[150px] rounded-lg overflow-hidden relative">
              <iframe 
                src="https://yandex.uz/map-widget/v1/?ll=69.139946%2C41.220672&utm_source=share&z=16" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Карта расположения офиса"
                className="absolute inset-0"
              ></iframe>
            </div>
            <a 
              href="https://yandex.uz/maps/-/CHb6VY~F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-300 hover:text-blue-200 mt-2"
            >
              <span>Открыть карту</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ЧП "IRBIS U.S.". ИНН: 303010254 <br /> Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
