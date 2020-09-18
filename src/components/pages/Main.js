import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../organisms/Modal'
import MainHeader from '../organisms/MainHeader'
import MainBody from '../organisms/MainBody'

const Main = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [education, setEducation] = useState([])
    const [allUniversities, setAllUniversities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await axios(`http://universities.hipolabs.com/search`)

            setAllUniversities(result.data)
            setIsLoading(false)
        }
        fetchData()
    }, [])

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

    if(isLoading){
        return <div>Loading ...</div>
    }

    return (
        <React.Fragment>
            <MainHeader userName={props.userName} handleClick={() => setShowModal(true)}/>
            <MainBody education={education} />
            <Modal showModal={showModal} closeModal={closeModal} allUniversities={allUniversities} handleSave={handleSave} />
        </React.Fragment> 
    )
}

export default Main