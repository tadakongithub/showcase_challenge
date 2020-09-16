import React from 'react'
import styled from 'styled-components'

const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const OneItemCenter = (props) => <FlexCenter>{props.children}</FlexCenter>

export default OneItemCenter