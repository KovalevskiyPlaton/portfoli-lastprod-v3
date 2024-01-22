import buttPanelStyle  from './buttons-panel.module.css'
import {NavLink} from "react-router-dom";

function ButtonsPanel() {
    return (
        <nav className={buttPanelStyle.container__nav}>
                  <div className={buttPanelStyle.itemsPanel__item}>
                      <NavLink to={'/'} className={(navData)=>navData.isActive?buttPanelStyle.itemsPanel_active:buttPanelStyle.itemsPanel__item}>
                          Обо мне
                      </NavLink>
                </div>
                <div className={buttPanelStyle.itemsPanel__item}>
                    <NavLink to={'/projects'}
                             className={(navData)=>navData.isActive?buttPanelStyle.itemsPanel_active:buttPanelStyle.itemsPanel__item}>Мои работы
                    </NavLink>


                </div>
            <div className={buttPanelStyle.itemsPanel__item}>
                <NavLink to={'/skills'} className={(navData)=>navData.isActive?buttPanelStyle.itemsPanel_active:buttPanelStyle.itemsPanel__item}>
                    Мой стек
                </NavLink>
            </div>
            <div className={buttPanelStyle.itemsPanel__item}>
                <NavLink to={'/timer'} className={(navData)=>navData.isActive?buttPanelStyle.itemsPanel_active:buttPanelStyle.itemsPanel__item}>
                    Таймер
                </NavLink>
            </div>
        </nav>
    )
}


export default ButtonsPanel