import styleMyselfDescr from './myself-description.module.css'
import {FC} from 'react'
import {useState} from "react"
import profileInfo from "../../../types/profileInfo.ts"
import profDitalis from '../../../assets/other/ProfilDetails.pdf'
import plusIcon from  '../../../assets/icons/plusIcon.png'
import minusIcon from  '../../../assets/icons/minusIcon.png'
import telegrammIcon from '../../../assets/icons/telega.png'
import whatAppIcon from '../../../assets/icons/whatSappIcon.png'
import vkIcon from '../../../assets/icons/vkIcon.png'

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
          <button  onClick={ toggleShow }>{visibleContent ? <img src={minusIcon} className={styleMyselfDescr.icons_settings} alt={'показать больше'}/> :
              <img src={plusIcon} className={styleMyselfDescr.icons_settings} alt={'показать больше'}/>}</button>
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
                            <a className={styleMyselfDescr.aStyleProf} href="https://vk.com/id18765086"><img src={vkIcon} className={styleMyselfDescr.contacts_item}/></a>
                        </div>
                   <div className={styleMyselfDescr.contacts_item}>
                       <a className={styleMyselfDescr.aStyleProf} href="https://t.me/Kovalevskiy_PV"><img src={telegrammIcon} className={styleMyselfDescr.contacts_item}/></a>
                   </div>
                   <div className={styleMyselfDescr.contacts_item}>
                       <a className={styleMyselfDescr.aStyleProf} href="https://wa.me/+79787936493"><img src={whatAppIcon} className={styleMyselfDescr.contacts_item}/></a>
                   </div>
               </div>
              </div>:null
              }
      </div>


    )
}


export default MySelfDescr