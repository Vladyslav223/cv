/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import mainPhoto from './photo1.jpg';
import square from './square.jpg';
import fon from './fon.jpg';
import pen from './pen.png';
import cup from './cup.png';
import flower from './flower.png';
import phone from './icons/phone.png';
import email from './icons/email.png';
import telegram from './icons/telegram.png';
import home from './icons/home.png';
import './index.scss';
import './clipboard.scss';

const Content = (props) => {

	const copyToClipboard = () => {
		console.log("copied");
		return alert("Text copied");
	  }

  return (
    <div class="cv">
      <div class="cv__grid-wrapper">
        <div class="cv__main-photo"></div>
        <div class="cv__main-info">
          <h2 class="cv__name">Vladyslav<br/>Presniakov</h2>
          <div class="cv__status">Frontend developer</div>
          <div class="cv__address">Kharkiv, Ukraine, Pushkinska ave 67</div>
        </div>
        <div class="cv__main-row">
			<div class="cv__profile-title">Professional <br /><img className="cv__square" src={square} /> Profile </div>
			<div class="cv__profile-description">
				Hardworking, highly motivated and able to grasp new concepts quickly and efficiently.
				I want to become a member of the team of fun and interesting people where I can apply all my skills and experience. I know HTML5 / CSS3 / JavaScript,
				React stack. Familiar with Photoshop, Git, SASS / SCSS
        	</div>
        </div>
        <div class="cv__contacts-wrap">
						<h3>Contact</h3>
						<p className="cv__accent-yellow"></p>
						<ul class="cv__contacts">
							<li class="cv__contactme">
								<a className="cv__home-link" href="tel:+380991177577">
									<div className="cv__text-contact">
										<span className="cv__contact-styles">Phone</span><br/>
											+38(099)11-77-5-77
									</div>
									<div className="cv__icon-border cv__icon-border1">
										<img src={phone} alt="contact"></img>
									</div>
								</a>
							</li>
							<li class="cv__contactme">
								<div className="cv__text-contact" onclick={copyToClipboard}>
									<span className="cv__contact-styles">Email</span><br/>
										presnyakov.vladyslav<br/>@gmail.com
								</div>
								<div className="cv__icon-border cv__icon-border2">
									<img src={email} alt="contact"></img>
								</div>
							</li>
							<li class="cv__contactme">
								<div className="cv__text-contact">
									<a className="cv__telegram-link" href="tg://resolve?domain=Vladyslav_dev">
										<span className="cv__contact-styles">Telegram</span><br/>
											Or write here
									</a>
								</div>
								<div className="cv__icon-border cv__icon-border3"><img src={telegram} alt="contact"></img></div></li>
							<li class="cv__contactme">
								<a className="cv__home-link" target="_blank" href="https://goo.gl/maps/rk4v5fCRW46GJL24A">
									<div className="cv__text-contact">
										<span className="cv__contact-styles">Address</span><br/>
											Kharkiv, Ukraine
									</div>
									<div className="cv__icon-border cv__icon-border4">
										<img src={home} alt="contact"></img>
									</div>
								</a>
							</li>
						</ul>
					</div>
        <div className="cv__exp">
          <h3 className="cv__exp-pe-title">Professional experience</h3>
		  <p className="cv__accent-gray"></p>
          <p className="cv__exp-pe-description">Six month of experience in frontend development (React/Redux/HTML/CSS/JS/WordPress)</p>
          <h3 className="cv__exp-pe-title cv__exp-pe-title-1">Professional skillset</h3>
		  <p className="cv__accent-gray cv__accent-gray2"></p>
          <div className="cv__skillset">
						<div className="cv__item-wrap">
						  	<span className="cv__item">
						  		HTML:
							</span>
						  	<p className="cv__skill">
							  HTML5 Pixel Perfect development, Bootstrap 4
							</p>
							<hr className="cv__hr"/>
						</div>
						<div className="cv__item-wrap">
							<span className="cv__item">
								CSS:								
							</span>
						<p class="cv__skill">								
							Responsive Web Design, Sass, BEM, CSS animation, FlexBox, Grid, Cross-Browser compatibility knowledge, Semantic UI Animate.css						
						</p>
						<hr className="cv__hr"/>
						</div>
						<div className="cv__item-wrap">
								<span className="cv__item">
										Linters:
							</span>
						<p	 class="cv__skill">
								
							Stylelint						
					</p>
					<hr className="cv__hr"/>
					</div>
						<div className="cv__item-wrap">
								<span className="cv__item">
									Images:								
							</span>
						<p	 class="cv__skill">
							
							SVG, icon fonts, FontAwesome							
					</		p	>
					<hr className="cv__hr"/>
					</div>
						<div className="cv__item-wrap">
								<span className="cv__item">
									JS:
							</span>
						<p	 class="cv__skill"> 
							
								JS native, React, Redux, JSON			
					</		p	>
					<hr className="cv__hr"/>
					</div>
						<div className="cv__item-wrap">
								<span className="cv__item">
									PSD to HTML:								
							</span>
						<p	 class="cv__skill"> 
							
							Photoshop, Figma							
					</		p	>
					<hr className="cv__hr"/>
					</div>
						<div className="cv__item-wrap">
								<span className="cv__item">
									Version control:
							</span>
						<p	 class="cv__skill"> 
																	
								Git Version Control Tool 				
					</		p	>
					<hr className="cv__hr"/>
					</div>
						<div className="cv__item-wrap">
								<span className="cv__item">
										CMS:
							</span>
						<p	 class="cv__skill"> 
									
							WordPress					
						</p>
						<hr className="cv__hr"/>							
					</div>
					</div>
        </div>        
        <div className="cv__education">
          <p className="cv__education-title">Education</p>
          <p className="cv__vuz"><span>Junior Specialist</span><br/>colledge by specialty computer technology </p>
          <p className="cv__vuz"><span>Master of computer science, Engineer researcher</span><br/>East Ukrainian National University. Automated technological process control.</p>
          <p className="cv__vuz"><span>React developer</span><br/> Mate academy online</p>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
};

export default Content;
