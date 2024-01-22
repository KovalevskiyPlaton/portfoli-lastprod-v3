import './App.css'
import ButtonsPanel from "./components/buttons-panel/buttons-panel.tsx";
import ProfileComponent from "./components/profile-component/Profile-component.tsx";
import {Routes, Route} from 'react-router-dom';
import SkillsComponent from "./components/skills-component/skills-component.tsx";
import TimerComponent from "./components/timer-component/timer-component.tsx";
import CardsComponent from "./components/cards-component/cards-component.tsx";
import BackTopButton from "./components/backTop/back-top-button.tsx";
import BackgruondApp from "./components/background/backgruond-app.tsx";


function App() {
  return (
    <main className='App'>
       <section className='head__section__panel'>
             <ButtonsPanel/>
             <BackTopButton/>
        </section>
        <section className ='display__section'>
            <Routes>
                <Route path='/' element={<ProfileComponent/>}></Route>
                <Route path='/projects' element={<CardsComponent/>}></Route>
                <Route path='/skills' element={<SkillsComponent/>}></Route>
                <Route path='/timer' element={<TimerComponent/>}></Route>
            </Routes>
         </section>
        <div className='background__container'>
            <div className='background__wrapper'>
                <BackgruondApp/>
            </div>
        </div>
    </main>
  )
}




export default App
