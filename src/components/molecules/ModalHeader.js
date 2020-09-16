import React from 'react'
import styled from 'styled-components'
import CloseButton from '../atoms/CloseButton'

const Header = styled.div`
    height: 30px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px;
`

const ModalHeader = (props) => <Header><CloseButton closeModal={props.closeModal}/></Header>

export default ModalHeader