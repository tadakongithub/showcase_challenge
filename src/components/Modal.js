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
    padding: 15px;
    overflow: scroll;
`

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 100px;
    overflow: scroll;
    position: absolute;
    top: 23px;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 100%;
`

const Li = styled.li`
    cursor: pointer;
`

const EachInputField = styled.div`
    margin-top: 10px;
`

const Input = styled.input`
    width: 100%;
`

const UniWrapper  = styled.div`
    position: relative;
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
        setUniversity('')
        setMatchedUni([])
        setDegree('A.A.')
        setStudy('')
        setStartYear('')
        setEndYear('')
        setGpa(0)
        setDescription('')
    }

    const listItems = matchedUni.map((item, index) => <Li key={index} onClick={handleClick}>{item.name}</Li>)

    return (
        <Container style={{display: displayModal}}>
            <Form>
                <button onClick={props.closeModal}>close</button>
                <EachInputField>
                    <label>University</label><br/>
                    <UniWrapper>
                        <Input type="text" value={university} onChange={handleChange} />
                        <Ul style={{display: displayOptions}}>{listItems}</Ul>
                    </UniWrapper>
                </EachInputField>
                <EachInputField>
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
                </EachInputField>
                <EachInputField>
                    <label>Field of Study</label><br/>
                    <Input type="text" value={study} onChange={(e) => setStudy(e.target.value)} />
                </EachInputField>
                <EachInputField>
                    <label>Start Year</label> <br/>
                    <Input type="number" value={startYear} onChange={(e) => setStartYear(e.target.value)} placeholder="yyyy" />
                </EachInputField>
                <EachInputField>
                    <label>End Year</label><br/>
                    <Input type="number" value={endYear} onChange={e => setEndYear(e.target.value)} placeholder="yyyy" />
                </EachInputField>
                <EachInputField>
                    <label>GPA</label><br/>
                    <Input type="number" step="0.01" min="0" max="4" value={gpa} onChange={e => setGpa(e.target.value)} />
                </EachInputField>
                <EachInputField>
                    <label>Description</label><br/>
                    <Description value={description} onChange={e => setDescription(e.target.value)} />
                </EachInputField>
                <button onClick={handleSave}>Click</button>
            </Form>
        </Container> 
    )
}

export default Modal