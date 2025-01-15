import { useForm } from "../hooks/useForm"

export const ApiKeyComponent = ({ setApiKey }) => {

    

    const { apiKey, handleInputChange } = useForm({ apiKey: '' })

    const handleSubmit = (event) => {
        event.preventDefault()
        setApiKey(apiKey)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="inputApiKey"
                name='apiKey'
                type="text"
                placeholder='Ingrese Api Key de openweathermap.org'
                value={apiKey}
                onChange={handleInputChange}
            />
            <button type="submit">Ingresar</button>
        </form>
    )
}