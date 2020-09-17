import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'

const Study = ({value, handleChange}) => {
    return(
        <Wrapper>
            <FieldLabel>Field of Study</FieldLabel><br/>
            <Input type="text" value={value} onChange={handleChange} />
        </Wrapper>
    )
}

export default Study