import styled from 'styled-components'

const Title = styled.h1.attrs(props => ({
    padding: props.padding || '0',
    margin: props.margin || '0',
    fontSize: props.fontSize || '1.25em'
}))`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    font-size: ${props => props.fontSize};
`

export default Title