import React from 'react'
import NameForm from '../organisms/NameForm'
import FlexBox from '../atoms/FlexBox'

const Intro = (props) => <FlexBox width="100vw" height="100vh"><NameForm setName={props.setName}/></FlexBox>

export default Intro