import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cart";

import "../Navbar/MiddleNavbar.css";
import "./DesignerPage.css";

function ProductInfo(props) {
  const { colourNumber, setColourNumber } = props;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    const itemQunatity = quantity === 0 ? 1 : setQuantity(quantity - 1);
    return itemQunatity;
  };

  const addToCartHandler = (e) => {
    e.preventDefault();

    const imgQuery = document.getElementById(`colour${colourNumber}`);
    const color = imgQuery ? imgQuery.title : "no title";

    const select = document.getElementById("sizeOption");
    const size = select
      ? [select.options[select.selectedIndex].text, select.value]
      : ["", ""];

    const name = "Hoodie";
    const price = "$20";
    const backImage = `/hoodies-image/back/${colourNumber}.jpeg`;
    const frontImage = `/hoodies-image/back/${colourNumber}.jpeg`;
    
    axios.defaults.withCredentials = true;
    axios({
      method: "POST",
      url: "http://localhost:3100/api/v1/cart",
      data: {
        name: name,
        price: price,
        color: color,
        size: size,
        backImage: backImage,
        frontImage: frontImage,
        quantity: quantity,
      },
    })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <div className="designerPage__productInfo">
        <h1 className="designerPage__title">Design Your Own Hoodies</h1>
        <div id="prices" className="designerProductPrice">
          <span
            itemprop="offers"
            itemscope=""
            itemtype="http://schema.org/Offer"
            xmlns="http://www.w3.org/1999/xhtml"
          ></span>
          <span
            className="designerProductPrice__price"
            itemprop="price"
            content="20.0000"
          >
            £20.00
          </span>
          <span>per unit</span>
          {/* <meta itemprop="priceCurrency" content="GBP"></meta> */}
          {/* <meta
            itemprop="itemCondition"
            itemtype="http://schema.org/OfferItemCondition"
            content="http://schema.org/NewCondition"
          ></meta> */}
          {/* <link
            itemprop="availability"
            content="InStock"
            href="http://schema.org/InStock"
          >
            <span
              className="designerProductPrice__price"
              itemprop="price"
              content="20.0000"
            >
              £20.00
            </span>
            <span>per unit</span>
          </link> */}
        </div>
        <div className="designPageReview" />
        <picture>
          <source
            srcset="https://images.tshirtstudio.com/general/5-stars.webp"
            type="image/webp"
          />
          <img
            width="108"
            height="20"
            src="https://images.tshirtstudio.com/general/5-stars.png"
          />
        </picture>{" "}
        rated <span>4.8</span>
        <span>(2493 reviews)</span>
        <div id="colours" className="designerProductInfo">
          <div
            className="designerProductInfo__title"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            colours
          </div>
          <div
            id="colourTools"
            className="designerProductInfo__content"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => {
                setColourNumber("209");
              }}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID209"
                  name="availableColourID"
                  value="209"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/white.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/white.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/white.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/white.png"
                  />
                  <img
                    id="colour209"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/white.png"
                    height="30"
                    width="39"
                    alt="White"
                    title=" White "
                    src="https://images.tshirtstudio.com/designer/product/colour/white.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("6")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID6"
                  name="availableColourID"
                  value="6"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/ash.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/ash.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/ash.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/ash.png"
                  />
                  <img
                    id="colour6"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/ash.png"
                    height="30"
                    width="39"
                    alt="Ash"
                    title=" Ash "
                    src="https://images.tshirtstudio.com/designer/product/colour/ash.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("155")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID155"
                  name="availableColourID"
                  value="155"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/baby-pink.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/baby-pink.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/baby-pink.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/baby-pink.png"
                  />
                  <img
                    id="colour155"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/baby-pink.png"
                    height="30"
                    width="39"
                    alt="Baby Pink"
                    title=" Baby Pink "
                    src="https://images.tshirtstudio.com/designer/product/colour/baby-pink.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("51")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID51"
                  name="availableColourID"
                  value="51"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/heather.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/heather.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/heather.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/heather.png"
                  />
                  <img
                    id="colour51"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/heather.png"
                    height="30"
                    width="39"
                    alt="Heather"
                    title=" Heather "
                    src="https://images.tshirtstudio.com/designer/product/colour/heather.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("45")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID45"
                  name="availableColourID"
                  value="45"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/kelly.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/kelly.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/kelly.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/kelly.png"
                  />
                  <img
                    id="colour45"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/kelly.png"
                    height="30"
                    width="39"
                    alt="Kelly"
                    title=" Kelly "
                    src="https://images.tshirtstudio.com/designer/product/colour/kelly.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("45")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID244"
                  name="availableColourID"
                  value="244"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/hawaiian-blue.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/hawaiian-blue.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/hawaiian-blue.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/hawaiian-blue.png"
                  />
                  <img
                    id="colour244"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/hawaiian-blue.png"
                    height="30"
                    width="39"
                    alt="Hawaiian Blue"
                    title=" Hawaiian Blue "
                    src="https://images.tshirtstudio.com/designer/product/colour/hawaiian-blue.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("243")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID243"
                  name="availableColourID"
                  value="243"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/candyfloss.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/candyfloss.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/candyfloss.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/candyfloss.png"
                  />
                  <img
                    id="colour243"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/candyfloss.png"
                    height="30"
                    width="39"
                    alt="Candyfloss"
                    title=" Candyfloss "
                    src="https://images.tshirtstudio.com/designer/product/colour/candyfloss.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("247")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID247"
                  name="availableColourID"
                  value="247"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/tropical-blue.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/tropical-blue.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/tropical-blue.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/tropical-blue.png"
                  />
                  <img
                    id="colour247"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/tropical-blue.png"
                    height="30"
                    width="39"
                    alt="Tropical Blue"
                    title=" Tropical Blue "
                    src="https://images.tshirtstudio.com/designer/product/colour/tropical-blue.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("248")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID248"
                  name="availableColourID"
                  value="248"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/jade.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/jade.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/jade.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/jade.png"
                  />
                  <img
                    id="colour248"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/jade.png"
                    height="30"
                    width="39"
                    alt="Jade"
                    title=" Jade "
                    src="https://images.tshirtstudio.com/designer/product/colour/jade.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("249")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID249"
                  name="availableColourID"
                  value="249"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/turquoise-surf.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/turquoise-surf.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/turquoise-surf.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/turquoise-surf.png"
                  />
                  <img
                    id="colour249"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/turquoise-surf.png"
                    height="30"
                    width="39"
                    alt="Turquoise Surf"
                    title=" Turquoise Surf "
                    src="https://images.tshirtstudio.com/designer/product/colour/turquoise-surf.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("46")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID46"
                  name="availableColourID"
                  value="46"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/plum.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/plum.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/plum.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/plum.png"
                  />
                  <img
                    id="colour46"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/plum.png"
                    height="30"
                    width="39"
                    alt="Plum"
                    title=" Plum "
                    src="https://images.tshirtstudio.com/designer/product/colour/plum.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("47")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID47"
                  name="availableColourID"
                  value="47"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/chilli.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/chilli.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/chilli.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/chilli.png"
                  />
                  <img
                    id="colour47"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/chilli.png"
                    height="30"
                    width="39"
                    alt="Chilli"
                    title=" Chilli "
                    src="https://images.tshirtstudio.com/designer/product/colour/chilli.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("79")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID79"
                  name="availableColourID"
                  value="79"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/lime.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/lime.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/lime.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/lime.png"
                  />
                  <img
                    id="colour79"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/lime.png"
                    height="30"
                    width="39"
                    alt="Lime"
                    title=" Lime "
                    src="https://images.tshirtstudio.com/designer/product/colour/lime.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("156")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID156"
                  name="availableColourID"
                  value="156"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/fire-red.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/fire-red.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/fire-red.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/fire-red.png"
                  />
                  <img
                    id="colour156"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/fire-red.png"
                    height="30"
                    width="39"
                    alt="Fire Red"
                    title=" Fire Red "
                    src="https://images.tshirtstudio.com/designer/product/colour/fire-red.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("158")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID158"
                  name="availableColourID"
                  value="158"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/burnt-orange.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/burnt-orange.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/burnt-orange.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/burnt-orange.png"
                  />
                  <img
                    id="colour158"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/burnt-orange.png"
                    height="30"
                    width="39"
                    alt="Burnt Orange"
                    title=" Burnt Orange "
                    src="https://images.tshirtstudio.com/designer/product/colour/burnt-orange.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("28")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID28"
                  name="availableColourID"
                  value="28"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/gold.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/gold.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/gold.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/gold.png"
                  />
                  <img
                    id="colour28"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/gold.png"
                    height="30"
                    width="39"
                    alt="Gold"
                    title=" Gold "
                    src="https://images.tshirtstudio.com/designer/product/colour/gold.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("36")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID36"
                  name="availableColourID"
                  value="36"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/airforce-blue.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/airforce-blue.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/airforce-blue.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/airforce-blue.png"
                  />
                  <img
                    id="colour36"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/airforce-blue.png"
                    height="30"
                    width="39"
                    alt="Airforce Blue"
                    title=" Airforce Blue "
                    src="https://images.tshirtstudio.com/designer/product/colour/airforce-blue.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("38")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID38"
                  name="availableColourID"
                  value="38"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/olive.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/olive.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/olive.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/olive.png"
                  />
                  <img
                    id="colour38"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/olive.png"
                    height="30"
                    width="39"
                    alt="Olive"
                    title=" Olive "
                    src="https://images.tshirtstudio.com/designer/product/colour/olive.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("43")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID43"
                  name="availableColourID"
                  value="43"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/charcoal.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/charcoal.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/charcoal.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/charcoal.png"
                  />
                  <img
                    id="colour43"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/charcoal.png"
                    height="30"
                    width="39"
                    alt="Charcoal"
                    title=" Charcoal "
                    src="https://images.tshirtstudio.com/designer/product/colour/charcoal.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("246")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID246"
                  name="availableColourID"
                  value="246"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/pinky-purple.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/pinky-purple.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/pinky-purple.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/pinky-purple.png"
                  />
                  <img
                    id="colour246"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/pinky-purple.png"
                    height="30"
                    width="39"
                    alt="Pinky Purple"
                    title=" Pinky Purple "
                    src="https://images.tshirtstudio.com/designer/product/colour/pinky-purple.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("48")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID48"
                  name="availableColourID"
                  value="48"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/sapphire.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/sapphire.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/sapphire.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/sapphire.png"
                  />
                  <img
                    id="colour48"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/sapphire.png"
                    height="30"
                    width="39"
                    alt="Sapphire"
                    title=" Sapphire "
                    src="https://images.tshirtstudio.com/designer/product/colour/sapphire.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("37")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID37"
                  name="availableColourID"
                  value="37"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/hot-pink.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/hot-pink.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/hot-pink.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/hot-pink.png"
                  />
                  <img
                    id="colour37"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/hot-pink.png"
                    height="30"
                    width="39"
                    alt="Hot Pink"
                    title=" Hot Pink "
                    src="https://images.tshirtstudio.com/designer/product/colour/hot-pink.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("245")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID245"
                  name="availableColourID"
                  value="245"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/oxford-navy.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/oxford-navy.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/oxford-navy.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/oxford-navy.png"
                  />
                  <img
                    id="colour245"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/oxford-navy.png"
                    height="30"
                    width="39"
                    alt="Oxford Navy"
                    title=" Oxford Navy "
                    src="https://images.tshirtstudio.com/designer/product/colour/oxford-navy.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("21")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID21"
                  name="availableColourID"
                  value="21"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/royal-blue.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/royal-blue.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/royal-blue.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/royal-blue.png"
                  />
                  <img
                    id="colour21"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/royal-blue.png"
                    height="30"
                    width="39"
                    alt="Royal Blue"
                    title=" Royal Blue "
                    src="https://images.tshirtstudio.com/designer/product/colour/royal-blue.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("211")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID211"
                  name="availableColourID"
                  value="211"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/navy.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/navy.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/navy.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/navy.png"
                  />
                  <img
                    id="colour211"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/navy.png"
                    height="30"
                    width="39"
                    alt="Navy"
                    title=" Navy "
                    src="https://images.tshirtstudio.com/designer/product/colour/navy.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("39")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID39"
                  name="availableColourID"
                  value="39"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/purple.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/purple.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/purple.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/purple.png"
                  />
                  <img
                    id="colour39"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/purple.png"
                    height="30"
                    width="39"
                    alt="Purple"
                    title=" Purple "
                    src="https://images.tshirtstudio.com/designer/product/colour/purple.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => {
                setColourNumber("225");
              }}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID225"
                  name="availableColourID"
                  value="225"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/chocolate.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/chocolate.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/chocolate.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/chocolate.png"
                  />
                  <img
                    id="colour225"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/chocolate.png"
                    height="30"
                    width="39"
                    alt="Chocolate"
                    title=" Chocolate "
                    src="https://images.tshirtstudio.com/designer/product/colour/chocolate.png"
                  />
                </picture>
              </a>
            </div>
            <div
              className="designerProductInfo__colourBackground"
              onClick={() => setColourNumber("4")}
            >
              <a href="#">
                <input
                  type="hidden"
                  id="availableColourID4"
                  name="availableColourID"
                  value="4"
                />
                <picture>
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/black.webp"
                    type="image/webp"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/black.webp"
                  />
                  <source
                    data-srcset="https://images.tshirtstudio.com/designer/product/colour/black.png"
                    type="image/png"
                    srcset="https://images.tshirtstudio.com/designer/product/colour/black.png"
                  />
                  <img
                    id="colour4"
                    className="designerProductInfo__colourImage lazyloaded"
                    data-src="https://images.tshirtstudio.com/designer/product/colour/black.png"
                    height="30"
                    width="39"
                    alt="Black"
                    title=" Black "
                    src="https://images.tshirtstudio.com/designer/product/colour/black.png"
                  />
                </picture>
              </a>
            </div>
            <input type="hidden" id="OOSColourID244" />
            <input type="hidden" id="OOSColourID248" />
            <input type="hidden" id="OOSColourID249" />
            <input type="hidden" id="OOSColourID46" />
            <input type="hidden" id="OOSColourID38" />
            <input type="hidden" id="OOSColourID245" />
            <input type="hidden" id="OOSColourID21" />
          </div>
        </div>
        <div className="designerProductInfo">
          <div className="designerProductInfo__title">Size and Quantity</div>
          <div className="designerProductInfo__content">
            <div id="sizes" className="designerProductInfo__size">
              <select
                id="sizeOption"
                name="sizeID"
                onchange="changeBuyBtnStatus();"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <option
                  id="inStock"
                  selected="1"
                  className="inStock"
                  value="148"
                >
                  XS
                </option>
                <option id="inStock" className="inStock" value="18">
                  S
                </option>
                <option id="inStock" className="inStock" value="35">
                  M
                </option>
                <option id="inStock" className="inStock" value="1">
                  L
                </option>
                <option id="inStock" className="inStock" value="33">
                  XL
                </option>
                <option id="inStock" className="inStock" value="34">
                  XXL
                </option>
              </select>
            </div>
            <div className="quantityContainer">
              <input type="hidden" id="previousValidQty" value="1" />
              <button
                type="button"
                className="quantity__IncrementButton"
                onClick={decreaseQuantity}
                disabled={!colourNumber}
              >
                -
              </button>
              <input
                id="quantity"
                className="quantity__Input"
                type="text"
                value={quantity ? quantity : 1}
                maxLength="3"
              />
              <button
                type="button"
                className="quantity__IncrementButton"
                onClick={increaseQuantity}
                disabled={!colourNumber}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="designerProductDiscount">
          <div className="designerProductDiscount__content">
            <table>
              <tbody>
                <tr>
                  <th className="designerProductDiscount__elements">
                    <strong>Qty</strong>
                  </th>
                  <input name="discountQualifier" type="hidden" value="5" />
                  <td className="designerProductDiscount__elements">5+</td>
                  <input name="discountQualifier" type="hidden" value="10" />
                  <td className="designerProductDiscount__elements">10+</td>
                  <input name="discountQualifier" type="hidden" value="15" />
                  <td className="designerProductDiscount__elements">15+</td>
                  <input name="discountQualifier" type="hidden" value="20" />
                  <td className="designerProductDiscount__elements">20+</td>
                </tr>
                <tr>
                  <th className="designerProductDiscount__elements">
                    <strong>Save</strong>
                  </th>
                  <input
                    name="discountPercentage"
                    type="hidden"
                    value="10.00"
                  />
                  <td className="designerProductDiscount__elements">10%</td>
                  <input
                    name="discountPercentage"
                    type="hidden"
                    value="15.00"
                  />
                  <td className="designerProductDiscount__elements">15%</td>
                  <input
                    name="discountPercentage"
                    type="hidden"
                    value="20.00"
                  />
                  <td className="designerProductDiscount__elements">20%</td>
                  <input
                    name="discountPercentage"
                    type="hidden"
                    value="25.00"
                  />
                  <td className="designerProductDiscount__elements">25%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="subtotal" className="designProductSubPrice">
          <strong
            className="designProductSubPrice__subtotal"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            Subtotal
          </strong>
          <div
            className="designProductSubPrice__price"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            £20.00
          </div>
        </div>
        <div id="buyDiv" className="designerProductBuySave">
          <button
            id="buybtn"
            className="designerPage__button"
            onClick={addToCartHandler}
            // onClick={async () => {
            //   // addToCart(colourNumber);
            //   addToCartHandler();
            // }}
          >
            <span className="rotateClockwise">Add to cart +</span>
          </button>
        </div>
        <div className="designerPage__socialMediaShare">
          <a href="#" className="designerPage__socialMediaShareLink">
            <img
              className="m-designerShare_Icon"
              src="https://images.tshirtstudio.com/designer/tools/share-icon-purple.svg"
              alt="ShareIcon"
            />
            &nbsp;Share{" "}
          </a>
        </div>
        <div className="mDesignerPage__productDescription">
          <a className="mProductDescription__collapsibles" href="#">
            <span>Description</span>
            <img
              width="1.69"
              height="1"
              src="https://images.tshirtstudio.com/general/pink-arrow-down-close.svg"
              alt="arrow style"
              className="mProductDescription__arrow"
            />
          </a>
          <div id="mDescription" className="mProductDescription__content">
            <div className="productText">
              {/* <a href="#" id="reviews"></a> */}
              <div className="productInformation">
                <p>
                  <span>
                    For personalised hoodie printing and embroidery, design your
                    own hoodies with text, images or our custom designs. Fast,
                    quality custom hoodie printing for unique personalised gifts
                  </span>
                </p>
                <p></p>
                <ul>
                  <li>80% Cotton, 20% Polyester</li>
                  <li>280gsm</li>
                  <li>Kangaroo pouch pocket</li>
                  <li>Drawcord double lined hood</li>
                  <li>Warm and fashionable</li>
                  <li>3-5XL in black, heather and navy only</li>
                  <li>
                    To fit chest: <b>XS</b> 34" <b>S</b> 36" <b>M</b> 40"{" "}
                    <b>L</b> 44" <b>XL</b> 48" <b>2XL</b> 52" <b>3XL</b> 56"{" "}
                    <b>4XL</b> 60" <b>5XL</b> 64"
                  </li>
                  <li>
                    WRAP certified product (Worldwide Responsible Accredited
                    Production)
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
            <div className="productImage">
              <div className="productImage__detailImageContainer">
                <button className="productImage__detailImageArrow productImage__detailImageArrow--left">
                  ‹
                </button>
                <picture>
                  <source
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 200w"
                    type="image/webp"
                    alt="Hoodie"
                    title="Hoodie"
                  />
                  <img
                    width="1"
                    height="1"
                    name="detailedDescriptionImage1"
                    className="productImage__detailImage productImage__detailImage--show"
                    alt="Hoodie"
                    title="Hoodie"
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    type="image/jpeg"
                    src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD1ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 200w"
                  />
                </picture>
                <picture>
                  <source
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 200w"
                    type="image/webp"
                    alt="Hoodie"
                    title="Hoodie"
                  />
                  <img
                    width="1"
                    height="1"
                    name="detailedDescriptionImage2"
                    alt="Hoodie"
                    title="Hoodie"
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    type="image/jpeg"
                    src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD2ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 200w"
                    className="productImage__detailImage productImage__detailImage--hide"
                  />
                </picture>
                <picture>
                  <source
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 200w"
                    type="image/webp"
                    alt="Hoodie"
                    title="Hoodie"
                  />
                  <img
                    width="1"
                    height="1"
                    name="detailedDescriptionImage3"
                    alt="Hoodie"
                    title="Hoodie"
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    type="image/jpeg"
                    src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD3ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 200w"
                    className="productImage__detailImage productImage__detailImage--hide"
                  />
                </picture>
                <picture>
                  <source
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 200w"
                    type="image/webp"
                    alt="Hoodie"
                    title="Hoodie"
                  />
                  <img
                    width="1"
                    height="1"
                    name="detailedDescriptionImage4"
                    alt="Hoodie"
                    title="Hoodie"
                    sizes="(max-width:375px) 61vw, (max-width:450px) 59vw, (max-width:768px) 42vw, (max-width:1200px) 21vw, 260px"
                    type="image/jpeg"
                    src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=750&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=700&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=650&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=600&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=550&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=500&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=450&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=400&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=350&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                            https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie-pictures/HOOD4ALL.jpg&amp;Wx=200&amp;Page=product&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 200w"
                    className="productImage__detailImage productImage__detailImage--hide"
                  />
                </picture>
                <button className="productImage__detailImageArrow productImage__detailImageArrow--right">
                  ›
                </button>
              </div>
              <div className="productImage__dotNavContainer">
                <span
                  name="detailedDescriptionDotNav1"
                  className="productImage__dotNav productImage__dotNav--Selected"
                ></span>
                <span
                  name="detailedDescriptionDotNav2"
                  className="productImage__dotNav"
                ></span>
                <span
                  name="detailedDescriptionDotNav3"
                  className="productImage__dotNav"
                ></span>
                <span
                  name="detailedDescriptionDotNav4"
                  className="productImage__dotNav"
                ></span>
              </div>
            </div>
          </div>
          <a href="#" className="mProductDescription__collapsibles">
            <span>Size Guide </span>
            <img
              width="1.69"
              height="1"
              src="https://images.tshirtstudio.com/general/pink-arrow-down-close.svg"
              alt="arrow style"
              className="mProductDescription__arrow"
            />
          </a>
          <div id="mSizeGuide" className="mProductDescription__content">
            Size Guide <small>(centimetres)</small>
            <br />
            <table className="sizeTable">
              <tbody>
                <tr>
                  <td rowspan="100">
                    <picture>
                      <source
                        srcset="https://images.tshirtstudio.com/designer/product/sizes/hoodie.png"
                        type="image/png"
                      />
                      <img
                        id="colour"
                        src="https://images.tshirtstudio.com/designer/product/size/hoodie.png"
                        height="140"
                      />
                    </picture>
                  </td>
                  <th className="sizeElement">Size</th>
                  <th className="sizeElement">L</th>
                  <th className="sizeElement">W</th>
                </tr>
                <tr>
                  <td className="sizeElement">XS</td>
                  <td className="sizeElement">64</td>
                  <td className="sizeElement">50</td>
                </tr>
                <tr>
                  <td className="sizeElement">S</td>
                  <td className="sizeElement">65</td>
                  <td className="sizeElement">51</td>
                </tr>
                <tr>
                  <td className="sizeElement">M</td>
                  <td className="sizeElement">67</td>
                  <td className="sizeElement">55</td>
                </tr>
                <tr>
                  <td className="sizeElement">L</td>
                  <td className="sizeElement">72</td>
                  <td className="sizeElement">60</td>
                </tr>
                <tr>
                  <td className="sizeElement">XL</td>
                  <td className="sizeElement">74</td>
                  <td className="sizeElement">63</td>
                </tr>
                <tr>
                  <td className="sizeElement">XXL</td>
                  <td className="sizeElement">76</td>
                  <td className="sizeElement">67</td>
                </tr>
                <tr>
                  <td className="sizeElement">XXXL</td>
                  <td className="sizeElement">82</td>
                  <td className="sizeElement">73</td>
                </tr>
                <tr>
                  <td className="sizeElement">XXXXL</td>
                  <td className="sizeElement">86</td>
                  <td className="sizeElement">79</td>
                </tr>
                <tr>
                  <td className="sizeElement">XXXXXL</td>
                  <td className="sizeElement">90</td>
                  <td className="sizeElement">83</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" className="mProductDescription__collapsibles">
            <span>Bulk Discount</span>
            <img
              width="1.69"
              height="1"
              src="https://images.tshirtstudio.com/general/pink-arrow-down-close.svg"
              alt="arrow style"
              className="mProductDescription__arrow"
            />
          </a>
          <div id="mBulkDiscount" className="mProductDescription__content">
            <div className="designerProductDiscount">
              <table>
                <tbody>
                  <tr>
                    <th className="designerProductDiscount__elements">
                      <strong>Qty</strong>
                    </th>
                    <td className="designerProductDiscount__elements">5+</td>
                    <td className="designerProductDiscount__elements">10+</td>
                    <td className="designerProductDiscount__elements">15+</td>
                    <td className="designerProductDiscount__elements">20+</td>
                  </tr>
                  <tr>
                    <th className="designerProductDiscount__elements">
                      <strong>Save</strong>
                    </th>
                    <td className="designerProductDiscount__elements">10%</td>
                    <td className="designerProductDiscount__elements">15%</td>
                    <td className="designerProductDiscount__elements">20%</td>
                    <td className="designerProductDiscount__elements">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
