import React, { useState, useEffect } from 'react'
import postContact from '../../service/postContact'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAppContext } from '../../context/context'
import { Toaster } from 'react-hot-toast'

const Section6 = () => {
    const { setLoading, setModalVisible } = useAppContext();
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")
    const [contact, setContact] = useState("")

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
        setUsername("")
        setContact("")

    }
    return (
        <section className='py-[80px]'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="containers">
                <h2 className="text-[24px] md:text-[34px] text-center font-bold" data-aos="fade-up">
                    <span className="text-[#00bfff]">ОСТАЛИСЬ ВОПРОСЫ?</span> ЗАДАЙТЕ ИХ НАШИМ СПЕЦИАЛИСТАМ
                </h2>

                <div className="flex mt-[55px] items-start md:justify-evenly justify-center">
                    <img
                        className="hidden lg:block"
                        src="https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/app_images/call_center.svg"
                        alt={"call center"}
                        width={530}
                        height={600}
                        data-aos="fade-up"
                    />

                    <form onSubmit={handleSubmit} className="flex items-center w-[380px] flex-col justify-center gap-5 flex-wrap" data-aos="fade-up">
                        <h3 className="font-bold text-[21px] mb-[35px] text-center">
                            Мы дадим вам развернутый ответ в течение рабочего дня
                        </h3>

                        <label className="flex flex-col">
                            <span className="text-black font-light text-[12px]">Имя</span>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="bg-inherit text-black outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 w-[256px] md:w-[350px] p-2"
                                type="text"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-black font-light text-[12px]">Контактный телефон</span>
                            <div>
                                <span className='mr-[-6px]'>+</span>
                                <input
                                    onFocus={handleFocus}
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    required
                                    className="bg-inherit text-black outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-300 w-[256px] md:w-[350px] p-2"
                                    type="text"
                                    placeholder="998(__) ___-__-__"
                                />
                            </div>
                        </label>

                        <label className="flex flex-col">
                            <span className="text-black font-light text-[12px]">
                                Наш какой продукт/услуга вас интересует?
                            </span>
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="bg-inherit text-black outline-none border-b-[3px] border-b-slate-300 focus:border-b-[#00bfff] transition-all duration-400 w-[256px] md:w-[350px] p-2"
                                type="text"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-[256px] p-[14px] bg-[#00bfff] rounded-md skew-x-[-6deg] hover:skew-x-[6deg] transition-all duration-500 text-white"
                            data-aos="fade-up"
                        >
                            Получить тарифы
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Section6