import React, { useState } from 'react'
import Modal from './Modal'

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

    const educationLists = education.map((item, index) => {
        return (
            <div key={index}>
                <li>{item.university}</li>
                <li>{item.degree}</li>
            </div>
        )
    })

    return (
        <React.Fragment>
            <h1>Welcome to {props.userName}'s education page</h1>
            <button onClick={() => setShowModal(true)}>Add new education</button>
            <Modal showModal={showModal} allUniversities={props.allUniversities} handleSave={handleSave} />
            <ul>{educationLists}</ul>
        </React.Fragment>
    )
}

export default Main