import React from 'react';
import Footer from '../modules/Footer';
import Navbar from '../components/Navbar';
const DashboardLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default DashboardLayout;