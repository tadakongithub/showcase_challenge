import React from 'react'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import FieldLabel from '../atoms/FieldLabel'
import PositionRelative from '../atoms/PositionRelative'
import Input from '../atoms/Input'
import UniOptionsWrapper from '../atoms/UniOptionsWrapper'
import ClickableLi from '../atoms/ClickableLi'

const University = (props) => {

    const listItems = props.matchedUni.map((item, index) => {
        return <ClickableLi key={index} onClick={props.handleClick}>{item.name}</ClickableLi>
    })

    const showOptions = props.matchedUni.length === 0 ? 'none' : 'block'

    return (
        <InputFieldWrapper>
            <FieldLabel>University</FieldLabel><br/>
            <PositionRelative>
                <Input type="text" value={props.value} onChange={props.handleChange} />
                <UniOptionsWrapper style={{display: showOptions}}>{listItems}</UniOptionsWrapper>
            </PositionRelative>
        </InputFieldWrapper>
    )
}

export default University