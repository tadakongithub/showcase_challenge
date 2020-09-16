import React from 'react'
import styled from 'styled-components'
import EachEducation from './EachEducation'

const MainPanelContainer = styled.div`
`

const MainPanel = (props) => {
    const educationLists = props.education.slice().reverse().map((item, index) => <EachEducation item={item} key={index} />)
    return <MainPanelContainer>{educationLists}</MainPanelContainer>
}

export default MainPanel