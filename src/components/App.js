import React, {useState} from 'react'
import Intro from './Intro'
import Main from './Main'

const App = () => {

    const [userName, setUserName] = useState('')

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
            <Main userName={userName}/>
        </React.Fragment>
    )
    
}

export default App