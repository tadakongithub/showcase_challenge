import React from 'react'
import EachPanel from '../atoms/EachPanel'
import TitleOfEachEd from '../atoms/TitleOfEachEd'
import DescOfEachEd from '../atoms/DescOfEachEd'

const EachEducation = ({item}) => {
    return (
        <EachPanel>
            <TitleOfEachEd>{item.degree} {item.study} @ {item.university}</TitleOfEachEd>
            <div>{item.startYear} - {item.endYear}</div>
            <div>GPA : {item.gpa}</div>
            <DescOfEachEd>Description:<br/>{item.description}</DescOfEachEd>
        </EachPanel>
    )
}

export default EachEducation