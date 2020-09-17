import React, { useState } from 'react'
import styled from 'styled-components'
import ModalContainer from '../atoms/ModalContainer'
import ModalHeader from '../molecules/ModalHeader'
import University from '../molecules/University'
import InputFieldWrapper from '../atoms/InputFieldWrapper'
import Input from '../atoms/Input'

const Form = styled.form`
    width: 500px;
    height: 400px;
    background-color: #fff;
    padding: 15px;
    overflow: scroll;
`





const Description = styled.textarea`
    width: 100%;
    height: 200px;
`

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
    const displayOptions = matchedUni.length  === 0 ? 'none' : 'block';

    const updateUniversity = (e) => {
        const value = e.target.value
        setUniversity(value)
        if(value.length > 3){
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

    const handleUniClicked = (e) => {
        const text = e.target.innerHTML
        setUniversity(text)
        setMatchedUni([])
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
            <Form>
                <ModalHeader closeModal={props.closeModal} />
                <University 
                university={university}
                updateUniversity={updateUniversity}
                displayOptions={displayOptions}
                matchedUni={matchedUni}
                uniClicked={handleUniClicked}/>
                <InputFieldWrapper>
                    <label>Degree</label><br/>
                    <select value={degree} onChange={(e) => setDegree(e.target.value)}>
                        <option value="A.A.">A.A.</option>
                        <option value="A.S.">A.S.</option>
                        <option value="B.A.">B.A.</option>
                        <option value="B.S.">B.S.</option>
                        <option value="M.A.">M.A.</option>
                        <option value="M.S.">M.S.</option>
                        <option value="Ph.D.">Ph.D.</option>
                    </select>
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <label>Field of Study</label><br/>
                    <Input type="text" value={study} onChange={(e) => setStudy(e.target.value)} />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <label>Start Year</label> <br/>
                    <Input type="number" value={startYear} onChange={(e) => setStartYear(e.target.value)} placeholder="yyyy" />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <label>End Year</label><br/>
                    <Input type="number" value={endYear} onChange={e => setEndYear(e.target.value)} placeholder="yyyy" />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <label>GPA</label><br/>
                    <Input type="number" step="0.01" min="0" max="4" value={gpa} onChange={e => setGpa(e.target.value)} />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <label>Description</label><br/>
                    <Description value={description} onChange={e => setDescription(e.target.value)} />
                </InputFieldWrapper>
                <button onClick={handleSave}>Click</button>
            </Form>
        </ModalContainer> 
    )
}

export default Modal