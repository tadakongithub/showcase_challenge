import React from 'react'
import NameField from '../atoms/NameField'
import SecondaryButton from '../atoms/SecondaryButton'
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
            <SecondaryButton>Enter</SecondaryButton>
        </Container>
    )
}

export default NameFormBottom