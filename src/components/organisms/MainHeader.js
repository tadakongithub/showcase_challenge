import React from 'react'
import styled from 'styled-components'
import MainTitle from '../atoms/MainTitle'
import AddEducationButton from '../atoms/AddEducationButton'

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
            <AddEducationButton setModal={props.setModal}/>
        </Container>
    )
}

export default MainHeader