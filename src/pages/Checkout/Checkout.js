import React from "react";
import { useCartContext } from "../../context/cart";

import "./Checkout.css";

function Checkout() {
  const {
    cartItems,
    addQuantity,
    subQuantity,
    total,
    removeFromCart,
  } = useCartContext();

  // const itemQuantity = cartItems.length === 0 ? null : cartItems.find(item => item.id === colourNumber).quantity;
  return (
    <>
      <div className="shoppingBasket gutters">
        <div
          id="Basket-Loading-Wheel"
          className="loadingInDiv"
          style={{ display: "none" }}
        ></div>
        <h1 className="shoppingBasket__title">Shopping Basket</h1>
        <div id="basketajax">
          <form
            action="basketajax.aspx"
            method="post"
            id="basketForm"
            className="shoppingBasket__content"
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <div className="shoppingBasket__items">
              <div className="shoppingBasket__header">
                <div className="shoppingBasket__headerTitle shoppingBasket__headerTitle--flex1">
                  Item
                </div>
                <div className="shoppingBasket__headerTitle shoppingBasket__headerTitle--flexhalf">
                  description
                </div>
                <div className="shoppingBasket__headerTitle shoppingBasket__headerTitle--flex1">
                  qty
                </div>
                <div className="shoppingBasket__headerTitle">price</div>
              </div>
              {cartItems.map((item, index) => (
                <div className="shoppingBasket__line">
                  <div className="shoppingBasket__thumbnails">
                    <span
                      id="itemThumb73920413"
                      className="thumb"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <img
                        id="itemThumb73920413Img"
                        src={item.frontImage}
                        width="100"
                        height="100"
                        alt="Hoodie thumbnail"
                        title=" Hoodie thumbnail "
                      />
                      <img
                        src={item.frontImage}
                        className="zoomImg"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          opacity: "0",
                          width: "350px",
                          height: "350px",
                          border: "none",
                          maxWidth: "none",
                          maxHeight: "none",
                          background: "rgb(255, 255, 255)",
                        }}
                      />
                    </span>
                    <span
                      id="itemThumb73920414"
                      className="thumb"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <img
                        id="itemThumb73920414Img"
                        src={item.backImage}
                        width="100"
                        height="100"
                        alt="Hoodie thumbnail"
                        title=" Hoodie thumbnail "
                      />
                      <img
                        src={item.backImage}
                        className="zoomImg"
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          opacity: "0",
                          width: "350px",
                          height: "350px",
                          border: "none",
                          maxWidth: "none",
                          maxHeight: "none",
                          background: "rgb(255, 255, 255)",
                        }}
                      />
                    </span>
                  </div>
                  <div className="shoppingBasket__lineInfo">
                    <div className="shoppingBasket__productInfo">
                      <div
                        id="itemName5282852"
                        className="shoppingBasket__productName shoppingBasket__productInfo--padding"
                        onClick="editText('itemName5282852',5282852);"
                      >
                        <strong>Hoodie</strong>
                        <small>
                          <a
                            href="javascript:void(0);"
                            onClick="editText('itemName5282852',5282852);return false"
                          >
                            (edit title)
                          </a>
                        </small>
                      </div>
                      <div className="shoppingBasket__productSizeColourQty">
                        <div className="shoppingBasket__productSizeColour">
                          <div
                            id="shoppingBasketSize"
                            className="shoppingBasket__productInfo--padding shoppingBasket__productInfo--margin"
                          >
                            Size:{" "}
                            <select
                              id="size5282852"
                              name="size5282852"
                              onChange="updateBasketItemSize(5282852);"
                            >
                              <option value="18">S</option>
                              <option value="35">M</option>
                              <option value="1">L</option>
                              <option value="33">XL</option>
                              <option value="148" defaultValue="">
                                XS
                              </option>
                              <option value="34">XXL</option>
                              <option value="155">XXXL</option>
                            </select>
                            <input
                              id="oldsize5282852"
                              type="hidden"
                              name="oldsize5282852"
                              value="148"
                            />
                          </div>
                          <div className="shoppingBasket__productInfo--padding">
                            Colour: {item.colour}
                          </div>
                        </div>
                        <div className="shoppingBasket__productQuantity">
                          <div className="shoppingBasket__quantityContainer">
                            <span className="quantity__Label">Quantity</span>
                            <div className="quantity__container">
                              <button
                                type="button"
                                className="quantity__IncrementButton"
                                onClick={() => subQuantity(item.id)}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                id="qty5282852"
                                name="qty5282852"
                                maxLength="3"
                                className="quantity__Input"
                                value={item.quantity}
                                onKeyDown="updateBasketItemQtyOnEnter(event, 5282852)"
                                onBlur="updateBasketItemQty(5282852)"
                              />
                              <button
                                type="button"
                                className="quantity__IncrementButton"
                                onClick={() => addQuantity(item.id)}
                              >
                                +
                              </button>
                              <input
                                id="oldqty5282852"
                                type="hidden"
                                name="oldqty5282852"
                                value="1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shoppingBasket__productInfoLinks shoppingBasket__productInfo--padding">
                        <a
                          href="javascript:void(0);"
                          className="shoppingBasket__link"
                          onClick="editItem('/personalised-hoodies/design-your-own-hoodie?DID=48137546');return false"
                        >
                          #
                        </a>
                        <a
                          href="javascript:void(0);"
                          className="shoppingBasket__link"
                          onClick="copyItem(5282852);return false"
                        >
                          copy
                        </a>
                      </div>
                    </div>
                    <div
                      id="price5282852"
                      className="shoppingBasket__productPrice"
                    >
                      <strong>£20.00</strong>
                      <a
                        className="shoppingBasket__removeBtn"
                        href="javascript:void(0);"
                        onClick={() => removeFromCart(item.id)}
                      >
                        X
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <script>LineIds.push(5282852);</script>
            </div>
            <div className="shoppingBasket__orderSummary">
              <a className="shoppingBasket__link" href="/">
                Continue Shopping
              </a>
              <h3 className="shoppingBasket__orderAmount--h3">Order Summary</h3>
              <div id="basketTotals" className="shoppingBasket__orderAmounts">
                <div className="shoppingBasket__totalAmount">
                  <strong>Total</strong>
                  <strong>£{total}</strong>
                </div>
              </div>
              <button
                type="submit"
                tabIndex="0"
                className="shoppingBasket__button"
                value="Checkout"
                onClick="checkout();return false"
              >
                <span className="rotateClockwise">Checkout</span>
                <img
                  src="https://images.tshirtstudio.com/general/lock.svg"
                  alt="lock-icon"
                  className="shoppingBasket__button--icon"
                />
              </button>
              <input type="hidden" id="basketPageLineID" name="BID" />
            </div>
          </form>
          <script xmlns="http://www.w3.org/1999/xhtml">addZoom();</script>
        </div>
      </div>
    </>
  );
}

export default Checkout;
