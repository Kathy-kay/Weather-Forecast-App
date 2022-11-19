
import React from "react"

const Descriptions =(weather) => {
    const cards = [
        {
            id:1,
            icon:'',
            title: "min",
            data: weather.temp_min

        },
        {
            id:2,
            icon:'',
            title: "max",
            data: weather.temp_max

        },
        {
            id:3,
            icon:'',
            title: "feels_like",
            data: weather.feels_like

        },
        {
            id:4,
            icon:'',
            title: "humidity",
            data: weather.humidity

        },
        {
            id:5,
            icon:'',
            title: "pressure",
            data: weather.pressure

        },
        {
            id:6,
            icon:'',
            title: "speed",
            data: weather.speed

        }
        
    ]
    return(
        <div className="dexcription-section">
            {cards.map(({id,title,icon,data})=>
                <div key={id} className="descript-card" >
                  <div className="descript-icon">
                    <h3>{icon}</h3>
                    <small>{title}</small>
                  </div>
                  <h2>{data}</h2>
                </div>
            )}
            
        </div>
    )
}

export {Descriptions}