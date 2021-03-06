import React from 'react'
import Wrapper from '../atoms/Wrapper'
import FieldLabel from '../atoms/FieldLabel'
import Input from '../atoms/Input'
import UniOptionsWrapper from '../atoms/UniOptionsWrapper'
import ClickableLi from '../atoms/ClickableLi'

const University = (props) => {

    const listItems = props.matchedUni.map((item, index) => {
        return <ClickableLi key={index} onClick={props.handleClick}>{item.name}</ClickableLi>
    })

    const showOptions = props.matchedUni.length === 0 ? 'none' : 'block'

    return (
        <Wrapper>
            <FieldLabel>{props.title}</FieldLabel><br/>
            <Wrapper pos="relative">
                <Input type="text" value={props.value} onChange={props.handleChange} error={props.value === ''}/>
                <UniOptionsWrapper style={{display: showOptions}}>{listItems}</UniOptionsWrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default University