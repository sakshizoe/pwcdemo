import React, { useEffect, useState } from "react";
import './Data.css';
import { apiData } from "./constants";
import logo from "./logo.svg"
const WeekWiseData = (props) => {
    const { city } = props;
    const [apiResult, setData] = useState({});
    let url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=8ff8452c821d127d7afc17c8988f6e44&q=${city}`
    console.log(url, "url")
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=8ff8452c821d127d7afc17c8988f6e44&q=${city}`).then(res => res.json()).then(() => setData(apiData));
    }, [apiData])
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satruday"]
    return (
        <div className="values">

            {apiResult.length > 0 && apiResult.map((item, index) => <div key={index} className="padding"><div><div style={{ fontWeight: "bold" }}>{days[new Date(item.dt_txt).getDay()]}</div><div><img src={logo} height={45} width={45} /></div><div><span style={{ fontWeight: "bold" }}>{item.main.temp}&nbsp;&nbsp;&nbsp;</span><span>{item.main.temp_max}</span></div><div>{`${item.weather[0].main} 36`}</div></div></div >)}

        </div >
    )
}

export default WeekWiseData;