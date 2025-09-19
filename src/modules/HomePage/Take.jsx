import React, { useState, useEffect } from 'react'
import postContact from '../../service/postContact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAppContext } from '../../context/context'
import { Toaster } from 'react-hot-toast'

const Take = () => {

    const { setLoading, setModalVisible } = useAppContext();
    const [message, setMessage] = useState("")
    const [username, setUserName] = useState("")
    const [contact, setContact] = useState()

    function handleFocus() {
        setContact(998)
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            client_name: username,
            clinet_phone_number: `+${contact}`,
            message
        }

        postContact("/feedBackCall", body, setLoading, setModalVisible)

        setMessage("")
        setUserName("")
        setContact("")

    }
    return (
        <section className="take-section bg-fixed py-[90px]">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="containers">
                <h2 data-aos="fade-up" className="text-[35px] text-white leading-[50px] font-bold text-center">
                    <span className="text-[#00bfff]">ПОЛУЧИТЕ СПЕЦТАРИФЫ</span> ДЛЯ РЕГУЛЯРНЫХ ПОСТАВОК
                </h2>
                <p className="text-[21px] text-white leading-[30px] font-normal text-center my-[30px]" data-aos="fade-up">
                    Предложение с максимальной выгодой <span className="font-bold">для долгосрочных партнеров и клиентов</span>
                </p>
                <form onSubmit={handleSubmit} className="flex items-end justify-center gap-5 flex-wrap pt-[50px]" data-aos="fade-up">
                    <label className="flex flex-col">
                        <span className="text-white font-extralight text-[12px]">Имя</span>
                        <input
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            className="bg-inherit text-white outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 max-w-[550px] p-2"
                            type="text"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-extralight text-[12px]">Контактный телефон</span>
                        <div>
                            <span className='mr-[-10px] text-white'>+</span>
                            <input
                                onFocus={handleFocus}
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                                className="bg-inherit text-white outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 max-w-[550px] p-3"
                                type="number"
                                placeholder="998(__) ___-__-__"
                            />
                        </div>
                    </label>

                    <label className="flex flex-col">
                        <span className="text-white font-extralight text-[12px]">Наш какой продукт/услуга вас интересует?</span>
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="bg-inherit text-white outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 max-w-[550px] p-2"
                            type="text"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white"
                    >
                        Получить тарифы
                    </button>
                </form>
                <p className="mt-[100px] text-white text-[15px] leading-[24px] text-center" data-aos="fade-up">
                    Нажимая на кнопку Вы соглашаетесь с политикой конфиденциальности и даете согласие на сбор и обработку Ваших персональных данных.
                </p>
            </div>
        </section>
    )
}

export default Take 