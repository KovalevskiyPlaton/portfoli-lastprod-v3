import { useState, useEffect } from "react";


export const SetTime:(targetDate: Date) => (number | string)[] = (targetDate)=> {
        const countDownDate = new Date(targetDate).getTime();
        const [countDown, setCountDown] = useState(
           countDownDate - new Date().getTime()
        );

        useEffect(() => {
            const interval = setInterval(() => {
              setCountDown(countDownDate - new Date().getTime());
            }, 1000);
                return () => clearInterval(interval);
          }, [countDownDate]);

          return getReturnValues(countDown);
        };

        function addZero(num:number){
          if (num>=0 && num<10){       
              return `0${num}`;
          }else{
              return num;
          }
      }
        const getReturnValues:(countDown:number) => (string | number)[] = (countDown) => {
            const years = addZero(Math.floor(countDown/(1000*60*60*24*30*12)));
            const months = addZero(Math.floor(countDown/(1000*60*60*24*30)%12));
            const days=addZero(Math.floor(countDown/(1000*60*60*24)%30));
            const hours =addZero(Math.floor(countDown/(1000*60*60)%24));
            const minutes = addZero(Math.floor(countDown/(1000*60)%60));
            const seconds = addZero(Math.floor(countDown/1000)%60);

            return [days, hours, minutes, seconds, years, months];

          };





    
    

          

