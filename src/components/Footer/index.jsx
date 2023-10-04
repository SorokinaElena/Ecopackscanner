import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className={s.footer}>
        <div>
          {'site'.toUpperCase()}
          <div className={s.menu_items_container}>
            <Link to='/'>Home</Link>
            <Link to='about_us'>About Us</Link>  
            <Link to='map'>Packaging Producers</Link> 
            <Link to='why_ecopackaging'>Why Ecopackaging</Link>
          </div>
        </div>
        <div>
          {'information'.toUpperCase()}
          <div className={s.menu_items_container}>
            <Link to='faq'>FAQ</Link>
            <a href="https://www.privacypolicies.com/live/8cada55c-ebc4-46ea-beff-7d5fa57333e3" target="_blank">Privacy Policy</a>
            <a href="https://www.privacypolicies.com/live/984f48b5-bb39-4165-89ed-f0c9a54000c3" target="_blank">Cookies Policy</a>
            <Link to='#'>Our Team</Link>
          </div>
        </div>
        <div>
          {'contact'.toUpperCase()}
          <div className={s.menu_items_container}>
            <div className={s.contact_item}>
              <AiOutlineMail className={s.icon}/>
              <span className={s.social_link}>phaeos.info@gmail.com</span>
            </div>
            <div className={s.contact_item}>
              <AiOutlinePhone className={s.icon}/>
              <span className={s.social_link}>+49 179 9999999</span>
            </div>
            <a target='_blank' href='https://web.whatsapp.com/'>
              <div className={s.contact_item}>
                <BsWhatsapp className={s.icon}/>
                What's App
              </div>
            </a>
            <a target='_blank' href='https://web.telegram.org/'>
              <div className={s.contact_item}>
                <BsTelegram className={s.icon}/>
                Telegram
              </div>
            </a>
          </div>
          </div>
        <div>
          {'social'.toUpperCase()}
          <div className={s.menu_items_container}>
            <a target='_blank' href='https://www.facebook.com/'>
              <div className={s.contact_item} >
                <BsFacebook className={s.icon}/>
                Facebook
              </div>
            </a>
            <a target='_blank' href='https://www.instagram.com/'>
              <div className={s.contact_item}>
                <BsInstagram className={s.icon}/>
                Instagram
              </div>
            </a>
            <a target='_blank' href='https://www.linkedin.com/'>
              <div className={s.contact_item}>
                <BsLinkedin className={s.icon}/>
                Linkedin
              </div>
            </a>
          </div>
        </div>
    </footer>
  )
}
