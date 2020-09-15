import React, { useState } from 'react'
import Modal from './Modal'
import styled  from 'styled-components'

const ContainerForEducationPanels = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    column-gap: 10px;
` 

const SidePanle = styled.ul`
    background-color: #ddd;
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const MainPanel = styled.div`
    display: grid;
    grid-template-columns: 100%;
    row-gap: 10px;
`

const EachEducationPanel = styled.div`
    background-color: #ddd;
    padding: 10px;
`

const Main = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [education, setEducation] = useState([])

    const handleSave = (university, degree, study, startYear, endYear, gpa, description) => {
        const newEducation = education.concat({
            university: university,
            degree: degree,
            study: study,
            startYear: startYear,
            endYear: endYear,
            gpa: gpa,
            description: description
        })
        setEducation(newEducation)
        setShowModal(false)
    }

    const educationLists = education.slice().reverse().map((item, index) => {
        return (
            <EachEducationPanel key={index}>
                <h2>{item.degree} {item.study} @ {item.university}</h2>
                <div>{item.startYear} - {item.endYear}</div>
                <div>GPA : {item.gpa}</div>
                <div>Description:<br></br>{item.description}</div>
            </EachEducationPanel>
        )
    })

    return (
        <React.Fragment>
            <h1>Welcome to {props.userName}'s education page</h1>
            <button onClick={() => setShowModal(true)}>Add new education</button>
            <Modal showModal={showModal} allUniversities={props.allUniversities} handleSave={handleSave} />
            <ContainerForEducationPanels>
                <SidePanle></SidePanle>
                <MainPanel>{educationLists}</MainPanel>
            </ContainerForEducationPanels>
        </React.Fragment>
    )
}

export default Main