import React, {useState} from 'react'

const Intro = (props) => {
    const [userName, setUserName] = useState('')

    const onChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }

    const onSubmit = () => {
        props.setName(userName)
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Hi there! Welcome to your education showcase.</p>
            <p>Type your name  and click Enter below too begin!</p>
            <input type="text" onChange={onChange} value={userName} />
            <button>Enter</button>
        </form>
    )
}

export default Intro