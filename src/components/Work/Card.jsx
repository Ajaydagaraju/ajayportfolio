import React from 'react'
import styled from 'styled-components'


const ClientSlider = (props) => {
    const {name, technology, disc} = props.item;
  return (
    <Container>
        <Heading>
        {name}
        </Heading>
        <SubHeading>
        {technology}
        </SubHeading>
        <Body>
        <ul>
        {disc?.map((item)=> {
          return  <li>{item}</li>
        
        })}
        </ul>
        </Body>
    </Container>
  )
}

export default ClientSlider

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Heading = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:800;
 
`
const Body = styled.div`
    font-size: 0.8rem;
    margin-block: .5rem;
    max-width:80%;
    width:100%;
    margin-inline: auto;
    li{
        margin-block:7px;
    }
`
const SubHeading = styled.div`
    font-size: .9rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #01be96;
    margin-block:15px;
`