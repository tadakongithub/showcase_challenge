import React from 'react'
import FieldLabel from '../atoms/FieldLabel'
import Wrapper from '../atoms/Wrapper'
import Textarea from '../atoms/Textarea'

const Description = (props) => {
    return (
        <Wrapper>
            <FieldLabel>{props.title}</FieldLabel><br/>
            <Textarea width="100%" height="200px" value={props.value} onChange={props.handleChange} />
        </Wrapper>
    )
}

export default Description