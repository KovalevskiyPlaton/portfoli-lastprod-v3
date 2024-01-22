import MyselfDescription from "./description/myself-description.tsx";
import styleProfileComp from "./profile-component.module.css"
import ProfileBackground from "./profile-info/profile-background.tsx";
function ProfileComponent() {

    return (
        <div className={styleProfileComp.GeneralProfile__container}>
                <div className={styleProfileComp.GeneralProfile__phone}>
                    <ProfileBackground/>
                </div>
            <div className={styleProfileComp.GeneralProfile__description}>
               <MyselfDescription
                    profileHeader={' «Frontend» разработчик – Ковалевский Платон Вячеславович'}
                    profileDescLern={`Обучение   навыкам «frontend developer»   -  самостоятельное обучение с ноября 2020 года.
                    `}
                    profileDescAboutProj={`При разработке портфолио использовались следующие основные инструменты: React TS, CSS,  сборщик Vite.`}
               />
            </div>


        </div>

    )
}


export default ProfileComponent