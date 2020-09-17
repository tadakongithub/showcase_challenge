import React, { useState } from 'react'
import ModalContainer from '../atoms/ModalContainer'
import ModalForm from '../atoms/ModalForm'
import ModalHeader from '../molecules/ModalHeader'
import University from '../molecules/University'
import Degree from '../molecules/Degree'
import Study from '../molecules/Study'
import Year from '../molecules/Year'
import Gpa from '../molecules/Gpa'
import Description from '../molecules/Description'

const Modal = (props) => {

    const [university, setUniversity] = useState('')
    const [matchedUni, setMatchedUni] = useState([])
    const allUniversities = props.allUniversities
    const [degree, setDegree] = useState('A.A.')
    const [study, setStudy] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [gpa, setGpa] = useState(0)
    const [description, setDescription] = useState('')

    const displayModal = props.showModal ? 'flex' : 'none';

    const handleTypingUniversity = (e) => {
        const value = e.target.value
        setUniversity(value)
        if(value.length >= 3){
            const matchedItems = allUniversities.filter(item => {
                const name = item.name.toLowerCase()
                const lowerCaseValue = value.toLowerCase()
                return name.includes(lowerCaseValue)
            })
            setMatchedUni(matchedItems)
        } else {
            setMatchedUni([])
        }
    }

    const handleUniversityClicked = (e) => {
        const text = e.target.innerHTML
        setUniversity(text)
        setMatchedUni([])
    }

    const handleChangeOfDegree = (e) => {
        setDegree(e.target.value)
    }

    const handleChangeOfStudy = (e) => {
        setStudy(e.target.value)
    }

    const handleSave = (e) => {
        e.preventDefault()
        props.handleSave(university, degree, study, startYear, endYear, gpa, description)
        setUniversity('')
        setMatchedUni([])
        setDegree('A.A.')
        setStudy('')
        setStartYear('')
        setEndYear('')
        setGpa(0)
        setDescription('')
    }

    return (
        <ModalContainer style={{display: displayModal}}>
            <ModalForm onSubmit={handleSave}>
                <ModalHeader closeModal={props.closeModal} />
                <University 
                    value={university}
                    handleChange={handleTypingUniversity}
                    matchedUni={matchedUni}
                    handleClick={handleUniversityClicked}
                />
                <Degree value={degree} handleChange={handleChangeOfDegree}/>
                <Study value={study} handleChange={handleChangeOfStudy}/>
                <Year
                    title="Start Year"
                    value={startYear}
                    handleChange={(e) => setStartYear(e.target.value)}
                />
                <Year
                    title="End Year"
                    value={endYear}
                    handleChange={(e) => setEndYear(e.target.value)}
                />
                <Gpa title="GPA" value={gpa} handleChange={e => setGpa(e.target.value)} />
                <Description title="Description" value={description} handleChange={e => setDescription(e.target.value)}/>
                <button>Click</button>
            </ModalForm>
        </ModalContainer> 
    )
}

export default Modal