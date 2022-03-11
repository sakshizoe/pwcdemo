import './App.css';
import WeekWiseData from './WeekWiseData';
import React, { useState } from "react";
function App() {
  const [city, setCity] = useState("Sydney");

  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <span className="parent">
            <div >
              <div style={{ fontWeight: "bold", fontSize: "2.25rem" }}>{city || "Syndney"}</div>
              <div>{new Date().toDateString()}</div>
              <div><img src={""} height={50} width={50} />18c</div>
            </div>
            <div className='grid2'>
              <div>Percipitation:100%</div>
              <div>Humidity:97%</div>
              <div>Windg: 340kmph</div>
              <div>Pollen count: 48</div>
            </div>
          </span>
          <div>
            <label>Enter city here</label><input type="text" onChange={(e) => setCity(e.target.value)} />
          </div>
          <WeekWiseData city={city} />

        </div>


      </header>
    </div>
  );
}

export default App;
