import React from 'react'
import styled from 'styled-components'
import EachEducation from './EachEducation'

const MainPanelContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    row-gap: 10px;
`

const MainPanel = (props) => {
    const educationLists = props.education.slice().reverse().map((item, index) => <EachEducation item={item} key={index} />)
    return <MainPanelContainer>{educationLists}</MainPanelContainer>
}

export default MainPanel