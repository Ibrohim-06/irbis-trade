import React from "react";
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { PATH } from "../hooks/PATH";
const { Meta } = Card;
const ReusebleCard = ({ item, isBtn, imgClass, extraClass }) => {
  const navigate = useNavigate();
  return (  
    <Card
      className={`!rounded-[20px] !outline-none  ${extraClass}`}
      type="inner"
      hoverable
      style={{ width: 250 }}
      cover={
        <img
          className={`${imgClass} untouchable`}
          alt="example"
          src={item.img_url}
        />
      }
    >
      <Meta
        className="p-[10px] text-center"
        title={item.title}
        description={item.description}
      />
      {isBtn && (
        <Button
          onClick={() => navigate(PATH.contact)}
          classNames={"!mt-[10px]"}
          size="large"
          type="primary"
          className="text-[13px] !bg-[#0E3074] font-bolder"
        >
          Узнать больше{" "}
        </Button>
      )}
    </Card>
  );
};
export default ReusebleCard;
