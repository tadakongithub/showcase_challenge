import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    z-index: 1;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    width: 500px;
    height: 400px;
    background-color: #fff;
`

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: auto;
    max-height: 100px;
    overflow: scroll;
`

const Li = styled.li`
    cursor: pointer;
`

const Modal = (props) => {

    const [university, setUniversity] = useState('')
    const [matchedUni, setMatchedUni] = useState([])
    const allUniversities = props.allUniversities
    const [degree, setDegree] = useState('')
    const [study, setStudy] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [gpa, setGpa] = useState(0)
    const [description, setDescription] = useState('')

    const displayModal = props.showModal ? 'flex' : 'none';
    const displayOptions = matchedUni.length  === 0 ? 'hidden' : 'block';

    const handleChange = (e) => {
        const value = e.target.value
        setUniversity(value)
        console.log(university)
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

    const handleClick = (e) => {
        const text = e.target.innerHTML
        setUniversity(text)
        setMatchedUni([])
    }

    const handleSave = (e) => {
        e.preventDefault()
        props.handleSave(university, degree, study, startYear, endYear, gpa, description)
    }

    const listItems = matchedUni.map((item, index) => <Li key={index} onClick={handleClick}>{item.name}</Li>)

    return (
        <Container style={{display: displayModal}}>
            <Form>
                <label>University</label>
                <input type="text" value={university} onChange={handleChange} />
                <Ul style={{display: displayOptions}}>{listItems}</Ul>
                <label>Degree</label>
                <select value={degree} onChange={(e) => setDegree(e.target.value)}>
                    <option value="A.A.">A.A.</option>
                    <option value="A.S.">A.S.</option>
                    <option value="B.A.">B.A.</option>
                    <option value="B.S.">B.S.</option>
                    <option value="M.A.">M.A.</option>
                    <option value="M.S.">M.S.</option>
                    <option value="Ph.D.">Ph.D.</option>
                </select>
                <label>Field of Study</label>
                <input type="text" value={study} onChange={(e) => setStudy(e.target.value)} />
                <label>Start Year</label> 
                <input type="number" value={startYear} onChange={(e) => setStartYear(e.target.value)} placeholder="yyyy" />
                <label>End Year</label>
                <input type="number" value={endYear} onChange={e => setEndYear(e.target.value)} placeholder="yyyy" />
                <label>GPA</label>
                <input type="number" step="0.01" min="0" max="4" value={gpa} onChange={e => setGpa(e.target.value)} />
                <label>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
                <button onClick={handleSave}>Click</button>
            </Form>
        </Container> 
    )
}

export default Modal