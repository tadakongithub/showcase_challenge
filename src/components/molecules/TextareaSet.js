import React from 'react'
import FieldLabel from '../atoms/FieldLabel'
import Wrapper from '../atoms/Wrapper'
import Textarea from '../atoms/Textarea'

const TextareaSet = ({title, width, height, value, handleChange}) => {
    return (
        <Wrapper>
            <FieldLabel>{title}</FieldLabel><br/>
            <Textarea width={width} height={height} value={value} onChange={handleChange} />
        </Wrapper>
    )
}

export default TextareaSet