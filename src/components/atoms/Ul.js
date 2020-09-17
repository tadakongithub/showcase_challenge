import styled from 'styled-components'

const Ul = styled.ul.attrs(props => ({
    bg: props.bg || 'papayawhip'
}))`
    background-color: ${props => props.bg};
    margin: 0;
    padding-top: 15px;
`

export default Ul