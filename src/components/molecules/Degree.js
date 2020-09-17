import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Select from './Select'

const Degree = (props) => {

    const ArrayOfDegrees = ['A.A.', 'A.S.', 'B.A.', 'B.S.', 'M.A.', 'M.S.', 'Ph.D.']

    return (
        <Wrapper>
            <FieldLabel>Degree</FieldLabel><br/>
            <Select array={ArrayOfDegrees} value={props.value} handleChange={props.handleChange}/>
        </Wrapper>
    )
}

export default Degree