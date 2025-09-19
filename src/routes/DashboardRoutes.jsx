import React from 'react'
import {About_us, Contact, Home, News, Partnership, Products, ServicesPage} from "../pages"
import {PATH} from "../hooks/PATH"
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
const dashboardRoutesList = [
  {
    id:1,
    element: <Home/>,
    path: PATH.home,
    
  },
  {
    id:2,
    element: <About_us/>,
    path: PATH.about,
  },
  {
    id:3,
    element: <ServicesPage/>,
    path: PATH.services,
  },
  {
    id:4,
    element: <Partnership/>,
    path: PATH.partnership,
  },
  {
    id:5,
    element: <Products/>,
    path: PATH.products,
  },
  {
    id:6,
    element: <News/>,
    path: PATH.news,
  },
  {
    id:7,
    element: <Contact/>,
    path: PATH.contact,
  },
  {
    id:8,
    element: <NotFoundPage/>,
    path: PATH.notFound,
  },

]

const DashboardRoutes = () => {
  return (
      <Routes>
        {dashboardRoutesList.map(item=>(
          <Route key={item.id} path={item.path} element={item.element}/>
        ))}
      </Routes>
  )
}

export default DashboardRoutes