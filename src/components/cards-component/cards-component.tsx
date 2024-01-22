import styleCards from './cards-component.module.css';
import CardsContainer from "./cards-container.tsx";

const CardsComponent= () => {

    return (
        <section className={styleCards.cards__item}>
                 <CardsContainer/>
       </section>
    )
}


export default CardsComponent