import {FC} from 'react'
import { SetTime } from "./SetTime.js";
import styleTimer from './Timer.module.css'
import timer from '../../assets/images/timer/timer_border_NSV2.png'
import tFloor from '../../assets/images/timer/timer_floor_NSV2.png'

//начать типизацию с сетТайм
const Timer: FC=()=>{
    const [days, hours, minutes, seconds, years, months] = SetTime(new Date('2026-03-24 00:00:00'))


    return(
        <div className={styleTimer.flex__container}>
                <div className={styleTimer.timDescContain}>
                    <h4>Импровизированный таймер – двигатель к мотивации</h4>
                    <span> &emsp;Согласно концепции, таймер отображает обратный отсчет до того момента,
                        когда автору удастся сменить сферу своей деятельности на IT до достижения полных 35 лет.</span>
                </div>
               <div className={styleTimer.flex__item}>
                <h3 className={styleTimer.head__timer}>Лет</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                <span className={styleTimer.descr}>{years}</span>
                <img src={tFloor} className={styleTimer.img__item__floor} alt=''/>
                <span className={styleTimer.descr__rotated}>{years}</span>
            </div>
            <div className={styleTimer.flex__item}>
                <h3 className={styleTimer.head__timer}>Месяцев</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                <span className={styleTimer.descr}>{months}</span>
                <span className={styleTimer.descr__rotated}>{months}</span>
                <img src={tFloor} className={styleTimer.img__item__floor} alt=''/>
                <span className={styleTimer.descr__rotated}>{months}</span>
            </div>
            <div className={styleTimer.flex__item}>
                <h3 className={styleTimer.head__timer}>Дней</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                <span className={styleTimer.descr}>{days}</span>
                <span className={styleTimer.descr__rotated}>{days}</span>
                <img src={tFloor} className={styleTimer.img__item__floor} alt=''/>
                <span className={styleTimer.descr__rotated}>{days}</span>
            </div>
            <div className={styleTimer.flex__item}>
                <h3 className={styleTimer.head__timer}>Часов</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                <span className={styleTimer.descr}>{hours}</span>
                <span className={styleTimer.descr__rotated}>{hours}</span>
                <img src={tFloor} className={styleTimer.img__item__floor} alt=''/>
                <span className={styleTimer.descr__rotated}>{hours}</span>
            </div>
            <div className={styleTimer.flex__item}>
                <h3 className={styleTimer.head__timer}>Минут</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                <span className={styleTimer.descr}>{minutes}</span>
                <span className={styleTimer.descr__rotated}>{minutes}</span>
                <img src={tFloor} className={styleTimer.img__item__floor} alt=''/>
                <span className={styleTimer.descr__rotated}>{minutes}</span>
            </div>
            <div className={styleTimer.flex__item}>
                <h3 className={styleTimer.head__timer}>Секунд</h3>
                <img src={timer} className={styleTimer.img__item} alt=''/>
                <span className={styleTimer.descr}>{seconds}</span>
                <span className={styleTimer.descr__rotated}>{seconds}</span>
                <img src={tFloor} className={styleTimer.img__item__floor} alt=''/>
                <span className={styleTimer.descr__rotated}>{seconds}</span>
            </div>
        </div>


    )
}

export default Timer;