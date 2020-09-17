import React from 'react'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'

const Year = ({title, value, handleChange}) => {
    return (
        <InputFieldWrapper>
            <FieldLabel>{title}</FieldLabel><br/>
            <Input type="number" value={value} onChange={handleChange} placeholder="yyyy" />
        </InputFieldWrapper>
    )
}

export default Year