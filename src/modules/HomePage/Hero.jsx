import React from 'react'

const Hero = () => {
    return (
        <section className="py-[75px]">
            <div className="containers">
                <h2 className="font-extrabold md:text-[34px] md:leading-[50px] text-center uppercase text-black">
                    С НАМИ <span className="uppercase text-[#00bfff]">ВЫ СМОЖЕТЕ БОЛЬШЕ</span>
                </h2>
                <div className="max-w-[1200px] mx-auto text-center">
                    <p className="md:text-[21px] leading-[30px] mt-[30px]">
                        <strong className='capitalize'>IRBIS CUSTOMS BROKER</strong>
                        — уникальная для Узбекского и СНГ рынка компания, реализующая концепцию комплексного подхода к таможенному оформлению и ВЭД.
                    </p>
                    <p className="text-[21px] leading-[30px] mt-[40px]">
                        Благодаря этому <strong>вы сэкономите как минимум 20% временных и материальных ресурсов.</strong>
                    </p>
                    <ul className="flex items-center justify-center flex-wrap mt-[40px] gap-[30px]">
                        <li className="w-[269px]">
                            <h3 className="text-[#00bfff] text-[42px] font-bold">27 лет</h3>
                            <p className="font-bold text-[16px]">безупречной репутации на рынке</p>
                        </li>
                        <li className="w-[269px]">
                            <h3 className="text-[#00bfff] text-[42px] font-bold">от 3 БРВ</h3>
                            <p className="font-bold text-[16px]">Консултатсия ВЭД</p>
                        </li>
                        <li className="w-[269px]">
                            <h3 className="text-[#00bfff] text-[42px] font-bold">до 15 БРВ</h3>
                            <p className="font-bold text-[16px]">оформление ГТД</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero