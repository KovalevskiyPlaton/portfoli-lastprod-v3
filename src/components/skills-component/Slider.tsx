import SliderContent from './SliderContent.tsx';
import {imageSlide} from './imageSlider.ts';
import Arrows from './Arrows.tsx';
import { useState } from 'react';
import Dots  from './Dots.tsx';
import './slider.css';
import { useEffect } from 'react';
import {FC} from 'react'
import TSliderProps from "../../types/sliderTypes.ts";

const len = imageSlide.length-1

const Slider: FC <Pick<TSliderProps, 'imageSlide'>> = () => {
    const [activeIndex, setActiveIndex]= useState(0)
    const updateIndex = (newIndex:number)=>{
        newIndex = activeIndex === len ? 0 : activeIndex+1;
        setActiveIndex(newIndex)
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            updateIndex(activeIndex+1)
        }, 1600)
        return ()=>{
            if(interval){
                clearInterval(interval)
            }
        }
    })

    return (
        <div className='slider-container'>
                <SliderContent activeIndex={activeIndex} imageSlide={imageSlide}/>
                <Arrows  prevSlide={()=> setActiveIndex(activeIndex<1 ? len:activeIndex-1)
                }
                nextSlide={()=> setActiveIndex(activeIndex === len ? 0 : activeIndex+1)
                }
                />
                <Dots activeIndex={activeIndex}
                imageSlide={imageSlide}
                onClick={(activeIndex:number) => setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;