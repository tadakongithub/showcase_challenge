import React from 'react'
import FlexBox from '../atoms/FlexBox'
import Title from '../atoms/Title'
import Button from '../atoms/Button'

const MainHeader = (props) => {
    return (
        <FlexBox height="120px" direction="column" justifyContent="space-evenly">
            <Title fs="1.75em">Welcome to {props.userName}'s education page</Title>
            <Button color="white" bg="dodgerblue" onClick={props.handleClick}>Add new education</Button>
        </FlexBox>
    )
}

export default MainHeader