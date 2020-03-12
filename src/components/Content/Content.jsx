/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import mainPhoto from './photo1.jpg';
import phone from './icons/phone.png';
import email from './icons/email.png';
import telegram from './icons/telegram.png';
import home from './icons/home.png';
import './index.scss';

const Content = (props) => {

  return (
    <div class="cv">
      <div class="cv__grid-wrapper">
        <div class="cv__main-photo"></div>
        <div class="cv__main-info">
          <h2 class="cv__name">Presniakov <br /> Vladyslav</h2>
          <div class="cv__status">Frontend developer</div>
          <div class="cv__address">Kharkiv, Ukraine Lorem ipsum dolor sit 192/33</div>
        </div>
        <div class="cv__main-row">
          <div class="cv__profile-title">Professional <br />Profile</div>
          <div class="cv__profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        </div>
        <div class="cv__contacts-wrap">
						<h3>Contact</h3>
						<ul class="cv__contacts">
							<li class="cv__contactme"><div className="cv__text-contact"><span className="cv__contact-styles">Phone</span><br/> +38(099)11-77-5-77</div><div className="cv__icon-border cv__icon-border1"><img src={phone} alt="contact"></img></div></li>
							<li class="cv__contactme"><div className="cv__text-contact"><span className="cv__contact-styles">Email</span><br/>presnyakov.vladyslav@gmail.com</div><div className="cv__icon-border cv__icon-border2"><img src={email} alt="contact"></img></div></li>
							<li class="cv__contactme"><div className="cv__text-contact"><a className="cv__telegram-link" href="tg://resolve?domain=Vladyslav_dev"><span className="cv__contact-styles">Telegram</span><br/>Or write here</a></div><div className="cv__icon-border cv__icon-border3"><img src={telegram} alt="contact"></img></div></li>
							<li class="cv__contactme"><div className="cv__text-contact"><span className="cv__contact-styles">Address</span><br/>Kharkiv, Ukraine Lorem ipsum dolor sit 192/33</div><div className="cv__icon-border cv__icon-border4"><img src={home} alt="contact"></img></div></li>
						</ul>
					</div>
        <div class="cv__exp">
          <h3 class="cv__exp-pe-title">Professional experience</h3>
          <p class="cv__exp-pe-description">Six month of experience in frontend development (React/Redux/HTML/CSS/JS/WordPress)</p>
          <h3>Professional skillset</h3>
          <div class="cv__skilset">
            <p class="skill">HTML:
            <span class="item">
                HTML5 Pixel Perfect development, Bootstrap 4
            </span>
            </p>
            <p class="skill">CSS:
            <span class="item">
                Responsive Web Design, Sass, BEM, CSS animation, FlexBox, Grid, Cross-Browser compatibility knowledge, Semantic UI Animate.css
            </span>
            </p>
            <p class="skill">Linters:
            <span class="item">
                Stylelint
            </span>
            </p>
            <p class="skill">Images:
            <span class="item">
                SVG, icon fonts, FontAwesome
            </span>
            </p>
            <p class="skill">JS:
            <span class="item">
                JS native, React, Redux, JSON
            </span>
            </p>
            <p class="skill">PSD to HTML:
            <span class="item">
                Photoshop, Figma
            </span>
            </p>
            <p class="skill">Version control:
            <span class="item">
                Git Version Control Tool
            </span>
            </p>
            <p class="skill">CMS:
            <span class="item">
                WordPress
            </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
};

export default Content;
