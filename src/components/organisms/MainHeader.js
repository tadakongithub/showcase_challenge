import React from 'react'
import styled from 'styled-components'
import MainTitle from '../atoms/MainTitle'
import AddEducationButton from '../atoms/AddEducationButton'

const Container = styled.div`
    
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