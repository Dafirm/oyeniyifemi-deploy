import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='http://linkedin.com/in/femi-oyeniyi-b38b36159' target="_blank"><BsLinkedin/></a>
            <a href='https://github.com/Dafirm' target="_blank"><FaGithub/></a>
            <a href="https://wa.me/+358442388567" target="_blank"><BsWhatsapp/></a>
        </div>
    );
}

export default HeaderSocials