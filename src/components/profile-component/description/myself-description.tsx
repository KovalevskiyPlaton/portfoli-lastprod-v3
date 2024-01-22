import styleMyselfDescr from './myself-description.module.css'
import {FC} from 'react';
import {useState} from "react";
// import {AiFillMinusCircle} from 'react-icons/ai';
// import {AiFillPlusCircle} from 'react-icons/ai';
import profileInfo from "../../../types/profileInfo.ts";
// import {SlSocialVkontakte} from 'react-icons/sl';
// import { LiaTelegramPlane } from "react-icons/lia";
// import { LiaWhatsapp } from "react-icons/lia";
import profDitalis from '../../../assets/other/ProfilDetails.pdf'
const  MySelfDescr:FC<profileInfo> = ({
                                           profileHeader
                                          ,profileDescLern
                                          ,profileDescAboutProj
                                      }) => {
const [visibleContent, setVisibleContent ]=useState(false)
    const toggleShow =()=>{
        setVisibleContent(!visibleContent)
    }
    return (

      <div className={styleMyselfDescr.wrapperDesc__container}>
          <h1>     {profileHeader}   </h1>
          <button  onClick={ toggleShow } style={{color:'white'}}>{visibleContent ? '+' :
              '-'}</button>
          {visibleContent?
              <div className={`${styleMyselfDescr.container__descr}`}>
                  <p>&emsp;{profileDescLern}</p>
                  <p>&emsp;{profileDescAboutProj}</p>
                      <p>&emsp;
                          Подробная информация обо мне по ссылке:
                          <a className={styleMyselfDescr.aStyleProf} href={profDitalis}> мое резюме.</a>
                      </p>
               <div className={styleMyselfDescr.contacts__section}>
                        <div className={styleMyselfDescr.contacts_item}>
                            <a className={styleMyselfDescr.aStyleProf} href="https://vk.com/id18765086">VK</a>
                        </div>
                   <div className={styleMyselfDescr.contacts_item}>
                       <a className={styleMyselfDescr.aStyleProf} href="https://t.me/Kovalevskiy_PV">Telega</a>
                   </div>
                   <div className={styleMyselfDescr.contacts_item}>
                       <a className={styleMyselfDescr.aStyleProf} href="https://wa.me/+79787936493">WhatA</a>
                   </div>
               </div>
              </div>:null
              }
      </div>


    )
}


export default MySelfDescr