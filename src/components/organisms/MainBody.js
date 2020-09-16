import React from 'react'
import styled from 'styled-components'
import SidePanel from '../molecules/SidePanel'
import MainPanel from '../molecules/MainPanel'

const ContainerForEducationPanels = styled.div`
    display: grid;
    grid-template-columns: 25% auto;
    column-gap: 10px;
    height: auto;
    min-height: 500px;
` 

const MainBody = (props) => {
    return (
        <ContainerForEducationPanels>
            <SidePanel education={props.education}/>
            <MainPanel education={props.education} />
        </ContainerForEducationPanels>
    )
}

export default MainBody