import React from 'react'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import FieldLabel from '../atoms/FieldLabel'
import Select from './Select'

const Degree = (props) => {

    const ArrayOfDegrees = ['A.A.', 'A.S.', 'B.A.', 'B.S.', 'M.A.', 'M.S.', 'Ph.D.']

    return (
        <InputFieldWrapper>
            <FieldLabel>Degree</FieldLabel><br/>
            <Select array={ArrayOfDegrees} value={props.value} handleChange={props.handleChange}/>
        </InputFieldWrapper>
    )
}

export default Degree