import React, { useState } from 'react'
import ModalBg from '../atoms/ModalBg'
import Form from '../atoms/Form'
import ModalHeader from '../molecules/ModalHeader'
import University from '../molecules/University'
import Degree from '../molecules/Degree'
import Year from '../molecules/Year'
import InputSet from '../molecules/InputSet'
import Description from '../molecules/Description'
import Button from '../atoms/Button'

const Modal = (props) => {

    const [university, setUniversity] = useState('')
    const [matchedUni, setMatchedUni] = useState([])
    const [degree, setDegree] = useState('A.A.')
    const [study, setStudy] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [gpa, setGpa] = useState(0)
    const [description, setDescription] = useState('')

    const handleTypingUniversity = (e) => {
        const value = e.target.value
        setUniversity(value)
        if(value.length >= 3){
            const matchedItems = props.allUniversities.filter(item => {
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
        <ModalBg showModal={props.showModal}>
            <Form width="500px" height="500px" onSubmit={handleSave}>
                <ModalHeader closeModal={props.closeModal} />
                <University 
                    value={university}
                    handleChange={handleTypingUniversity}
                    matchedUni={matchedUni}
                    handleClick={handleUniversityClicked}
                />
                <Degree value={degree} handleChange={handleChangeOfDegree}/>
                <InputSet title="Field Of Study" type="text" value={study} handleChange={handleChangeOfStudy}/>
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
                <InputSet title="GPA" type="number" value={gpa} handleChange={e => setGpa(e.target.value)} />
                <Description title="Description" value={description} handleChange={e => setDescription(e.target.value)}/>
                <Button color="white" bg="coral">Save</Button>
            </Form>
        </ModalBg> 
    )
}

export default Modal