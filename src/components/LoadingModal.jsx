import React from 'react';
import { Button, Modal, Spin } from 'antd';
import { Loading } from './Loading';

const LoadingModal = ({ visible, setVisible, message = "Загрузка...", onClose }) => {
  return (
    <Modal
      open={visible}
      footer={null}
      closable={false}
      centered
      maskClosable={false}
      onOk={onClose} // Close modal when button is clicked
    >
      <Loading/>
      <div className='text-center' style={{ marginTop: 16 }}>{message}</div>
    <Button onClick={()=>setVisible(false)} className='!text-white mt-[10px]'>Ок</Button>
    </Modal>
  );
};

export default LoadingModal;