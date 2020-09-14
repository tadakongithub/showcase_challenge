import React from 'react'
import styled from 'styled-components'

const Modal = (props) => {
    const display = props.showModal ? 'flex' : 'none';

    const Container = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.3);
        z-index: 1;
        align-items: center;
        justify-content: center;
        display: ${display}
    `
    return (
        <Container>
            hi
        </Container>
    )
}

export default Modal