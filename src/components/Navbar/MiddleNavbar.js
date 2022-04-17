import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

// import { useCartContext } from "../../context/cart";

import "./MiddleNavbar.css";

function MiddleNavbar() {
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: "GET",
      url: "http://localhost:3100/api/v1/cart",
      withCredentials: true,
    }).then((response) => {
      setCartLength(response.data.data.cartLength);
    });
  }, [cartLength]);

  return (
    <>
      <div className="middleNav gutters">
        <Link to="/">
          <img
            src="https://images.tshirtstudio.com/general/TShirtStudioLogo.svg"
            alt="TShirt Studio Logo"
            className="topLogo"
          />
        </Link>
        <li className="topMiddleMenu__item">
          <a
            className="topMiddleMenu__link"
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            Clothing
          </a>
        </li>
        <li className="topMiddleMenu__item">
          <a
            className="topMiddleMenu__link"
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            Gifts
          </a>
        </li>
        <li className="topMiddleMenu__item">
          <a
            className="topMiddleMenu__link"
            href="/#"
            onClick={(e) => {
              e.preventDefault();
              return false;
            }}
          >
            Collections
          </a>
        </li>

        <NavLink to="/checkout" className="basketWidget">
          <img
            src="https://images.tshirtstudio.com/general/shopping-cart2.svg"
            alt="basket Icon"
            className="basketWidget__icon"
            xmlns="http://www.w3.org/1999/xhtml"
          />
          <span
            className="basketWidget__itemcount"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            {cartLength}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default MiddleNavbar;
