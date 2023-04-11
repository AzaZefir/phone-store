import React from 'react';
import phoneSvg from './../../assets/images/phone.svg';
import likeSvg from './../../assets/images/like.svg';
import cartSvg from './../../assets/images/cart.svg';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.svg';
import { Select } from '../common/select/Select';

export const Header = () => {
  return (
    <header className="menu container">
      <div className="menu_time">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Select 
        selectType={phoneSvg} 
        text="Выбрать модель телефона" />
      </div>
      <div className="menu_top">
        <Link to="/favorites">
          <img src={likeSvg} alt="" />
        </Link>
        <Link to="/cart">
          <img src={cartSvg} alt="" />
        </Link>
      </div>
    </header>
  );
};
