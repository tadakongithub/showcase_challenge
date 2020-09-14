import React, {useState} from 'react'

const Intro = () => {
    const [userName, setUserName] = useState('')

    const onChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }

    return (
        <div>
            <p>Hi there! Welcome to your education showcase.</p>
            <p>Type your name  and click Enter below too begin!</p>
            <input type="text" onChange={onChange} value={userName} />
        </div>
    )
}

export default Intro