import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'

const Gpa = (props) => {
    return (
        <Wrapper>
            <FieldLabel>{props.title}</FieldLabel><br/>
            <Input type="number" step="0.01" min="0" max="4" value={props.value} onChange={props.handleChange} />
        </Wrapper>
    )
}

export default Gpa