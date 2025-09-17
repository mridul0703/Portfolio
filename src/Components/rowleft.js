import weathericon from "../Img/heavy-rain.png";
import { CiTempHigh } from "react-icons/ci";
import { FiSunset, FiSunrise } from "react-icons/fi";

const selectedcity = "Bhopal, Madhya Pradesh";
const currenttime = "22:55";
const currenttimezone = "IST";
const currenttemperature = "39°";
const feellike = "Partly CLoud";
const day = "41°";
const night = "30°";
const morning = "36°";
const afternoon = "36°";
const evening = "36°";
const overnight = "36°";
const sunrise = "36°";
const sunset = "36°";

function Rowleft() {
  return (
    <>
      <div className="leftcol">
        <div className="card lcard lno1" style={{ height: "35vh" }}>
          <div className="maincard" id="maincard">
            <h2>
              {selectedcity} as of {currenttime} {currenttimezone}
            </h2>
          </div>
          <div className="pricard1">
            <div className="primaryone">
              <h1>{currenttemperature}</h1>
              <p>{feellike}</p>
              <p>
                Day - {day}. Night - {night}
              </p>
            </div>
            <img src={weathericon} alt="Weather" />
          </div>
        </div>
        <div className="card lcard lno2" style={{ height: "60vh" }}>
          <div className="maincard2" id="maincard">
            <h2>Todays Forecast for {selectedcity}</h2>
          </div>
          <div className="pricard2">
            <div className="rows2">
              <h3>Morning</h3>
              <p>{morning}</p>
              <img src={weathericon} alt="Weather" />
              <p>{morning}</p>
            </div>
            <div className="rows2">
              <h3>Afternoon</h3>
              <p>{afternoon}</p>
              <img src={weathericon} alt="Weather" />
              <p>{morning}</p>
            </div>
            <div className="rows2">
              <h3>Evening</h3>
              <p>{evening}</p>
              <img src={weathericon} alt="Weather" />
              <p>{morning}</p>
            </div>
            <div className="rows2">
              <h3>Overnight</h3>
              <p>{overnight}</p>
              <img src={weathericon} alt="Weather" />
              <p>{morning}</p>
            </div>
          </div>
          <div className="bottomcard">
            <button>Next 48 Hours</button>
          </div>
        </div>
      </div>
      <div className="rightcol">
        <div className="card rcard rno1">
          <div className="maincard3" id="maincard">
            <h2>Weather Today</h2>
          </div>

          <div className="sun">
            <div className="sun-row">

              <FiSunrise style={{margin : "0 10px 0 0"}}/>
              <p> Sunrise -{sunrise}</p>
            </div>

            <div className="sun-row">
              <FiSunset style={{margin : "0 10px 0 0"}}/>
              <p> Sunset - {sunset}</p>
            </div>
          </div>
          <div className="sec-card3">
            <div className="col1-row1 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">High/Low</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row2 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">Humidity</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row3 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">Pressure</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row4 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">Visibility</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row1 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">Wind</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row2 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">Dew Point</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row3 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">UV Index</p>
              <p>
                {day}/{night}
              </p>
            </div>
            <div className="col1-row4 card3-rows">
              <CiTempHigh />
              <p className="card3-mid-row">Moon Phase</p>
              <p>
                {day}/{night}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rowleft;
