import React from 'react'
import styled from 'styled-components'
import SidePanel from '../molecules/SidePanel'
import MainPanel from '../molecules/MainPanel'

const ContainerForEducationPanels = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    column-gap: 10px;
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