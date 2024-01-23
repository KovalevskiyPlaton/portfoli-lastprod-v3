import styleCards from './cards-component.module.css';
import CardItem from "./cardItem/card-item.tsx";
import {ReactElement, useState} from "react";
import card_1 from '../../assets/cards/card_1.png';
import card_2 from '../../assets/cards/card_2.jpg';
import card_3 from '../../assets/cards/card_3.png';
import card_4 from '../../assets/cards/card_4.png'
import card_5 from '../../assets/cards/card_5.png';
import card_6 from '../../assets/cards/card_6.png';
import card_7 from '../../assets/cards/card_7.png';
import card_8 from '../../assets/cards/card_8.png';
import card_9 from '../../assets/cards/card_9.png';


const arrCard:ReactElement[]= [

    <CardItem
        FirstTitlePage={'Portfolio v.2'}
        SecondHeaderPage={'Мое первое портфолио на react'}
        SecondContext={'Данный проект разработан с использованием функциональных компонентов'}
        img={card_1}
        srcProject={`https://kovalevskiyplaton.github.io/`}
    />,
    <CardItem
        FirstTitlePage={'Сайт - визитная карточка'}
        SecondHeaderPage={'Работа с элементами DOM'}
        SecondContext={'Осуществление работы таймера, табов, меню "гамбургер" и т.д. '}
        img={card_2}
        srcProject={`https://github.com/KovalevskiyPlaton/projectBuisnessCard`}
    />,
    <CardItem
        FirstTitlePage={'Сайт - аренда машин'}
        SecondHeaderPage={'Верстка сайта с нуля'}
        SecondContext={'Выполнение верстки по макету в FIGMA c минимальным функционалом'}
        img={card_3}
        srcProject={`https://github.com/KovalevskiyPlaton/projectRentalCar.git/`}
    />,


]

const arrShowMoreCard:ReactElement[]= [
        <CardItem
        FirstTitlePage={'Сайт - продажа Iphone 13'}
        SecondHeaderPage={'Работа с элементами DOM'}
        SecondContext={'Осуществление работы аккардеона, получение информации из базы данных JSON'}
        img={card_4}
        srcProject={`https://github.com/KovalevskiyPlaton/Project-Iphone-sale.git`}
    />,
    <CardItem
        FirstTitlePage={'Постер'}
        SecondHeaderPage={'Работа с библиотекой React'}
        SecondContext={'Получение и обработка данных с fakeAPI, c последующими манипуляциями'}
        img={card_5}
        srcProject={`https://github.com/KovalevskiyPlaton/Project-React-app-Poster.git`}
    />,
    <CardItem
        FirstTitlePage={'Сайт - доставка еды'}
        SecondHeaderPage={'Верстка с нуля по макету в FIGMA'}
        SecondContext={'Моя первая работа'}
        img={card_6}
        srcProject={`https://github.com/KovalevskiyPlaton/project-food-delivery.git`}
    />,
    <CardItem
        FirstTitlePage={'Инструмент по типу bootstrap'}
        SecondHeaderPage={'Работа с препроцессором SASS'}
        SecondContext={' Инструмента web-разработки по типу bootstrap'}
        img={card_7}
        srcProject={`https://github.com/KovalevskiyPlaton/SassTools`}
    />,
    <CardItem
        FirstTitlePage={'Добавлятель'}
        SecondHeaderPage={'Быстрый курс TypeScript+React'}
        SecondContext={'Первое знакомство с технологией React + Typscript'}
        img={card_8}
        srcProject={`https://kovalevskiyplaton.github.io/`}
    />,
    <CardItem
        FirstTitlePage={'Cоцсеть на React'}
        SecondHeaderPage={'Детальное погружение в react-redux'}
        SecondContext={'Пройденное количество тем: 78 из 100'}
        img={card_9}
        srcProject={`https://github.com/KovalevskiyPlaton/The-way-of-samurai-1.0---social-network-lesson-78`}
    />

]

const CardsContainer= () => {
    const [showMore, setShowMore] = useState(false)
    const getRes = ()=>{
        setShowMore(true)
    }
    return (
<>
    {
        arrCard.map((x:ReactElement, i:number)=>{
        return <div key={i}
        className={styleCards.cards__item}>{x}</div> })
    }
    {
        showMore?arrShowMoreCard.map((x:ReactElement, i:number)=>{
        return <div key={i}
        className={styleCards.cards__item}>{x}</div> }):null
    }


<button className = {!showMore?styleCards.button__showMore:styleCards.button__showMore_hidden}
        onClick={getRes}
>Показать больше</button>
</>
    )}


export default CardsContainer