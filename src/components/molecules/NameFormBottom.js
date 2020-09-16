import React from 'react'
import NameField from '../atoms/NameField'
import NameEnter from '../atoms/NameEnter'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NameFormBottom = (props) => {
    return (
        <Container>
            <NameField changeUserName={props.changeUserName} />
            <NameEnter />
        </Container>
    )
}

export default NameFormBottom