import React, { useState } from 'react'
import P from '../atoms/P'
import Form from '../atoms/Form'
import FlexBox from '../atoms/FlexBox'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const NameForm = (props) => {
    const [userName, setUserName] = useState('')

    const changeUserName = (e) => {
        console.log(e.target.value)
        setUserName(e.target.value)
    }

    const submitName = (e) => {
        e.preventDefault()
        props.setName(userName)
    }

    return (
        <Form onSubmit={submitName}>
            <P text="Hi there! Welcome to your education showcase." />
            <P text="Type your name and click Enter below to begin!" />
            <FlexBox height="70px" direction="column" justifyContent="space-between">
                <Input value={userName} onChange={changeUserName} />
                <Button color="white" bg="palevioletred">Enter</Button>
            </FlexBox>
        </Form>
    )
}

export default NameForm