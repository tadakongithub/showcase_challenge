import React, { useState } from 'react'
import { FlexBox } from '../atoms/FlexBox'
import Modal from '../organisms/Modal'
import MainHeader from '../organisms/MainHeader'
import MainBody from '../organisms/MainBody'

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

    const closeModal = (e) => {
        e.preventDefault()
        setShowModal(false)
    }

    if(props.isLoading){
        return <FlexBox height="100vh"><div>Loading ...</div></FlexBox>
    }

    return (
        <React.Fragment>
            <MainHeader userName={props.userName} handleClick={() => setShowModal(true)}/>
            <MainBody education={education} />
            <Modal showModal={showModal} closeModal={closeModal} allUniversities={props.allUniversities} handleSave={handleSave} />
        </React.Fragment> 
    )
}

export default Main