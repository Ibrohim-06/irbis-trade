import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Form, Input, Button, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import postContact from '../service/postContact';
import LoadingModal from '../components/LoadingModal';
import { Helmet } from 'react-helmet';
import DashboardLayout from '../layout';

const { Title } = Typography;
const { TextArea } = Input;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = (body) => {
    const phoneNumber = form.getFieldValue("clinet_phone_number");
    const formattedPhoneNumber = `+${phoneNumber}`;
    body.clinet_phone_number = formattedPhoneNumber;

    postContact("/feedBackCall", body, setLoading, setModalVisible);  // Use the updated postContact function
    form.resetFields();  // Reset form fields after submission
  };

  const handleCloseModal = () => {
    setModalVisible(false);  // Close the modal when button is clicked
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>Связаться с IRBIS U.S. — Таможенное оформление и ВЭД</title>
        <meta name="description" content="Свяжитесь с IRBIS U.S. по вопросам таможенного оформления и внешнеэкономической деятельности. Наш адрес, телефоны, email и форма обратной связи." />
        <meta name="keywords" content="контакты IRBIS, таможенное оформление, ВЭД, Аркбулак, Зангиата, телефон IRBIS, email IRBIS, IRBIS U.S. Узбекистан" />
        <meta property="og:title" content="Свяжитесь с IRBIS U.S." />
        <meta property="og:description" content="Контактная информация, адрес, телефоны и форма связи с IRBIS U.S. — вашим надёжным партнёром в области ВЭД." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://irbis-trade.uz/contacts" />
        <meta property="og:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Свяжитесь с IRBIS U.S." />
        <meta name="twitter:description" content="Контакты и форма связи с IRBIS U.S. — консультации по ВЭД и таможенному оформлению." />
        <meta name="twitter:image" content="https://storage.cloupard.uz/irbisuz/irbis_logo.png" />
      </Helmet>
      <div className="max-w-6xl mx-auto p-4 md:p-8" data-aos="fade-up">
        <LoadingModal setVisible={setModalVisible} visible={modalVisible} message="Данные успешно отправлены!" onClose={handleCloseModal} />
        <Title level={2} className="mb-6" data-aos="fade-down">
          Свяжитесь с нами
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <Card data-aos="fade-up">
            <Title level={4}>Контактная информация</Title>

            <div className="space-y-4 mt-4">
              <div className="flex items-start">
                <EnvironmentOutlined className="text-gray-500 text-lg mt-1 mr-3" />
                <div>
                  <p className="font-medium">Адрес:</p>
                  <p className="text-gray-500">Ташкентская область, Зангиатинский район, таможенный пост Аркбулак, офис 206</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneOutlined className="text-gray-500 text-lg mt-1 mr-3" />
                <div className='flex flex-col'>
                  <p className="font-medium">Телефон:</p>
                  <a href="tel:+998934057755" className="!text-[#0E3074] flex items-center gap-1 hover:text-white transition-colors">
                     <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                      </p>
                    <PhoneOutlined/> 
                    <span className='inline-block ml-1'>+998 93 405 77 55</span>
                  </a>
                  <a href="tel:+998975417755" className="!text-[#0E3074] flex items-center gap-1 hover:text-white transition-colors">
                     <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                      </p>
                    <PhoneOutlined/> 
                    <span className='inline-block ml-1'>+998 97 541 77 55</span>
                  </a>
                  <a href="tel:+998909707771" className="!text-[#0E3074] flex items-center gap-1 text-[14px] hover:text-white transition-colors">
                    <p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                      </p>
                    <WhatsAppOutlined/> 
                    <span className='inline-block ml-[2px]'>+998 90 970 77 71</span> 
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MailOutlined className="text-gray-500 text-lg mt-1 mr-3" />
                <div>
                  <p className="font-medium ">Электронная почта:</p>
                  <a className='!text-[#0E3074]' href="mailto:info@irbis-trade.uz" target="_blank">info@irbis-trade.uz</a>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-medium mb-2">Мы в соцсетях:</p>
                <div className="flex space-x-2">
                  <Button
                  className='!text-white !bg-[#0E3074]'
                    icon={<InstagramOutlined />}
                    href="https://www.instagram.com/irbis_us/"
                    target="_blank"
                    shape="circle"
                  />
                  <Button
                  className='!text-white !bg-[#0E3074]'
                    icon={<LinkedinOutlined />}
                    href="https://www.linkedin.com/company/105728056/admin/dashboard/"
                    target="_blank"
                    shape="circle"
                  />
                  <Button
                  className='!text-white !bg-[#0E3074]'
                    icon={<WhatsAppOutlined />}
                    href="https://wa.me/message/RD6TM4O2SG65I1"
                    target="_blank"
                    shape="circle"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Форма обратной связи */}
          <Card data-aos="fade-up">
            <Title level={4}>Отправьте нам сообщение</Title>
            <Form form={form} layout="vertical" onFinish={onFinish} className="mt-4 relative">
              <span className='absolute top-[121px] z-50 left-[11px]'>+</span>
              <Form.Item name="client_name" label="Имя" rules={[{ required: true, message: "Пожалуйста, введите ваше имя" }]}>
                <Input className=' hover:!border-[#0E3074] focus:!border-[#0E3074]' placeholder="Ваше имя" />
              </Form.Item>

              <Form.Item name="clinet_phone_number" label="Номер телефона" rules={[{ required: true, message: "Пожалуйста, введите номер телефона" }]}>
                <Input
                  type="number"
                  className='!px-[20px] hover:!border-[#0E3074] focus:!border-[#0E3074]'
                  onFocus={() => {
                    const current = form.getFieldValue("clinet_phone_number");
                    if (!current) {
                      form.setFieldsValue({ clinet_phone_number: 998 });
                    }
                  }}
                  maxLength={12}
                  placeholder=" 998(__) ___-__-__"
                />
              </Form.Item>

              <Form.Item name="message" label="Сообщение" rules={[{ required: true, message: "Пожалуйста, введите сообщение" }]}>
                <TextArea className=' hover:!border-[#0E3074] focus:!border-[#0E3074]' placeholder="Ваше сообщение" rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full !bg-[#0E3074]" loading={loading} disabled={loading}>
                  Отправить сообщение
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>

        {/* Карта */}
        <div className="mt-10 h-[400px] w-full rounded bg-gray-100 flex items-center justify-center text-gray-500" data-aos="fade-up">
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3000.9422951872534!2d69.13865207605132!3d41.22302797132128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzIyLjkiTiA2OcKwMDgnMjguNCJF!5e0!3m2!1sru!2s!4v1735909602268!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Contact;