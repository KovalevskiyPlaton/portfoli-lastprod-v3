import styleProfile from './profile-background.module.css'
import bird from '../../../assets/profile-info/v-21.gif'
import card from '../../../assets/profile-info/card_4.png'


 function ProfileBackground() {
    return (
<section className={styleProfile.profile___section}>

        <div className={styleProfile.general__container}>
            <div>
                <img src={card} className={styleProfile.center}/>
                    <div className={styleProfile.bird__container}>
                        <div className={`${styleProfile.deg13} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg27} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg41} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg55} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg69} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg83} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg96} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg110} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg124} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg138} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg152} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg166} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg180} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg193} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg207} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg221} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg235} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg249} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg263} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg276} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg290} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg304} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg318} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg332} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg346} ${styleProfile.birdImg}`}><img src={bird}/></div>
                        <div className={`${styleProfile.deg360} ${styleProfile.birdImg}`}><img src={bird}/></div>
                    </div>
            </div>
        </div>
</section>



    )
}


export default ProfileBackground