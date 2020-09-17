import React from 'react'
import FieldLabel from '../atoms/FieldLabel'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import Textarea from '../atoms/Textarea'

const Description = (props) => {
    return (
        <InputFieldWrapper>
            <FieldLabel>{props.title}</FieldLabel><br/>
            <Textarea width="100%" height="200px" value={props.value} onChange={props.handleChange} />
        </InputFieldWrapper>
    )
}

export default Description