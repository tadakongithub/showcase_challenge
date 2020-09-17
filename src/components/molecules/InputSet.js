import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'

const InputSet = ({title, type, value, handleChange}) => {
    return (
        <Wrapper>
            <FieldLabel>{title}</FieldLabel><br/>
            <Input type={type} value={value} onChange={handleChange} />
        </Wrapper>
    )
}

export default InputSet