import {useState} from 'react'
import "./calender.css"
import left from "./assets/circle-arrow-left-solid.svg"
import right from "./assets/circle-arrow-right-solid.svg";

const days=["Sun","mon","Tue","Wed","Thu","Fri","Sat"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const years = [
  2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,
  2021,2022,2023,2024,2025,2026,2027,2028, 2029, 2030];


export const Calender = () => {
  const [selectDate, setSelectDate] = useState(new Date());

  const dayMonth = () => {
    const daysArray = [];
    const first = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1); 
    const last = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0); 
    for (let i = 0; i < first.getDay(); i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= last.getDate(); i++) {
      daysArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(), i));
    }
    return daysArray;
  };

  const changeMonth = (e) => {
    const newmonth = parseInt(e.target.value, 10);
    setSelectDate(new Date(selectDate.getFullYear(), newmonth, 1));
  };

  const changeYear = (e) => {
    const newyear = parseInt(e.target.value, 10);
    setSelectDate(new Date(newyear, selectDate.getMonth(), 1));
  };

  return (
    <>
      <div className="calender">
        <div className="header">
          <button onClick={() => setSelectDate(new Date(selectDate.getFullYear(), selectDate.getMonth() - 1, 1))}><img src={left}/></button>
          <select value={selectDate.getMonth()} onChange={changeMonth}>
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <select value={selectDate.getFullYear()} onChange={changeYear}>
            {years.map((year,) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <button onClick={() => setSelectDate(new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 1))}><img src={right}/></button>
        </div>
        <div className="daysweek">
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {dayMonth().map((day, index) => (
            <div
              key={index}
              className={day?"day":"empty"}
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
