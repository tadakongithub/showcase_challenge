import React from 'react'
import EachPanel from '../atoms/EachPanel'
import Title from '../atoms/Title'
import DescOfEachEd from '../atoms/DescOfEachEd'

const EachEducation = ({item}) => {
    return (
        <EachPanel>
            <Title>{item.degree} {item.study} @ {item.university}</Title>
            <div>{item.startYear} - {item.endYear}</div>
            <div>GPA : {item.gpa}</div>
            <DescOfEachEd>Description:<br/>{item.description}</DescOfEachEd>
        </EachPanel>
    )
}

export default EachEducation