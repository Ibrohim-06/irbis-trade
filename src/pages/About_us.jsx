import React, { useEffect } from "react";
import {
  User,
  FileText,
  Gift,
  List,
  Smartphone,
  PhoneCall,
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import DashboardLayout from "../layout";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <DashboardLayout>
      <Helmet>
        <title>О нас | Таможенное оформление и логистика – ЧП "IRBIS U.S."</title>
        <meta name="description" content="ЧП 'IRBIS U.S.' — эксперты в таможенной очистке грузов с 2014 года. Полный спектр услуг: таможенное оформление, сертификация, логистика и консультации по ВЭД в Узбекистане." />
        <meta name="keywords" content="таможенное оформление, логистика Узбекистан, ВЭД, сертификация грузов, IRBIS U.S., таможенные услуги, экспедирование, внешнеэкономическая деятельность, оформление онлайн, Аркбулак" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="О нас | ЧП 'IRBIS U.S.' — Таможенное оформление и логистика" />
        <meta property="og:description" content="Профессиональные услуги по таможенной очистке, сертификации и логистике с 2014 года. Работаем по принципу 'под ключ' в Узбекистане." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/about-us" />
        <meta property="og:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ЧП 'IRBIS U.S.' — Таможенное оформление и логистика" />
        <meta name="twitter:description" content="Эксперты в сфере таможенных услуг, логистики и ВЭД в Узбекистане с 2014 года. Индивидуальный подход, онлайн-оформление, прозрачность на каждом этапе." />
        <meta name="twitter:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />

      </Helmet>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-bold tracking-tight mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ЧП "IRBIS U.S." - эксперты в области таможенной очистки грузов с 2014
            года
          </p>
        </div>

        {/* Company Story */}
        <div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">О компании</h2>
            <p className="text-gray-600 mb-4">
              ЧП "IRBIS U.S." создан в 2014 году.
            </p>
            <p className="text-gray-600 mb-4">
              Мы эксперты в области комплексной таможенной очистки грузов,
              пересекающих границу любым видом транспорта. Мы предлагаем полный
              пакет услуг, включая профессиональную консультацию по таможенному
              законодательству Республики Узбекистан, также таможенное оформление
              на любые режимы, помощь в получении всех необходимых сертификатов,
              организацию безопасной и быстрой доставки до пункта назначения,
              лицензированные транспортно-экспедиторские услуги.
            </p>
            <p className="text-gray-600">
              Все решения предоставляются как в индивидуальном формате, так и по
              принципу «под ключ», исходя из ваших потребностей.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000.9422951872534!2d69.13865207605132!3d41.22302797132128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzIyLjkiTiA2OcKwMDgnMjguNCJF!5e0!3m2!1sru!2s!4v1735909602268!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/*  Advantages Section */}
        <div
          className="mb-20 py-10 px-4 bg-gray-100 rounded-2xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card with gradient background */}
                <div className="bg-gradient-to-br from-[#0288d1] to-[#01579b] p-6 h-full flex flex-col items-center">
                  {/* Icon with pulsing animation on hover */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4caf50] to-[#388e3c] flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <advantage.icon
                      className="h-10 w-10 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text with better spacing */}
                  <p className="font-medium text-white text-center leading-tight tracking-wide">
                    {advantage.title}
                  </p>
                </div>

                {/* Subtle overlay effect on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Team Section */}
        <div className="mb-20" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <img
                    src={
                      member.image ||
                      `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(
                        member.name
                      )}`
                    }
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-12">Наши клиенты</h2>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            speed={3000} // long transition duration
            autoplay={{
              delay: 0, // no delay between transitions
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            allowTouchMove={false} // optional: disable manual swipe
            grabCursor={false}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={logo.image}
                    alt={logo.name || `Клиент ${index + 1}`}
                    className="h-16 object-contain untouchable"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </DashboardLayout>
  );
}

// Advantages data based on the provided image
const advantages = [
  {
    title: "Индивидуальный подход к каждому клиенту",
    icon: User,
  },
  {
    title:
      "Прозрачность работы: по желанию клиента отчет о проделанной работе на каждом ее этапе",
    icon: FileText,
  },
  {
    title: "Система лояльности для постоянных клиентов",
    icon: Gift,
  },
  {
    title: "Комплексный подход к оказанию услуг",
    icon: List,
  },
  {
    title: "Возможность оформления в режиме онлайн",
    icon: Smartphone,
  },
  {
    title: "Четкое консультирование опытными специалистами",
    icon: PhoneCall,
  },
];

// Team members data
const teamMembers = [
  {
    name: "Ахмедов Анвар",
    position: "Директор",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Абдуллавеа Роксана",
    position: "Специалист",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Рахманова Барно",
    position: "Специалист",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Зайиркулов Сухроб",
    position: "Специалист",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Пак Сергей",
    position: "Специалист",
    image: "/placeholder.svg?height=300&width=300",
  },
];

// Client logos placeholder
const clientLogos = [
  {
    image:
      "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/partner_logos/logo_novey.svg",
    name: "Novey",
  },
  {
    image:
      "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/partner_logos/logo_proterm.svg",
    name: "Protherm",
  },
  {
    image:
      "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/partner_logos/logo_tenzi.svg",
    name: "Tenzi",
  },
  {
    image:
      "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/partner_logos/logo_vileda.svg",
    name: "Vileda",
  },
  {
    image:
      "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/partner_logos/logo_yandex_go.svg",
    name: "Yandex Go",
  },
];
