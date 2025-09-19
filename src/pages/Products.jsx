import React from 'react'
import getProducts from '../service/getProducts'
import ReusebleCard from '../components/ReusebleCard'
import DashboardLayout from '../layout'

const Products = () => {
  const data = getProducts()

  return (
    <DashboardLayout>
      <section className='containers !pt-[30px] !pb-[100px] flex flex-wrap items-center gap-[20px]'>
        <h2 className='w-full text-center font-black text-black text-[28px] mb-8'>Наши продукты</h2>
        {data?.map((item, index) => (
          <ReusebleCard key={index} extraClass="!p-[0]" imgClass="!rounded-t-[20px]" item={item} isBtn={false} />
        ))}
      </section>
    </DashboardLayout>
  )
}

export default Products