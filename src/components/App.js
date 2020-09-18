import React, {useState } from 'react'
import Intro from './pages/Intro'
import Main from './pages/Main'

const App = () => {

    const [userName, setUserName] = useState('')

    const setName = (userName) => {
        setUserName(userName)
    }

    return userName === '' ? <Intro setName={setName}/> : <Main userName={userName}/>
    
}

export default App