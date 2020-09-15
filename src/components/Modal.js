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

    const displayModal = props.showModal ? 'flex' : 'none';
    const displayOptions = matchedUni.length  == 0 ? 'none' : 'block';

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

    const listItems = matchedUni.map((item, index) => <Li key={index} onClick={handleClick}>{item.name}</Li>)

    return (
        <Container style={{display: displayModal}}>
            <Form>
                <label>University</label>
                <input type="text" value={university} onChange={handleChange} />
                <Ul style={{display: displayOptions}}>{listItems}</Ul>
            </Form>
        </Container> 
    )
}

export default Modal