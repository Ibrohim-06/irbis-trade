import React from 'react'
import { Header, Hero, Options, Section5, Section6, Section7, Take } from '../modules/HomePage'
import { Helmet } from 'react-helmet'
import DashboardLayout from '../layout'

const Home = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <meta name="description" content="Эксперты в области таможенной очистки грузов с 2014 года" />
        <meta property="og:title" content='ЧП "IRBIS US"' />
        <meta property="og:description" content="Эксперты в области таможенной очистки грузов с 2014 года" />
        <meta property="og:image" content="https://pub-5d689109f9c54618b392443e150975a9.r2.dev/websiteassets/irbis_logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <Hero />
      <Options />
      <Take />
      <Section5 />
      <Section6 />
      <Section7 />
    </DashboardLayout>
  )
}

export default Home