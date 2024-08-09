import React from 'react';
import '../info/info.css';

const Info = () => {
    return (
        <>
            <div className="container">
                <div className="imgbanner">
                    <img src="../public/image/infor1.png" alt="Banner" />
                </div>
            </div>
            <div className="imgvector">
                <img src="../public/image/vectorif.png" alt="Vector" />
            </div>
  
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col"></div>
                    <div className="col">
                        <h3>JUNIPER</h3>
                    </div>
                    <div className="col">
                        <h3>OTHER COMPANY</h3>
                    </div>
                </div>
            </div>
  
            {[
                { title: "Cloud Technology", juniperText: "Cloud technology for reliable forecasts", otherText: "Other apps use outdated data sources" },
                { title: "Simple Interface", juniperText: "Simple and intuitive interface", otherText: "Other apps have cluttered designs" },
                { title: "10-Day Forecast", juniperText: "10-day forecast with hourly updates", otherText: "Other apps offer 7-day forecast or less" },
                { title: "Weather Alerts", juniperText: "Severe weather alerts and notifications", otherText: "Other apps do not warn you of hazards" },
                { title: "Air Quality Data", juniperText: "Air quality information and maps", otherText: "Other apps do not include air quality data" },
                { title: "Weather Maps", juniperText: "Temperature and precipitation maps", otherText: "Other apps do not show global patterns" },
                { title: "Affordable Price", juniperText: "Inexpensive and affordable", otherText: "Other apps charge premium prices or fees" },
            ].map((item, index) => (
                <div className={`container text-center ${index % 2 !== 0 ? 'pro' : ''}`} key={index}>
                    <div className="row align-items-center">
                        <div className="col">
                            <h5>{item.title}</h5>
                        </div>
                        <div className="col">
                            <p>{item.juniperText}</p>
                        </div>
                        <div className="col">
                            <p>{item.otherText}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="buttonn">
                <a href="#" className="banner-button-1-2-3">DOWNLOAD NOW</a>
            </div>
  
            <div className="card-container">
                {[
                    { src: '../image/clu.png', text: "Accurate and reliable weather forecasts powered by cloud computing" },
                    { src: '../image/load.png', text: "Interactive and user-friendly interface with stunning graphics and animations" },
                    { src: '../image/Icon.png', text: "Compatible with various devices and platforms, including smart home systems" },
                    { src: '../image/ntf.png', text: "Customizable alerts and notifications for different weather conditions" }
                ].map((card, index) => (
                    <div className="card123" key={index}>
                        <img src={card.src} alt={`Icon ${index + 1}`} />
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Info;
