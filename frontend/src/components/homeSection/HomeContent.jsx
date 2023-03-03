import React from "react";
import { Link } from "react-router-dom";
import "./homeContent.css";
import { Categories, Newarrivals } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const HomeContent = () => {
  return (
    <section className="home">
      <div className="home_container">
        <div className="home_offerBanner">
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1519,dpr-1"
            alt="banner1"
          />
        </div>

        <div>
          <div className="home_banner">
            <picture className="home_banner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/assets/images/other/backpack-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1"
                alt="banner2"
              />
            </picture>

            <Link>
              <div className="home_banner-heading">
                <div className="home_banner-headingItem">
                  <h1 className="banner_h1"></h1>
                </div>

                <div className="banner_div"></div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="home_caraosel">
            <div className="caraosel_heading">
              <h1 className="caraosel_heading-h1">SHOP CATEGORIES</h1>
              <p className="caraosel_heading-p">
                Now browse our selection of carefully curated products in sorted
                categories.
              </p>
            </div>

            <Swiper
              className="caraosel_swiper"
              slidesPerView={4}
              slidesPerGroup={4}
              spaceBetween={20}
              navigation={true}
              // breakpoints={{
              //   576: {
              //     slidesPerView: 2,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //     spaceBetween: 48,
              //   },
              // }}
              modules={[Navigation]}>
              {Categories.map(({ id, image, title }) => {
                return (
                  <SwiperSlide className="caraosel_swiperSlide" key={id}>
                    <img src={image} alt="T1" className="caraosel_slideImg" />
                    <h1
                      className="caraosel_slideTitle"
                      style={{ marginTop: "6px" }}>
                      {title}
                    </h1>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div>
          <div className="home_banner">
            <picture className="home_banner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1"
                alt="banner3"
              />
            </picture>

            <Link>
              <div className="home_banner-heading">
                <div className="home_banner-headingItem">
                  <h1 className="banner_h1"></h1>
                </div>

                <div className="banner_div"></div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="home_sCollections">
            <div className="sCollections_heading">
              <span className="sCollections_span">STUPID COLLECTIONS</span>
            </div>

            <div className="sCollections_div">
              <div className="sCollections_items">
                <picture>
                  <img
                    src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-475,dpr-1"
                    alt="banner4"
                    className="sCollections_item-img"
                  />
                </picture>
                <span className="sCollections_item-title">DREAMSPACE</span>
                <span className="sCollections_item-subtitle">
                  A vivid dream journal that lets you carry your daydreaming
                  stance into real life.
                </span>
                <span className="sCollections_button">Shop Now</span>
              </div>

              <div className="sCollections_items">
                <picture>
                  <img
                    src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-475,dpr-1"
                    alt="banner5"
                    className="sCollections_item-img"
                  />
                </picture>
                <span className="sCollections_item-title">ZODIAC</span>
                <span className="sCollections_item-subtitle">
                  Zodiac Collection reflects the unique personality of every
                  individual out there!
                </span>
                <span className="sCollections_button">Shop Now</span>
              </div>

              <div className="sCollections_items">
                <picture>
                  <img
                    src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-475,dpr-1"
                    alt="banner6"
                    className="sCollections_item-img"
                  />
                </picture>
                <span className="sCollections_item-title">PIXEL</span>
                <span className="sCollections_item-subtitle">
                  A reflection of modern pop-culture with a vintage appeal that
                  evokes nostalgia.
                </span>
                <span className="sCollections_button">Shop Now</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="home_banner">
            <picture className="home_banner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1"
                alt="banner7"
              />
            </picture>

            <Link>
              <div className="home_banner-heading">
                <div className="home_banner-headingItem">
                  <h1 className="banner_h1"></h1>
                </div>

                <div className="banner_div"></div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="home_caraosel">
            <div className="caraosel_heading">
              <h1 className="caraosel_heading-h1">NEW ARRIVALS</h1>
              <p className="caraosel_heading-p">
                Check out our newest launches.
              </p>
            </div>

            <Swiper
              className="caraosel_swiper"
              slidesPerView={4}
              slidesPerGroup={2}
              spaceBetween={20}
              navigation={true}
              // breakpoints={{
              //   576: {
              //     slidesPerView: 2,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //     spaceBetween: 48,
              //   },
              // }}
              modules={[Navigation]}>
              {Newarrivals.map(({ id, image, title, subtitle }) => {
                return (
                  <SwiperSlide className="caraosel_swiperSlide" key={id}>
                    <img src={image} alt="T1" className="caraosel_slideImg" />
                    <span className="caraosel_subtitle">{subtitle}</span>
                    <h1
                      className="caraosel_slideTitle"
                      style={{ marginTop: "6px" }}>
                      {title}
                    </h1>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div>
          <div className="home_twoBanner">
            <div className="twoBanner_div">
              <div className="twoBanner_item">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1"
                  alt="banner8"
                  className="twoBanner_img"
                />
                <span className="twoBanner_title">CHARGING SOLUTIONS</span>
                <span className="twoBanner_button">Shop Now</span>
              </div>

              <div className="twoBanner_item">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1"
                  alt="banner9"
                  className="twoBanner_img"
                />
                <span className="twoBanner_title">WORK ESSENTIALS</span>
                <span className="twoBanner_button">Shop Now</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="home_banner">
            <video loop muted autoPlay className="home_banner-video">
              <source
                src="https://ik.imagekit.io/dailyobjects/colllectionPage/recess-collection/recess-collection-banner-gif-final-desktop.mp4?tr=q-50,f-webm"
                type="video/webm"
              />
              <source
                src="https://ik.imagekit.io/dailyobjects/colllectionPage/recess-collection/recess-collection-banner-gif-final-desktop.mp4?tr=q-50"
                type="video/mp4"
              />
            </video>

            <Link>
              <div className="home_banner-heading">
                <div className="home_banner-headingItem">
                  <h1 className="banner_h1"></h1>
                </div>

                <div className="banner_div"></div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="home_banner">
            <picture className="home_banner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1"
                alt="banner10"
              />
            </picture>

            <Link>
              <div className="home_banner-heading">
                <div className="home_banner-headingItem">
                  <h1 className="banner_h1"></h1>
                </div>

                <div className="banner_div"></div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="home_banner">
            <picture className="home_banner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,w-1519,dpr-1"
                alt="banner11"
              />
            </picture>

            <Link>
              <div className="home_banner-heading">
                <div className="home_banner-headingItem">
                  <h1 className="banner_h1"></h1>
                </div>

                <div className="banner_div"></div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="home_story">
            <div className="story_item">
              <h1 className="story_title">OUR STORY</h1>
              <p className="story_desc">
                <br />
                Founded in 2020, E-CARRY is a design-obsessed lifestyle
                accessories brand committed to making your everyday carry
                #lessordinary.
                <br />
              </p>
              <p className="story_desc">
                <br />
                You can look forward to a carefully-crafted range of products,
                made from long-lasting materials, with designs that stand out
                and make your life easy. With E-CARRY, let your lifestyle
                reflect your sensibilities as you go on to make your every day
                #lessordinary.
                <br />
              </p>
              <span className="story_button">Read More</span>
            </div>

            <picture className="story_banner">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,w-958,dpr-1"
                alt="banner13"
                className="story_img"
              />
            </picture>
          </div>
        </div>

        <hr className="home_hr" />

        <footer className="home_footer">
          <div className="home_footerCont">
            <div className="footer_featured">
              <p className="featured_title">FEATURED IN</p>
              <div className="featured_div">
                <picture className="featured_items">
                  <img
                    src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1519,h-200,dpr-1"
                    alt="banner14"
                    className="featured_img"
                  />
                </picture>
              </div>
            </div>

            <hr className="home_hr" />

            <div className="footer_subscribe">
              <div className="subscribe_container">
                <span className="subscribe_title">
                  GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS
                </span>
                <div className="subscribe_form">
                  <div>
                    <div className="subscribe_div">
                      <div className="subscribe_item">
                        <input type="email" placeholder="Enter your email" />
                      </div>

                      <div className="subscribe_button">
                        <button className="subscribe_btn">SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default HomeContent;
