import React from "react";
import "../Navbar/MiddleNavbar.css";
import "./DesignerPage.css";

function PageView(props) {
  const { view, colourNumber } = props;
  return (
    <>
      <div className="designerPage__view">
        <div className="m-designerShare__Container">
          <button
            className="m-designerShare__Btn removeDefaultBtnStyling"
            onclick="openOptionDialog('#socialMediaShareModal');cancelEvent(event);"
          >
            <img
              className="m-designerShare_Icon"
              src="https://images.tshirtstudio.com/designer/tools/share-icon.svg"
              alt="ShareIcon"
            />
            &nbsp;Share
          </button>
        </div>
        <div className="designerPage__previewSection">
          <div id="preview" className="zoomIn">
            <div
              id="loading"
              className="loadingInDiv"
              style={{"display": "none"}}
            ></div>
            <div id="preview-wrapper">
              <img
                id="preview-Img"
                width="581"
                height="581"
                title=" Hoodie  Printing Preview "
                alt="Custom  Hoodies Preview"
                //src="/hoodies-image/front/225.jpeg"
                src={`/hoodies-image/${view}/${colourNumber}.jpeg`}
                className="zoom"
                style={{"margin-top":"-0%"}}
              />
            </div>
            <div
              className="designerPage__previewWrapperClick designerPage__previewWrapperClick--flexEnd"
              onclick="openToolsDialog('#tools');cancelEvent(event)"
            ></div>
            <div id="mobilePrintSide" className="mDesignerPage__previewButtons">
              <button
                className="mDesignerPage__chevron"
                onclick="changeDT(54); return false"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <span>‹</span>
              </button>
              <button
                className="mDesignerPage__chevron"
                onclick="changeDT(54); return false"
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <span>›</span>
              </button>
            </div>
          </div>
        </div>
        <button
          id="designBtn"
          className="mDesignerPagePreview__button"
          onclick="openToolsDialog('#tools');cancelEvent(event)"
        >
          <span className="rotateClockwise">
            Start Designing Now<span className="universalArrow">→</span>
          </span>
        </button>
        <div id="views"></div>
        <div className="designerPage__productDescription">
          <div className="productDescription__tabsRow">
            <a
              className="productDescription__tab"
              href="/#"
              onclick="changeProductDescriptionTab('description', this)"
            >
              <span className="productDescription__tab--Height">
                Description
              </span>
            </a>
            <a
              href="/#"
              className="productDescription__tab"
              onclick="changeProductDescriptionTab('sizeGuide', this)"
            >
              <span className="productDescription__tab--Height">
                Size Guide{" "}
              </span>
            </a>
            <a
              href="/#"
              className="productDescription__tab productDescription__tabOn"
              onclick="changeProductDescriptionTab('bulkDiscount', this)"
            >
              <span className="productDescription__tab--Height">
                Bulk Discount
              </span>
            </a>
          </div>
          <div id="description" className="productDescription__content">
            <div className="productText">
              <div className="productInformation productDescription__RightMargin">
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
                <button
                  onclick="changeDescriptionImage('Previous')"
                  className="productImage__detailImageArrow productImage__detailImageArrow--left"
                >
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
                <button
                  onclick="changeDescriptionImage('Next')"
                  className="productImage__detailImageArrow productImage__detailImageArrow--right"
                >
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
          <div id="sizeGuide" className="productDescription__content">
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
          <div
            id="bulkDiscount"
            className="productDescription__content productDescription__content--show"
          >
            <table className="designerProductDiscount">
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
    </>
  );
}

export default PageView;
