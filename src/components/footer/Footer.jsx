import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container1">
        <div className="footer_content">
          <div className="footer_item">
            <img
              className="footer_item-img"
              src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
              alt="item1"
            />
            <span style={{ fontSize: "13px" }}>Quick Delivery</span>
          </div>
        </div>

        <div className="footer_content">
          <div className="footer_item">
            <img
              className="footer_item-img"
              src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
              alt="item2"
            />
            <span style={{ fontSize: "13px" }}>Easy Returns</span>
          </div>
        </div>

        <div className="footer_content-alt">
          <div className="footer_item">
            <img
              className="footer_item-img"
              src="https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"
              alt="item3"
            />
            <span style={{ fontSize: "13px" }}>Quality Assured</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer_container2">
        <div className="footer_content2">
          <div className="footer_item2">
            <Accordion className="footer_accordion" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      KNOW US
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li className="footer_li">About E-CARRY</li>
                    <li className="footer_li">Blog</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <div className="footer_item2-con">
              <p style={{ marginBottom: "24px" }}>KNOW US</p>
              <ul>
                <li className="footer_li">About E-CARRY</li>
                <li className="footer_li">Blog</li>
              </ul>
            </div>

            <hr className="footer_hr" />
          </div>

          <div className="footer_item2">
            <Accordion className="footer_accordion" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      HELPDESK
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li className="footer_li">Terms of use</li>
                    <li className="footer_li">Warranty Policy</li>
                    <li className="footer_li">Shipping Policy</li>
                    <li className="footer_li">Cancellation Policy</li>
                    <li className="footer_li">Return & exchange Policy</li>
                    <li className="footer_li">Privacy & Security Policy</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <div className="footer_item2-con">
              <p style={{ marginBottom: "24px" }}>HELPDESK</p>
              <ul>
                <li className="footer_li">Terms of use</li>
                <li className="footer_li">Warranty Policy</li>
                <li className="footer_li">Shipping Policy</li>
                <li className="footer_li">Cancellation Policy</li>
                <li className="footer_li">Return & exchange Policy</li>
                <li className="footer_li">Privacy & Security Policy</li>
              </ul>
            </div>

            <hr className="footer_hr" />
          </div>

          <div className="footer_item2">
            <Accordion className="footer_accordion" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      NETWORK
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li className="footer_li">Contact Us</li>
                    <li className="footer_li">Corporate Gifting</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <div className="footer_item2-con">
              <p style={{ marginBottom: "24px" }}>NETWORK</p>
              <ul>
                <li className="footer_li">Contact Us</li>
                <li className="footer_li">Corporate Gifting</li>
              </ul>
            </div>

            <hr className="footer_hr" />
          </div>
        </div>

        <div className="footer_content3">
          <div className="footer_social">
            <span className="footer_social-title">FOLLOW US ON</span>
            <div className="footer_social-link">
              <Link
                style={{ marginRight: "9px" }}
                to="https://www.instagram.com/dailyobjects_official/">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://images.dailyobjects.com/marche/icons/social/instagram.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"
                  alt="insta"
                />
              </Link>

              <Link
                style={{ marginRight: "9px" }}
                to="https://www.facebook.com/DailyObjects">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://images.dailyobjects.com/marche/icons/social/facebook.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"
                  alt="facebook"
                />
              </Link>

              <Link
                style={{ marginRight: "9px" }}
                to="https://www.youtube.com/channel/UC2gfsXOz3Nyn1vKyRpzlHhQ">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://images.dailyobjects.com/marche/icons/social/youtube.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"
                  alt="youtube"
                />
              </Link>

              <Link
                style={{ marginRight: "9px" }}
                to="https://twitter.com/Daily_Objects">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://images.dailyobjects.com/marche/icons/social/twitter.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"
                  alt="twitter"
                />
              </Link>

              <Link to="https://www.pinterest.com/dailyobjects/">
                <img
                  style={{ width: "36px", height: "36px", cursor: "pointer" }}
                  src="https://images.dailyobjects.com/marche/icons/social/pinterest.svg?tr=cm-pad_resize,v-2,w-36,h-36,dpr-1"
                  alt="pinterest"
                />
              </Link>
            </div>
          </div>

          <hr />

          <div className="footer_download">
            <span className="footer_app-title">DOWNLOAD OUR APP</span>
            <div className="footer_app-link">
              <img
                style={{
                  width: "118px",
                  height: "38px",
                  cursor: "pointer",
                  marginRight: "25px",
                }}
                src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"
                alt="playstore"
              />
              <img
                style={{ width: "118px", height: "38px", cursor: "pointer" }}
                src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"
                alt="applestore"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer_container3">
        <div className="footer_payment-div">
          <span className="footer_payment">100% SECURE PAYMENT</span>
        </div>

        <div className="footer_partner">
          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="amex"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="maestro"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="mastercard"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="mobikwik"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="paytm"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="rupay"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="upi"
              />
            </picture>
          </div>

          <div className="footer_partner-div">
            <picture className="footer_partner-img">
              <img
                style={{ width: "100%" }}
                src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,w-82,dpr-1"
                alt="visa"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="footer_end">
        &#169; 2012 - 2022 Firki Wholesale Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
