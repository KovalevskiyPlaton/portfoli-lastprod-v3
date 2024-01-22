import styleSkills from './skills-component.tsx.module.css'
import Slider from "./Slider.tsx";
import {FC} from 'react'
import {imageSlide} from "./imageSlider.ts";

const SkillsComponent: FC = () => {
    return (
        <section className = {styleSkills.skills__container}>
            <div className = {styleSkills.skills__wrapper}>
                <Slider imageSlide={imageSlide}/>
            </div>
        </section>

    )
}


export default SkillsComponent