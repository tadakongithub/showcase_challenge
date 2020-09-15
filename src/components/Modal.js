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

const Modal = (props) => {

    const [university, setUniversity] = useState('')

    const display = props.showModal ? 'flex' : 'none';

    

    const handleChange = (e) => {
        setUniversity(e.target.value)
        console.log(university)
    }

    return (
        <Container style={{display: display}}>
            <Form>
                <label>University</label>
                <input type="text" value={university} onChange={handleChange} />
            </Form>
        </Container> 
    )
}

export default Modal