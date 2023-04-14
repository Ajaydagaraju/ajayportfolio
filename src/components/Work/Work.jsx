import React, { useRef } from 'react'
import styled from 'styled-components'
import ClientSlider from './Card';
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Roaring Tiger",
        technology : "Mern Stack",
        disc : [
            "Build frontend in React js from scratch",
            "Landing Pages and Admin Panel",
            "All the content on landing pages manage by via Admin Panel"
        ]
    },
    {
        name :"Preference App",
        technology : "Mern Stack",
        disc : [
            "Handle frontend React js Part",
            "Admin Panel & Company Panel",
            "Use Material Mui Frontend Framework ",
            
        ]   },
        {
            name :"PVM",
            technology : "Mern Stack",
            disc : [
                "Use NextJs Framework ",
                "Build Admin Panel",
                "Use Material Mui Frontend Framework and Tailwind Css ",
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
            <span className="green">Live Project </span>
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
