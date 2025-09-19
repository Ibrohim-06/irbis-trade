import axios from "axios";
import { useEffect, useState } from "react";

const getProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(`https://irbis-trade.uz/api/products`).then((res) =>
      setData(res.data.products)
    );
  }, []);
  return data;
};

export default getProducts;
