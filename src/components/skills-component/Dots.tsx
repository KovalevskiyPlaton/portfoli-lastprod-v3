import {FC} from 'react'
import TSliderProps from "../../types/sliderTypes.ts";

const Dots: FC<TSliderProps>  = ({activeIndex, onClick, imageSlide})=>{
    return (
    <div className="all-dots">
        {imageSlide.map((_, indexDot)=>(<div key={indexDot} className={`${activeIndex === indexDot?'dot active-dot': 'dot'}`}
        onClick={()=> onClick(indexDot)}
        ></div>))}
    </div>
    )
}

export default Dots