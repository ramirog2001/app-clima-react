import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const WeatherComponent = ({ apiKey, resetApiKey }) => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const difKelvin = -273.15 // diferencia con temperatura Celcius

    const { city, handleInputChange } = useForm({ city: '' })

    const [weather, setWeather] = useState(null)


    const fetchWeather = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`);

            if (response.status == 401) {
                resetApiKey()
                alert('la api key ingresada no es válida')
                return
            }
            else if (response.status == 404) {
                alert('no se encontró la ciudad ingresada')
                return
            }

            const json = await response.json()
            setWeather(json)

        } catch (error) {
            console.error(error, 'test')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (city.trim() == '') return

        fetchWeather()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id="inputCity"
                    name='city'
                    type="text"
                    placeholder="Ingresar ciudad"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                weather && (
                    <div>
                        <h2>{weather.name}, {weather.sys.country}</h2>
                        <p>Temperatura: {Math.round(weather.main.temp + difKelvin)}°C</p>
                        <p>La condición meteorológica actual: {weather.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    </div>
                )
            }
        </>
    )
}
