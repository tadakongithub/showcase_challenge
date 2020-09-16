import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
    width; 20px;
    height: 20px;
`

const CloseButton = (props) => <Btn onClick={props.closeModal}>&times;</Btn>

export default CloseButton