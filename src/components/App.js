import React, {useState, useEffect } from 'react'
import Intro from './Intro'
import Main from './Main'

const App = () => {

    const [userName, setUserName] = useState('')
    const [allUniversities, setAllUniversities] = useState(undefined)

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search`)
        .then(res => res.json())
        .then(result => {
            setAllUniversities(result)
        })
    }, [])

    const setName = (userName) => {
        setUserName(userName)
    }

    if(userName === ''){
        return(
            <React.Fragment>
                <Intro setName={setName}/>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Main userName={userName} allUniversities={allUniversities}/>
        </React.Fragment>
    )
    
}

export default App