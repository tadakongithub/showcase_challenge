import React from 'react'
import Option from '../atoms/Option'
import SelectElem from'../atoms/SelectElem'

const Select = ({array, value, handleChange}) => {

    const Options = array.map((item, index) => <Option value={item}>{item}</Option>)

    return <SelectElem value={value} onChange={handleChange}>{Options}</SelectElem>

}

export default Select