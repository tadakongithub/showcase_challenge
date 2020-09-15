import React, { useState } from 'react'
import NameFormHeader1 from '../atoms/NameFormHeader1'
import NameFormHeader2 from '../atoms/NameFormHeader2'
import NameField from '../atoms/NameField'
import NameEnter from '../atoms/NameEnter'
import FormBox from '../atoms/FormBox'

const NameForm = (props) => {
    const [userName, setUserName] = useState('')

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }

    const submitName = (e) => {
        e.preventDefault()
        props.setName(userName)
    }

    return (
        <FormBox submitName={submitName}>
            <NameFormHeader1 />
            <NameFormHeader2 />
            <NameField changeUserName={changeUserName} userName={userName}/>
            <NameEnter />
        </FormBox>
    )
}

export default NameForm