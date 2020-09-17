import React from 'react'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import FieldLabel from '../atoms/FieldLabel'
import PositionRelative from '../atoms/PositionRelative'
import Input from '../atoms/Input'
import UniOptionsWrapper from '../atoms/UniOptionsWrapper'
import ClickableLi from '../atoms/ClickableLi'

const University = (props) => {

    const listItems = props.matchedUni.map((item, index) => {
        return <ClickableLi key={index} onClick={props.uniClicked}>{item.name}</ClickableLi>
    })

    return (
        <InputFieldWrapper>
            <FieldLabel>University</FieldLabel><br/>
            <PositionRelative>
                <Input type="text" value={props.university} onChange={props.updateUniversity} />
                <UniOptionsWrapper style={{display: props.displayOptions}}>{listItems}</UniOptionsWrapper>
            </PositionRelative>
        </InputFieldWrapper>
    )
}

export default University