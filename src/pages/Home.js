import React from "react";

import './Home.css'

function Home() {
  return (
    <>
      <div id="carousel__wrapper">
        <input
          type="hidden"
          id="carousel-data"
          data-intervalduration="5000"
          data-transitionduration="5000"
          data-restrictcycle="true"
          data-interval-id="332"
        />
        <div
          id="carousel__content"
          class="carousel__content"
          style={{backgroundColor: "rgb(126, 196, 6)", transitionDuration: "2000ms"}}
        >
          <div id="carousel__background">
            <div
              class="carousel__background-text"
              style={{color: "rgb(146, 196, 63)", opacity: "1", "transitionDuration": "2000ms"}}
            >
              Quality for kids
            </div>
            <div
              class="carousel__background-text"
              style={{color: "rgb(146, 196, 63)", opacity: "0", transitionDuration: "2000ms"}}
            >
              Top T-Shirts
            </div>
          </div>
          <div id="carousel__content-small">
            <div
              class="carousel__subtext-container"
              style={{opacity: "1", zIndex: "101", transitionDuration: "2000ms"}}
            >
              <div class="carousel__subtext-group">
                <span class="carousel__subtext-small">Quality for kids</span>
                <div class="carousel__subtext-html carousel__subtext-html-large">
                  Personalise kids clothing &amp; make a difference
                </div>
              </div>
              <div class="carousel__subtext-mobile">
                FIND THE PERFECT GIFT →
              </div>
              <a href="/kids" class="carousel__subtext-btn upperCase">
                <span>FIND THE PERFECT GIFT</span>
              </a>
            </div>
            <div
              class="carousel__subtext-container"
              style={{opacity: "0", zIndex: "100", transitionDuration: "2000ms", left: "-100%"}}
            >
              <div class="carousel__subtext-group">
                <small class="carousel__subtext-small">Top T-Shirts</small>
                <div class="carousel__subtext-html carousel__subtext-html-large">
                  Custom T-Shirts with flair - design yours now
                </div>
              </div>
              <div class="carousel__subtext-mobile">
                FIND THE PERFECT GIFT →
              </div>
              <a
                href="/t-shirt-printing"
                class="carousel__subtext-btn upperCase"
              >
                <span>FIND THE PERFECT GIFT</span>
              </a>
            </div>
          </div>
          <div
            id="carousel__content-large"
            style={{transitionDuration: "2000ms"}}
          >
            <input
              type="hidden"
              id="carousel-default-values"
              data-layout-type=""
              data-background-text=""
              data-background-color="#FFF"
              data-background-text-color="rgb(0, 0, 0)"
              data-subtext-html-large=""
              data-subtext-link="#"
              data-subtext-small=""
              data-subtext-btn="BROWSE →"
              data-subtext-btn-color="#6219FF"
              data-subtext-mobile=""
              data-corner-label=""
              data-corner-label-color=""
            />
            <picture>
              <source
                sizes="(max-width:768px) 100vw, 50vw"
                srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1500&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1500w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1300w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1000&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1000w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=950&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 950w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=900&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 900w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=700&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=650&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=520&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 520w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=470&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 470w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=400&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w"
                type="image/webp"
                alt="Top T-Shirts"
                title="Top T-Shirts"
              />
              <img
                sizes="(max-width:768px) 100vw, 50vw"
                type="image/png"
                alt="Top T-Shirts"
                title="Top T-Shirts"
                src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1"
                srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1500&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1500w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1300w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=1000&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1000w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=950&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 950w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=900&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 900w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=700&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 700w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=650&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 650w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=520&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 520w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=470&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 470w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=400&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 400w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=tshirt.png&amp;Wx=300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 300w"
                class="carousel__img"
                style={{transitionDuration: "2000ms", right: "-200%"}}
                data-background-text="Top T-Shirts"
                data-background-color="rgb(255, 92, 92)"
                data-background-text-color="rgb(255, 106, 106)"
                data-subtext-html-large="Custom T-Shirts with flair - design yours now"
                data-subtext-link="/t-shirt-printing"
                data-subtext-btn="FIND THE PERFECT GIFT"
                data-subtext-small="Top T-Shirts"
                data-subtext-mobile="FIND THE PERFECT GIFT →"
              />
            </picture>
            <picture>
              <source
                sizes="(max-width:768px) 100vw, 50vw"
                srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1500&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1500w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1300w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1000&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1000w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=950&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 950w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=900&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 900w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=700&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=650&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=520&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 520w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=470&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 470w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=400&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w"
                type="image/webp"
                alt="Quality for kids"
                title="Quality for kids"
              />
              <img
                sizes="(max-width:768px) 100vw, 50vw"
                type="image/png"
                alt="Quality for kids"
                title="Quality for kids"
                src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1"
                srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1500&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1500w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1300w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=1000&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1000w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=950&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 950w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=900&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 900w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=700&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 700w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=650&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 650w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=520&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 520w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=470&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 470w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=400&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 400w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=kids.png&amp;Wx=300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 300w"
                class="carousel__img carousel__img--active"
                style={{transitionDuration: "2000ms"}}
                data-background-text="Quality for kids"
                data-background-color="rgb(126, 196, 6)"
                data-background-text-color="rgb(146, 196, 63)"
                data-subtext-html-large="Personalise kids clothing &amp; make a difference"
                data-subtext-link="/kids"
                data-subtext-btn="FIND THE PERFECT GIFT"
                data-subtext-small="Quality for kids"
                data-subtext-mobile="FIND THE PERFECT GIFT →"
              />
            </picture>
            <picture>
              <source
                sizes="(max-width:768px) 100vw, 50vw"
                srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1500&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1500w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1300w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1000&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 1000w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=950&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 950w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=900&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 900w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=700&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 700w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=650&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 650w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=520&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 520w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=470&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 470w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=400&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 400w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=webp&amp;Language=1 300w"
                type="image/webp"
                alt="springtime"
                title="springtime"
              />
              <img
                sizes="(max-width:768px) 100vw, 50vw"
                type="image/png"
                alt="springtime"
                title="springtime"
                src="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1"
                srcset="https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1500&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1500w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1300w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=1000&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 1000w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=950&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 950w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=900&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 900w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=800&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 800w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=700&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 700w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=650&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 650w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=520&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 520w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=470&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 470w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=400&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 400w,               https://resize-image.tshirtstudio.com/ShowImage.aspx?Name=spring.png&amp;Wx=300&amp;Page=carousel&amp;Vr=96&amp;Hr=96&amp;Format=png&amp;Language=1 300w"
                class="carousel__img"
                style={{transitionDuration: "2000ms", right: "-200%"}}
                data-background-text="springtime"
                data-background-color="rgb(255, 210, 130)"
                data-background-text-color="rgb(251, 217, 151)"
                data-subtext-html-large="Personalise your special gift this springtime"
                data-subtext-link="/personalised-hoodies"
                data-subtext-btn="FIND THE PERFECT GIFT"
                data-subtext-small="springtime"
                data-subtext-mobile="FIND THE PERFECT GIFT →"
              />
            </picture>
          </div>
        </div>
        <div class="carousel__buttons">
          <button class="carousel__button" onclick="CycleImage(true)">
            <span class="universalArrow">←</span>
          </button>
          <button class="carousel__button" onclick="CycleImage(false)">
            <span class="universalArrow">→</span>
          </button>
        </div>
        <script id="scriptInitCarousel" type="text/javascript">
          ResetCarouselAutoplay();
        </script>
      </div>
    </>
  );
}

export default Home;
