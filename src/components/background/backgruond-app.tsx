import backAppStyle  from './background-app.module.css'
import {useEffect, useState} from "react";

function BackgruondApp() {
     const [changeColor, setChangeColor] = useState('#faa')
const generateColor = ():string=>{
        const randomCol = Math.floor(Math.random() * 16777215).toString(16);
        const result = "#"+ randomCol
        return result
    }
    const updateColor =()=>{
        setChangeColor(generateColor)
    }

useEffect(()=>{
    const  interval =  setInterval(updateColor, 2000)
    return ()=>  clearInterval(interval)

},[changeColor])


    return (
        <div className={backAppStyle.circle__container}>
                <div className={backAppStyle.b1} ></div>
                <div className={`${backAppStyle.b2}`} style={{backgroundColor: changeColor}} ></div>
        </div>

    )
}


export default BackgruondApp