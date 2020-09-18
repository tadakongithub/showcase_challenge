import React, {useState,  useEffect } from 'react'
import axios from 'axios'
import Intro from './pages/Intro'
import Main from './pages/Main'

const App = () => {

    const [userName, setUserName] = useState('')
    const [allUniversities, setAllUniversities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await axios(`http://universities.hipolabs.com/search`)

            setAllUniversities(result.data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

    const setName = (userName) => {
        setUserName(userName)
    }

    return userName === '' ? <Intro setName={setName}/> : <Main userName={userName} allUniversities={allUniversities} isLoading={isLoading}/>
    
}

export default App