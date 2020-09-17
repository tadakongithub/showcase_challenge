import React from 'react'
import EachPanel from '../atoms/EachPanel'
import Title from '../atoms/Title'
import Wrapper from '../atoms/Wrapper'

const EachEducation = ({item}) => {
    return (
        <EachPanel>
            <Title mb="5px">{item.degree} {item.study} @ {item.university}</Title>
            <div>Year : {item.startYear} - {item.endYear}</div>
            <div>GPA : {item.gpa}</div>
            <Wrapper>Description:<br/>{item.description}</Wrapper>
        </EachPanel>
    )
}

export default EachEducation