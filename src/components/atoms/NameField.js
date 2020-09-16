import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    display: block;
    margin-bottom: 20px;
`

const NameField = (props) => {
    return <Input type="text" onChange={props.changeUserName} value={props.userName} />
}

export default NameField