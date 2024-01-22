import {MouseEventHandler} from "react";

export  type TArrows ={
    prevSlide: MouseEventHandler<HTMLSpanElement>,
    nextSlide: MouseEventHandler<HTMLSpanElement>,
    onClick?: (e:MouseEventHandler)=> HTMLSpanElement
}

interface IClickDot {
    indexDot?: number,
    activeIndex?: number,
    onClick: (indexDot : number)=> void
}

interface TSliderContent {
    imageSlide:{urls:string}[],
    activeIndex?: number,
}
type TSliderProps = TSliderContent & IClickDot
 export  default  TSliderProps
