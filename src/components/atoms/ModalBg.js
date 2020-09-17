import styled from 'styled-components'

const ModalBg= styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    z-index: 1;
    display: ${props => props.showModal ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
`

export default ModalBg