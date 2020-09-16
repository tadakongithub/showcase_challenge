import React from 'react'
import NameForm from '../organisms/NameForm'
import OneItemCenter from '../templates/OneItemCenter'

const Intro = (props) => <OneItemCenter><NameForm setName={props.setName}/></OneItemCenter>

export default Intro