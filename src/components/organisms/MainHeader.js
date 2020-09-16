import React from 'react'
import styled from 'styled-components'
import MainTitle from '../atoms/MainTitle'
import PrimaryButton from '../atoms/PrimaryButton'

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
            <PrimaryButton setModal={props.setModal}>Add new education</PrimaryButton>
        </Container>
    )
}

export default MainHeader