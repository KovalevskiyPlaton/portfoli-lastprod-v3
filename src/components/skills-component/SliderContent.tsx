import {FC} from 'react'
import TSliderProps from "../../types/sliderTypes.ts";

const  SliderContent: FC<Omit<TSliderProps, 'onClick'>> = ({activeIndex, imageSlide} )=> {

    return (
        <section>
            {imageSlide.map((slide, index)=>(
                <div key={index} className={index === activeIndex? 'slides active': 'inactive'}>
                   <img className="slide-image" src={slide.urls} alt=''></img>
            </div>
            ))}
        </section>

    );

}

export default SliderContent;