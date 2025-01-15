import { useState } from "react"

export const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormState(prevState => ({ ...prevState, [name]: value }))
    }

    return {
        ...formState,
        handleInputChange
    }
}