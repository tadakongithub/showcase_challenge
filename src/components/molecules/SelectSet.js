import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Select from './Select'

const SelectSet = ({title, array, value, handleChange}) => {

    return (
        <Wrapper>
            <FieldLabel>{title}</FieldLabel><br/>
            <Select array={array} value={value} handleChange={handleChange}/>
        </Wrapper>
    )
}

export default SelectSet