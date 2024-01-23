import {FC} from 'react'
import styleCard from './card-item.module.css'
import CardType from "../../../types/cardType.ts";
import {Link} from "react-router-dom";

const CardItem:FC<CardType>=(
    {
        FirstTitlePage,
        SecondHeaderPage,
        SecondContext,
        img,
        srcProject
    }

) =>{
    return (
           <div className={styleCard.card}>
                <div className={styleCard.action_card}>
                    <div className={styleCard.action_card__container}>
                        <div className={styleCard.card_face}>
                            <div className={`${styleCard.card__face__first} ${styleCard.card__face__first_total}`}>
                                <h2>{FirstTitlePage}</h2>
                            </div>
                            <div className={styleCard.card_face__second}>
                                <p className={`${styleCard.card_face__text_detailed} ${styleCard.card_face__text_detaled_total}`}>
                                    Подробнее
                                </p>
                            </div>
                        </div>
                        <div className={styleCard.card_back}>
                            <img src={`${img}`} alt={''}/>
                        </div>
                    </div>
                </div>
                <div className={styleCard.opened__page}>
                    <div className={styleCard.opened__page_container}>
                        <h3 className={`${styleCard.opened_page__heading} ${styleCard.opened_page__heading_total}`}>
                            {SecondHeaderPage}
                        </h3>
                        <p className={styleCard.opened__page_text}>
                            {SecondContext}
                        </p>
                            <span>
              <Link to={srcProject} className={`${styleCard.opened_page_btn} ${styleCard.opened_page_btn__total}`}>{'==> на github <=='}</Link>
                            </span>
                    </div>
                </div>
            </div>

    )
}


export default CardItem