import React from 'react'
import { FlexBorderBottom } from '../atoms/FlexBox'
import CloseButton from '../atoms/CloseButton'

const ModalHeader = (props) => (
    <FlexBorderBottom height="40px" justifyContent="flex-end">
        <CloseButton closeModal={props.closeModal}/>
    </FlexBorderBottom>
)

export default ModalHeader