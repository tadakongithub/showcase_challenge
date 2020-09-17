import React from 'react'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'

const Study = ({value, handleChange}) => {
    return(
        <InputFieldWrapper>
            <FieldLabel>Field of Study</FieldLabel><br/>
            <Input type="text" value={value} onChange={handleChange} />
        </InputFieldWrapper>
    )
}

export default Study