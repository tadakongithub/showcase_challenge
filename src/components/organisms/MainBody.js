import React, { useState, useEffect } from 'react'
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

    const [windowWidth, setWindowWidth] = useState(undefined)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    })

    if(windowWidth >= 768){
        return (
            <ContainerForEducationPanels>
                <SidePanel education={props.education}/>
                <MainPanel education={props.education} />
            </ContainerForEducationPanels>
        )
    }

    return <MainPanel education={props.education} />
    
}

export default MainBody