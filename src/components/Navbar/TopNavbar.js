import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import "./base26-min.css";

function TopNavbar() {
  // const [topNavStyle, setTopNavStyle] = useState({
  //   display: "none",
  //   height: "66px",
  //   paddingTop: "0px",
  //   marginTop: "0px",
  //   paddingBottom: "0px",
  //   marginBottom: "0px",
  // });
  const [topNavStyle, setTopNavStyle] = useState();

  return (
    <>
      <div className="topNav gutters">
        <div className="mNav">
          <div
            className="overlay mNavOverlay"
            onClick="mMenuSlideCloseFromOverlay(event, true)"
            style={{ display: "none" }}
          ></div>
          <div className="mNav_ItemsContainer">
            <a
              href="/#"
              onClick="mMenuSlide(event,false); return false;"
              className="mNav--link"
            >
              <img
                src="https://images.tshirtstudio.com/general/bars.svg"
                alt="menu button"
                className="mNav__icons"
              />
            </a>
            <a href="/" className="mNav--link">
              <img
                src="https://images.tshirtstudio.com/general/TShirtStudioLogo.svg"
                alt="TShirt Studio Logo"
                className="topLogo"
              />
            </a>
            <a className="mNav--link basketWidget" href="/checkout">
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
                0
              </span>
            </a>
          </div>
          <div className="mMenu">
            <div className="mMenu__top">
              <a
                href="/#"
                className="mMenu--link mMenu__closebtn"
                onClick="mMenuSlide(event,true); return false"
              >
                <span>x</span>
              </a>
            </div>
            <div className="mToggleMenu__Container">
              <ul className="mToggleMenu">
                <li className="mToggleMenu__li">
                  <a
                    href="/#"
                    className="mToggleMenu--link"
                    onClick="mToggle(event, this); return false;"
                  >
                    <img
                      width="22px"
                      height="6px"
                      alt="collapsible chevron"
                      className="mMenuCollapsibleChevron mMenuCollapsibleChevron--menu"
                      src="https://images.tshirtstudio.com/general/whiteChevronDown.svg"
                    />
                    <span>Clothing</span>
                  </a>
                  <ul className="mToggleMenu__ul">
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/t-shirt-printing"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>T-Shirts</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-hoodies"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Hoodies</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-hats-and-caps"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Hats &amp; Caps</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a href="/womens" className="mToggleMenu__ul--link">
                        <span className="mMenuChevron">›</span>
                        <span>Womens</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a href="/mens" className="mToggleMenu__ul--link">
                        <span className="mMenuChevron">›</span>
                        <span>Mens</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a href="/kids" className="mToggleMenu__ul--link">
                        <span className="mMenuChevron">›</span>
                        <span>Kids</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-baby-clothes"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Baby Clothes</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-polo-shirts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Polo Shirts</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-accessories"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Accessories</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a href="/sportswear" className="mToggleMenu__ul--link">
                        <span className="mMenuChevron">›</span>
                        <span>Sportswear</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/fleeces-and-jackets"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Fleeces &amp; Jackets</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-workwear"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Workwear</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mToggleMenu__li">
                  <a
                    href="/#"
                    className="mToggleMenu--link"
                    onClick="mToggle(event, this); return false;"
                  >
                    <img
                      width="22px"
                      height="6px"
                      alt="collapsible chevron"
                      className="mMenuCollapsibleChevron mMenuCollapsibleChevron--menu"
                      src="https://images.tshirtstudio.com/general/whiteChevronDown.svg"
                    />
                    <span>Gifts</span>
                  </a>
                  <ul className="mToggleMenu__ul">
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Personalised Gifts</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-baby-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Baby Gifts</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-home-gifts/engraved-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Engraved Gifts</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-home-gifts/personalised-mugs"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Mugs</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-home-gifts/personalised-cushions"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Cushions</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-home-gifts/personalised-towels"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Towels</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-home-gifts/personalised-tableware"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Tableware</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-bags"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Bags</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-home-gifts/personalised-clocks-and-plaques"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Clocks &amp; Plaques</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/custom-personal-gifts/personalised-jigsaw-puzzles"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Jigsaw Puzzles</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/personalised-sports-accessories"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Sports Accessories</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/personalised-gifts/custom-personal-gifts/photo-keyrings"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Keyrings</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mToggleMenu__li">
                  <a
                    href="/#"
                    className="mToggleMenu--link"
                    onClick="mToggle(event, this); return false;"
                  >
                    <img
                      width="22px"
                      height="6px"
                      alt="collapsible chevron"
                      className="mMenuCollapsibleChevron mMenuCollapsibleChevron--menu"
                      src="https://images.tshirtstudio.com/general/whiteChevronDown.svg"
                    />
                    <span>Collections</span>
                  </a>
                  <ul className="mToggleMenu__ul">
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/halloween"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Halloween</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/christmas-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Christmas</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/valentines-day-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Valentines Day</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/mothers-day-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Mothers Day</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/stag-and-hen-party"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Stag &amp; Hen Party</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/secret-santa"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Secret Santa</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/ski-wear"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Ski Wear</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/fathers-day-gifts"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Fathers Day</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/birthday"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Birthday</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/holiday"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Holidays</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/weddings"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Weddings</span>
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/occasions/anniversary"
                        className="mToggleMenu__ul--link"
                      >
                        <span className="mMenuChevron">›</span>
                        <span>Anniversary</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mToggleMenu__li">
                  <a
                    href="/#"
                    className="mToggleMenu--link"
                    onClick="mToggle(event, this); return false;"
                  >
                    <img
                      width="22px"
                      height="6px"
                      alt="collapsible chevron"
                      className="mMenuCollapsibleChevron mMenuCollapsibleChevron--menu"
                      src="https://images.tshirtstudio.com/general/whiteChevronDown.svg"
                    />
                    GBP (£)
                  </a>
                  <ul className="mToggleMenu__ul">
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/#"
                        className="mToggleMenu__ul--link"
                        onClick="currencyChange(1);return false"
                      >
                        <span className="mMenuChevron">›</span>
                        GBP (£)
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/#"
                        className="mToggleMenu__ul--link"
                        onClick="currencyChange(2);return false"
                      >
                        <span className="mMenuChevron">›</span>
                        EUR (€)
                      </a>
                    </li>
                    <li className="mToggleMenu__subItems">
                      <a
                        href="/#"
                        className="mToggleMenu__ul--link"
                        onClick="currencyChange(3);return false"
                      >
                        <span className="mMenuChevron">›</span>
                        USD ($)
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mToggleMenu__li">
                  <a className="mToggleMenu--link" href="/myaccount/register">
                    Join
                  </a>
                </li>
                <li className="mToggleMenu__li">
                  <a className="mToggleMenu--link" href="/myaccount/signin">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
            <div className="mMenu_ImagesContainer">
              <a className="mMenu__ImageLink" href="/t-shirt-printing">
                <picture>
                  <source
                    sizes="(max-width:950px) 320px, 1px"
                    data-srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 5w"
                    type="image/webp"
                    alt="T-Shirt Printing"
                    title="T-Shirt Printing"
                    srcSet="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 5w"
                  />
                  <img
                    width="16"
                    height="9"
                    sizes="(max-width:950px) 320px, 1px"
                    className="mMenu__ImageLink--Size ls-is-cached lazyloaded"
                    src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    data-src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    data-srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 5w"
                    type="image/jpg"
                    alt="T-Shirt Printing"
                    title="T-Shirt Printing"
                    srcSet="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 5w"
                  />
                </picture>
                <span className="imgLinkText blue">
                  <span className="rotateClockwise">T-Shirt Printing</span>
                </span>
              </a>
              <a className="mMenu__ImageLink" href="/personalised-hoodies">
                <picture>
                  <source
                    sizes="(max-width:950px) 320px, 1px"
                    data-srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 5w"
                    type="image/webp"
                    alt="Hoodie"
                    title="Hoodie"
                    srcSet="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 5w"
                  />
                  <img
                    width="16"
                    height="9"
                    sizes="(max-width:950px) 320px, 1px"
                    className="mMenu__ImageLink--Size ls-is-cached lazyloaded"
                    src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    data-src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1"
                    data-srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 5w"
                    type="image/jpg"
                    alt="Hoodie"
                    title="Hoodie"
                    srcSet="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=800&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 800w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=750&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 750w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=700&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 700w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=650&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 650w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=600&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 600w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=550&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 550w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=500&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 500w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=450&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 450w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=400&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 400w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=350&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 350w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=320&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 320w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=300&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 300w,                         https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=hoodie.jpg&amp;Wx=5&amp;Page=megamenu&amp;Vr=96&amp;Hr=96&amp;Format=jpg&amp;Language=1 5w"
                  />
                </picture>
                <span className="imgLinkText pink">
                  <span className="rotateClockwise">Hoodies</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <ul className="topNav__menu">
          <li className="topNav__menuSocialItem">
            <a
              className="topNav__menuSocialItem--link"
              href="https://www.instagram.com/TShirtStudioCom"
            >
              <img
                src="https://images.tshirtstudio.com/general/instagram_black.svg"
                alt="instagram-icon"
                className="icon-properties"
              />
            </a>
          </li>
          <li className="topNav__menuSocialItem">
            <a
              className="topNav__menuSocialItem--link"
              href="https://twitter.com/tshirtstudio?lang=en"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.tshirtstudio.com/general/twitter_black.svg"
                alt="twitter-icon"
                className="icon-properties"
              />
            </a>
          </li>
          <li className="topNav__menuSocialItem">
            <a
              className="topNav__menuSocialItem--link"
              href="https://www.facebook.com/TShirtStudioCom"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.tshirtstudio.com/general/facebook_black.svg"
                alt="facebook-icon"
                className="icon-properties"
                rel="noopener noreferrer"
              />
            </a>
          </li>
        </ul>
        <ul className="topNav__menu">
          <li className="topNav__menuItem">
            <a className="topNav__menuItem--link" href="../blogs.html">
              Blogs
            </a>
          </li>
          <li className="topNav__menuItem">
            <a className="topNav__menuItem--link" href="../help.html">
              Help
            </a>
          </li>
          <li className="topNav__menuItem">
            <a
              className="topNav__menuItem--link"
              href="../help/the-t-shirt-studio-story.html"
            >
              About Us
            </a>
          </li>
          <li className="topNav__menuItem">
            <a
              className="topNav__menuItem--link"
              href="../help/contact-us.html"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <ul className="topNav__menu">
          <li
            className="topNav__menuItem topNav__menuItem--currencyWidth"
            onMouseOver={() => {
              setTopNavStyle("GBP");
            }}
            onMouseLeave={() => {
              setTopNavStyle();
            }}
          >
            <a
              href="/#"
              className="topNav__menuItem--link topNav__menuItem--currencyWidth"
              // onClick={(e) => {
              //   e.preventDefault();
              //   currencyChange();
              // }}
              onClick={(e) => {
                e.preventDefault();
                // this.props.onClick(e);
                return false;
              }}
            >
              GBP (£)
            </a>
            <ul
              className="topNav__dropDown topNav__dropDown--currencyWidth"
              style={{
                // display: "none",
                // height: "99px",
                paddingTop: "0px",
                marginTop: "0px",
                paddingBottom: "0px",
                marginBottom: "0px",
              }}
            >
              {topNavStyle === "GBP" && (
                <>
                  <li className="topNav__dropDownItem topNav__dropDownItem--currencyWidth">
                    <a
                      href="/#"
                      className="topNav__dropDownItem--link topNav__dropDownItem--currencyWidth"
                      onClick={(e) => {
                        e.preventDefault();
                        // currencyChange(1);
                        // this.props.onClick(e);
                        return false;
                      }}
                    >
                      GBP (£)
                    </a>
                  </li>
                  <li className="topNav__dropDownItem topNav__dropDownItem--currencyWidth">
                    <a
                      href="/#"
                      className="topNav__dropDownItem--link topNav__dropDownItem--currencyWidth"
                      onClick={(e) => {
                        e.preventDefault();
                        // currencyChange(1);
                        // this.props.onClick(e);
                        return false;
                      }}
                    >
                      EUR (€)
                    </a>
                  </li>
                  <li className="topNav__dropDownItem topNav__dropDownItem--currencyWidth">
                    <a
                      href="/#;"
                      className="topNav__dropDownItem--link topNav__dropDownItem--currencyWidth"
                      onClick={(e) => {
                        e.preventDefault();
                        // currencyChange(1);
                        // this.props.onClick(e);
                        return false;
                      }}
                    >
                      USD ($)
                    </a>
                  </li>
                </>
              )}
            </ul>
          </li>
          <li className="topNav__menuItem topNav__menuItem--accountWidth">
            <Link
              to="#"
              className="topNav__menuItem--link"
              onClick={(e) => {
                e.preventDefault();
                return false;
              }}
              onMouseOver={() => {
                setTopNavStyle("Account");
              }}
              onMouseLeave={() => {
                setTopNavStyle();
              }}
            >
              Account
            </Link>

            {topNavStyle === "Account" && (
              <ul
                className="topNav__dropDown"
                style={{
                  // display: "none",
                  // height: "66px",
                  paddingTop: "0px",
                  marginTop: "0px",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                }}
              >
                <li className="topNav__dropDownItem">
                  <Link to="/join" className="topNav__dropDownItem--link">
                    Join
                  </Link>
                </li>
                <li className="topNav__dropDownItem">
                  <Link to="/sign-in" className="topNav__dropDownItem--link">
                    Sign In
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopNavbar;
