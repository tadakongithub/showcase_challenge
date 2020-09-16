import styled from 'styled-components'

const PrimaryButton = styled.button.attrs(props => ({
    onClick: props.setModal
}))`
    background-color: #4287f5;
    color: #fff;
    border: none;
    padding: 8px;
`

export default PrimaryButton