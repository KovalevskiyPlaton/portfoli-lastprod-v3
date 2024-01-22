import backTopStyle  from './back-top.module.css'
import {useEffect, useState} from "react";
// import { LiaLongArrowAltUpSolid } from "react-icons/lia"

function BackTopButton() {
    const [backTopButton, setBackTopButton] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
                if(window.scrollY > 90){
                    setBackTopButton(true)
                }else{
                    setBackTopButton(false)
                }
        })
    },[])

    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return (

        <>
            {backTopButton && (
                <button className={backTopStyle.button__top}  onClick={scrollUp}>ВВЕРХ</button>
            )
            }
        </>


    )
}


export default BackTopButton