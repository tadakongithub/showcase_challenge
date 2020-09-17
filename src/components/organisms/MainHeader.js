import React from 'react'
import styled from 'styled-components'
import MainTitle from '../atoms/MainTitle'
import Button from '../atoms/Button'

const Container = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainHeader = (props) => {
    return (
        <Container>
            <MainTitle userName={props.userName} />
            <Button color="white" bg="dodgerblue" onClick={props.handleClick}>Add new education</Button>
        </Container>
    )
}

export default MainHeader