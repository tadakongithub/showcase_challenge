import styled from 'styled-components'

const FlexBox = styled.div.attrs(props => ({
    width: props.width || 'auto',
    height: props.height || 'auto',
    direction: props.direction || 'row',
    alignItems: props.alignItems || 'center',
    justifyContent: props.justifyContent || 'center'
}))`
    display: flex;
    flex-direction: ${props => props.direction};
    width: ${props => props.width};
    height: ${props => props.height};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`

export default FlexBox