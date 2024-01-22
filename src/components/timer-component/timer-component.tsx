import styleTimer from './timer-component.tsx.module.css'
import Timer from './Timer.tsx'
import {FC} from 'react'

const  TimerComponent: FC = ()=> {

    return (
        <section className = {styleTimer.timer__container}>
            <div className = {styleTimer.timer__wrapper}>
                <Timer/>
            </div>
        </section>

    )
}


export default TimerComponent