import React, { useEffect, useState } from 'react';
import remove from '../../assets/icons/error.png';
import { useDispatch } from 'react-redux';
import { setProductId } from '../../redux/slices/productsSlice';
import { useMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteCart, setCount, setTotal } from '../../redux/slices/cartSlice';
const CartItem = ({ imgUrl, name, color, storage, price, id }) => {
  const dispatch = useDispatch();
  const [link, setLink] = useState('');
  let path = useMatch('*');
  // useEffect(() => {
  //   setLink(`${path.pathname}/${id}`);
  // }, []);

  const handleClick = () => {
    setLink(`${path.pathname}/${id}`);
    dispatch(setProductId(id));
    localStorage.setItem('productId', id);
  };

  const removeItem = (id) => {
    dispatch(deleteCart(id));
    dispatch(setTotal(-price));
    dispatch(setCount(-1));
  };
  console.log(link);
  return (
    <div>
      <div className="flex justify-between gap-3 items-center py-5 border-b-2 pb-5">
        <div className="w-[60px]">
          <img src={imgUrl} alt="image" />
        </div>
        <div className="text-[14px] w-[170px] ">
          {/* <Link to={link} onClick={() => handleClick()}> */}
          <p className="font-semibold">{name}</p>
          <p className="font-light">
            Цвет: <span>{color.name}</span>
          </p>
          <p className="font-light">
            Память: <span>{storage}</span>
          </p>
          {/* </Link> */}
        </div>
        <p className="w-[120px] font-light">{price} сом</p>
        <div className="w-[20px] cursor-pointer hover:opacity-50" onClick={() => removeItem(id)}>
          <img src={remove} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
