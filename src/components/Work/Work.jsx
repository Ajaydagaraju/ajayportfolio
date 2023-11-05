import React, { useRef } from 'react'
import styled from 'styled-components'
import ClientSlider from './Card';
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Zircog Technologies",
        technology : "Front-end Developer",
        disc : [
            "Build frontend in JavaScript",
            "Manage UI and logic part of Crypot Currency Project.",
            "Use Material Mui Frontend Framework ",
        ]
    },
    {
        name :"tecHindustan",
        technology : "React Js Developer",
        disc : [
            "Handle frontend React js & Next Js Part",
            "Ecommerce Front-end & Admin Panel",
            "All the content on landing pages manage by via Admin Panel"
            
        ]   },
        
    
    
]


const Clients = () => {
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='work'>
        <Slide direction="left">
            {/* <span className="green">Live Project </span> */}
            <h1>Work Experience</h1>
        </Slide>
        <Card>
        {clientDisc}
        </Card>
        
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }
`
const Card= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin-top: 4rem;
gap: .5rem;
`;
