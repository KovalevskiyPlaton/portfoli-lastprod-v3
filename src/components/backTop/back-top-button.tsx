import backTopStyle  from './back-top.module.css'
import {useEffect, useState} from "react";
import ArrowTop from "../../assets/icons/Arrow.png"

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
                <button className={backTopStyle.button__top}  onClick={scrollUp}><img className={backTopStyle.arrowStyle__settings} src={ArrowTop} alt={''}/></button>
            )
            }
        </>


    )
}


export default BackTopButton