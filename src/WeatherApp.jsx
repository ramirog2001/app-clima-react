import { useState } from 'react'
import './WeatherApp.css'
import { WeatherComponent } from './components/WeatherComponent'
import { ApiKeyComponent } from './components/ApiKeyComponent'

export const WeatherApp = () => {

    const [apiKey, setApiKey] = useState('')

    const resetApiKey = () => {setApiKey('')}

    return (
        <div className="container">
            <h1>App clima</h1>
            {apiKey ? <WeatherComponent apiKey={apiKey} resetApiKey={resetApiKey} /> : <ApiKeyComponent setApiKey={setApiKey}/>}
        </div>
    )
}
