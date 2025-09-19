import React from 'react'
import { Header, Hero, Options, Section5, Section6, Section7, Take } from '../modules/HomePage'
import { Helmet } from 'react-helmet'
import DashboardLayout from '../layout'

const Home = () => {
  return (
    <DashboardLayout>
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