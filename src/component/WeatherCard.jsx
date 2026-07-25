import React from 'react'
import InfoCard from './InfoCard';
function WeatherCard({ weather, title, value }) {
  if (!weather) return null;

  return (
    
    <div className="mt-8">

      <h2 className="text-3xl font-bold text-center">
        {weather.location.name}
      </h2>

      <p className="text-center text-gray-500">
        {weather.location.country}
      </p>

      <img
        src={weather.current.condition.icon}
        alt=""
        className="mx-auto"
      />

      <h1 className="text-5xl text-center font-bold text-blue-600">
        {weather.current.temp_c}°C
      </h1>

      <p className="text-center">
        {weather.current.condition.text}
      </p>

      {/* InfoCard */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

        <InfoCard
          title="Humidity"
          value={`${weather.current.humidity}%`}
        />

        <InfoCard
          title="Wind"
          value={`${weather.current.wind_kph} km/h`}
        />

        <InfoCard
          title="Pressure"
          value={`${weather.current.pressure_mb} mb`}
        />
        <InfoCard
          title="Feels Like" 
          value={`${weather.current.feelslike_c} °C`}
        />
        
        <InfoCard 
          title="Local Time"
          value={weather.location.localtime}
        />

        <InfoCard
          title="UV Index"
          value={weather.current.uv}
        />
        
        <InfoCard
          title="Chance of Rain"
          value={weather.current.chance_of_rain}
        />

        <InfoCard
          title="Wing Direction"
          value={weather.current.wind_dir}
        />
      </div>
      
    </div>
  );
}
export default WeatherCard;