import { useState } from 'react'
import SearchBar from './component/SearchBar'
import Loading from './component/Loading'
import WeatherCard from './component/WeatherCard'
import ErrorMessage from './component/ErrorMessage'
import InforCard from './component/InfoCard'

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


async function handleSearch (){
  if(!city.trim()) return;
  if(!city.trim()) { 
    setError("Please enter city")
    setLoading(false)
    return
  }
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      if(!response.ok) throw new Error(`Resquest Failed ${response.status}`);
      const data = await response.json()
      setWeather(data)
      setCity("")

    } catch (error) {
      if (error.message.includes("400")) {
            setError("City not found")
      } else {
           setError("Something wrong try again")
      }
      setWeather(null)

    } finally {
      setLoading(false)
    }
  }

  let bgClass = "from-sky-400 via-blue-500 to-indigo-600";

   if (weather) {
     const condition = weather.current.condition.text.toLowerCase();

     if (condition.includes("sun")) {
      bgClass = "from-yellow-300 via-orange-400 to-yellow-500";
    } else if (condition.includes("rain")) {
      bgClass = "from-blue-700 via-blue-800 to-gray-900";
    } else if (condition.includes("cloud")) {
      bgClass = "from-gray-300 via-gray-500 to-gray-700";
    } else if (condition.includes("clear")) {
      bgClass = "from-cyan-300 via-sky-500 to-blue-600";
  }
}
  
    return (
 <div className={`min-h-screen bg-linear-to-br ${bgClass} p-6 transition-all duration-700`}>

    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🌦 SkyCast
      </h1>

      <SearchBar
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        loading={loading}
      />

      <Loading loading={loading} />

      <ErrorMessage error={error} />

      <WeatherCard weather={weather} />

    </div>

  </div>
);
}

export default App
