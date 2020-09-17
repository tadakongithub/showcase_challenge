import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'

const Year = ({title, value, handleChange}) => {
    return (
        <Wrapper>
            <FieldLabel>{title}</FieldLabel><br/>
            <Input type="number" value={value} onChange={handleChange} placeholder="yyyy" />
        </Wrapper>
    )
}

export default Year