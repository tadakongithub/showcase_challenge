import React from 'react'

const FormBox = (props) => <form onSubmit={props.submitName}>{props.children}</form>

export default FormBox