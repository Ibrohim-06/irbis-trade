import { Modal, Button } from 'antd'
import React, { useState } from 'react'
import postContact from '../service/postContact'
import { useAppContext } from '../context/context'
import toast, { Toaster } from 'react-hot-toast'

const HeaderModal = ({ open, setOpen }) => {
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")
    const [contact, setContact] = useState("")
    const { loading, setLoading, setModalVisible } = useAppContext();

    const handleModalDataSent = () => {
        if (!username || !contact || !message) {
            toast.error("Пожалуйста, заполните все поля!")
            return
        }

        const body = {
            client_name: username,
            clinet_phone_number: `+${contact}`,
            message
        }

        postContact("/feedBackCall", body, setLoading, setModalVisible)

        // Reset form
        setUsername("")
        setContact("")
        setMessage("")
        setOpen(false)
    }

    return (
        <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
        >
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-xl font-semibold text-gray-800">Оставьте заявку</h2>

                <div className="w-full flex flex-col gap-4">
                    <label className="flex flex-col text-sm text-gray-700">
                        Имя
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            type="text"
                            placeholder="Введите имя"
                        />
                    </label>

                    <label className="flex flex-col text-sm relative text-gray-700">
                        Контактный телефон
                        <span className='absolute top-[32px] left-[7px]'>+</span>
                        <input
                            onFocus={() => setContact(998)}
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                            className="mt-1 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            type="number"
                            placeholder="998(__) ___-__-__"
                        />
                    </label>

                    <label className="flex flex-col text-sm text-gray-700">
                        Наш какой продукт/услуга вас интересует?
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            type="text"
                            placeholder="Опишите товар"
                        />
                    </label>
                </div>

                <Button
                    loading={loading}
                    type="primary"
                    className="w-full bg-blue-500 hover:bg-blue-600 transition-all"
                    onClick={handleModalDataSent}
                >
                    Отправить заявку
                </Button>
            </div>
        </Modal>
    )
}

export default HeaderModal